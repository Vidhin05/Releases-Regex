#!/usr/bin/env node
/**
 * Validates regexes and Stream Expression Language (SEL) expressions.
 * Regexes: JSON structure, valid pattern syntax (/pattern/flags).
 * Expressions: JSON structure, balanced parentheses, regex name references.
 * Run: node validate.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname);
const EN_REGEXES = path.join(ROOT, 'English', 'regexes.json');
const DE_REGEXES = path.join(ROOT, 'German', 'regexes.json');
const EN_EXPRESSIONS = path.join(ROOT, 'English', 'expressions.json');
const DE_EXPRESSIONS = path.join(ROOT, 'German', 'expressions.json');
const EN_LEGACY = path.join(ROOT, 'English', 'legacy-expressions.json');

function parseRegexLiteral(str) {
  if (typeof str !== 'string' || !str.startsWith('/')) return null;
  let i = 1;
  while (i < str.length) {
    const c = str[i];
    if (c === '\\') {
      i += 2;
      continue;
    }
    if (c === '/') {
      const body = str.slice(1, i);
      const flags = str.slice(i + 1);
      return { body, flags };
    }
    i++;
  }
  return null;
}

function validateRegexes(filePath, label) {
  const errors = [];
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    return [{ file: label, err: `JSON parse error: ${e.message}` }];
  }
  if (!Array.isArray(data)) return [{ file: label, err: 'Expected array' }];
  data.forEach((item, idx) => {
    if (!item || typeof item !== 'object') {
      errors.push({ file: label, idx, err: 'Invalid item' });
      return;
    }
    if (!item.name || typeof item.name !== 'string') {
      errors.push({ file: label, idx, err: 'Missing or invalid name' });
    }
    const pattern = item.pattern;
    if (!pattern || typeof pattern !== 'string') {
      errors.push({ file: label, idx, name: item.name, err: 'Missing or invalid pattern' });
      return;
    }
    const parsed = parseRegexLiteral(pattern);
    if (!parsed) {
      errors.push({ file: label, idx, name: item.name, err: 'Pattern must be /regex/flags format' });
      return;
    }
    try {
      new RegExp(parsed.body, parsed.flags);
    } catch (e) {
      errors.push({ file: label, idx, name: item.name, err: `Invalid regex: ${e.message}` });
    }
  });
  return errors;
}

function loadRegexNames(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return new Set(data.map((r) => r.name).filter(Boolean));
  } catch (e) {
    return null;
  }
}

function balancedParens(str) {
  let depth = 0;
  const pairs = { '(': ')', '[': ']', '{': '}' };
  const open = new Set(Object.keys(pairs));
  const close = new Set(Object.values(pairs));
  for (const c of str) {
    if (open.has(c)) depth++;
    else if (close.has(c)) depth--;
    if (depth < 0) return false;
  }
  return depth === 0;
}

function extractRegexNames(expr) {
  const names = [];
  let i = 0;
  while ((i = expr.indexOf('regexMatched(', i)) !== -1) {
    const start = i + 'regexMatched('.length;
    let depth = 1;
    let j = start;
    let firstArgEnd = -1;
    while (j < expr.length && depth > 0) {
      const c = expr[j];
      if (c === '(') depth++;
      else if (c === ')') depth--;
      else if (c === ',' && depth === 1 && firstArgEnd === -1) firstArgEnd = j;
      j++;
    }
    const argsStr = firstArgEnd === -1 ? '' : expr.slice(firstArgEnd + 1, j - 1).trim();
    const matches = argsStr.matchAll(/'((?:[^'\\]|\\.)*)'/g);
    for (const m of matches) names.push(m[1].replace(/\\'/g, "'"));
    i = j;
  }
  return [...new Set(names)];
}

function validateExpressions(exprPath, regexNames, label) {
  const errors = [];
  let data;
  try {
    data = JSON.parse(fs.readFileSync(exprPath, 'utf8'));
  } catch (e) {
    return [{ file: label, err: `JSON parse error: ${e.message}` }];
  }
  if (!Array.isArray(data)) return [{ file: label, err: 'Expected array' }];
  data.forEach((item, idx) => {
    const expr = item?.expression;
    if (!expr || typeof expr !== 'string') {
      errors.push({ file: label, idx, err: 'Missing expression' });
      return;
    }
    if (item.score !== undefined && typeof item.score !== 'number') {
      errors.push({ file: label, idx, err: 'score must be number' });
    }
    if (!balancedParens(expr)) {
      errors.push({ file: label, idx, err: 'Unbalanced parentheses' });
    }
    const refs = extractRegexNames(expr);
    for (const name of refs) {
      if (!regexNames.has(name)) {
        errors.push({ file: label, idx, ref: name, err: `Unknown regex: '${name}'` });
      }
    }
  });
  return errors;
}

const allErrors = [];

allErrors.push(...validateRegexes(EN_REGEXES, 'English/regexes.json'));
allErrors.push(...validateRegexes(DE_REGEXES, 'German/regexes.json'));

const enRegexNames = loadRegexNames(EN_REGEXES);
const deRegexNames = loadRegexNames(DE_REGEXES);
if (enRegexNames) {
  allErrors.push(...validateExpressions(EN_EXPRESSIONS, enRegexNames, 'English/expressions.json'));
  allErrors.push(...validateExpressions(EN_LEGACY, enRegexNames, 'English/legacy-expressions.json'));
}
if (deRegexNames) {
  allErrors.push(...validateExpressions(DE_EXPRESSIONS, deRegexNames, 'German/expressions.json'));
}

if (allErrors.length > 0) {
  const regexErrs = allErrors.filter((e) => e.file?.includes('regexes.json'));
  const exprErrs = allErrors.filter((e) => !e.file?.includes('regexes.json'));
  if (regexErrs.length) {
    console.log('INVALID REGEXES:');
    regexErrs.forEach((e) => console.log(JSON.stringify(e)));
  }
  if (exprErrs.length) {
    console.log('INVALID EXPRESSIONS:');
    exprErrs.forEach((e) => console.log(JSON.stringify(e)));
  }
  process.exit(1);
}
console.log('All regexes and expressions valid.');

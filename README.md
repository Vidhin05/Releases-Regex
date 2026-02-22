# Releases-Regex Repository

Regular Expressions and ranked stream expressions (AIOStreams) for automatically **sorting and scoring** anime, movies, and TV show releases. Patterns are sourced from [TRaSH Guides](https://trash-guides.info) to score releases based on source quality (Remux, Bluray, WEB), release groups (both high-quality and low-quality), audio/visual tags (HDR, Atmos, DTS), and other quality indicators.

---

## 🚀 AIOStreams - Usage Instructions

AIOStreams uses a template-based import system. Templates are auto-updated with each release; you only need to re-apply them from the Template Wizard section in About to get the latest updates.

### Stream Expression Score-based Sorting

#### **Installation**
1. In AIOStreams, go to `About -> Template Wizard -> Import Template (Bottom Right)`
2. Paste this URL:
   ```
   https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/all-templates.json
   ```
3. Click go, and then load the template (e.g. **English Regexes** or **German Regexes**).

> [!TIP]
> Use this sort order:
>
> Recommended English sort order:
> - **Global Sort Order**: `Cached`
> - **Cached Sort Order**: `SeaDex -> Resolution -> Quality -> Library ->  Stream Expressions -> Stream Expression Score -> (optional Language -> Visual Tag -> Audio Tag -> Encode) -> Bitrate`
> - **Uncached Sort Order**: `SeaDex -> Resolution -> Quality -> Library -> Stream Expressions -> Stream Expression Score -> Seeders -> (optional Language -> Visual Tag -> Audio Tag -> Encode) -> Bitrate`
>
> Recommended German sort order:
> - **Global Sort Order**: `Cached`
> - **Cached Sort Order**: `SeaDex -> Library -> Stream Expressions -> Stream Expression Score -> (optional Language -> Visual Tag -> Audio Tag -> Encode) -> Bitrate`
> - **Uncached Sort Order**: `SeaDex -> Library -> Stream Expressions -> Stream Expression Score -> Seeders -> (optional Language -> Visual Tag -> Audio Tag -> Encode) -> Bitrate`

> [!CAUTION]
> **Formatter: `seScore` & `rseMatched`**
>
> Add `{stream.seScore}` and `{stream.rseMatched}` to your formatter. `seScore` shows the total score from ranked expressions (used for sorting); `rseMatched` shows which expressions matched. **Do not use `regexMatched`**.
>
> This repo has two layers: (1) **regex patterns** (regexes.json) that match release titles, and (2) **ranked stream expressions** (expressions.json) that use those regexes as filters and assign RSE names with scores. Most RSEs are regex-based, but the expressions apply query-type checks, negations, and merges before output.
>
> `regexMatched` returns only the first pattern it matches. For a Kitsune anime release it will show Web T1 instead of Web T3 — incorrect tagging. Use `rseMatched` to see what actually impacted the score.

| Usage | Description |
|-------|-------------|
| `{stream.rseMatched}` | **Recommended.** Show all matched expressions — tier, bonuses (Dual Audio, Uncensored), penalties, etc. Full picture of what impacts the score. |
| `{stream.rseMatched::first}` | First matched element only. |
| `{stream.rseMatched::first::~ T["{stream.rseMatched::first}"\|\|""]}` | **Tier only** (Remux T1, Web T1, etc.) — shows first element when it contains ` T`; hides bonus tags. |
| `{stream.rseMatched::string::~Value["if contains"\|\|""]}` | Treat array as joined string; check if it contains `Value` (substring). |

> [!NOTE]
> I recommend using a SEL to smartly limit and filter streams instead of using exclude regexes. You can use [Tamtaro's](https://github.com/Tam-Taro/SEL-Filtering-and-Sorting#-how-to-import).

### Customizing Scores

The template includes several ranked stream expressions that you can customize by editing their scores directly in the template configuration:

#### **Anime Dual Audio**
If you prefer Dual Audio releases, you can adjust the score based on your preference:
- **Within same tier**: Score of `10` (prefers dual audio over single audio in the same quality tier)
- **One tier above**: Score of `101` (prefers dual audio from a lower tier over single audio from a higher tier)
- **Over any tier**: Score of `2000` (always prefers dual audio regardless of quality tier)
- You may also want to disable `Dubs Only` or give it a positive score same as or lower than `Anime Dual Audio`'s if you only watch dubs.

#### **Uncensored**
If you prefer Uncensored anime releases, you can adjust the score similarly:
- **Within same tier**: Score of `10` (prefers uncensored within the same quality tier)
- **One tier above**: Score of `101` (prefers uncensored from a lower tier over censored from a higher tier)

Using these scoring options, you'll still benefit from the tier system when better release groups provide Dual Audio or Uncensored releases.

#### **Other Customizable Expressions**
- **DV w/o HDR fallback** (disabled by default): Enable DV w/o HDR fallback ranked SEL if not all your devices support DV. This also applies to DV releases without HDR10 fallback (Profile 5).
- **10bit** (disabled by default): Enable to filter out 10-bit encodes if your devices (FireStick, etc.) don't support them.
- **Anime Dual Audio** (disabled by default): Adjust score based on your preference (see above for scoring options).
- **Uncensored**: Adjust score based on your preference (see above for scoring options).
- **Dubs Only**: Disable to keep anime dub-only streams.
- **Bad Dual Groups**: Disable to keep dual audio groups with non-English as primary language.
- **x265**: Disable to keep x265 HD encodes without HDR/DV.
- **3D**: Disable to keep 3D releases if you want them.
- **Obfuscated**: Disable to keep obfuscated releases (Enabled by default, but feel free to adjust score as needed.).
- **Retags**: Disable to keep retagged releases (Enabled by default, but feel free to adjust score as needed.).

---

## 🔧 Community Instance Admin Setup

### Environment Variables

Set this environment variable in your AIOStreams instance to increase the sync speed for regexes and stream expressions:

```bash
WHITELISTED_REGEX_PATTERNS_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/English/regexes.json", "https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/German/regexes.json"]
WHITELISTED_SEL_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/English/expressions.json", "https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/German/expressions.json", "https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/English/legacy-expressions.json"]
WHITELISTED_REGEX_PATTERNS_URLS_GITHUB_USERNAMES=["Vidhin05"]
WHITELISTED_SEL_URLS_GITHUB_USERNAMES=["Vidhin05"]
WHITELISTED_SYNC_REFRESH_INTERVAL=3600
```

---

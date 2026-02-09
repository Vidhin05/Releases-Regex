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
3. Click go, and then load the template.

> [!TIP]
> Add `{stream.seScore}` to your formatter to display the score and `{stream.rseMatched}` to display the matched stream expressions.
>
> My sort order:
> - **Global Sort Order**: `Cached`
> - **Cached Sort Order**: `SeaDex -> Library -> Resolution -> Quality -> Stream Expression Matched -> Stream Expression Score -> Bitrate`
> - **Uncached Sort Order**: `SeaDex -> Library -> Resolution -> Quality -> Stream Expression Matched -> Stream Expression Score -> Seeders -> Bitrate`

> [!CAUTION]
> It is **not recommended** to use the bad regex pattern as an exclude regex. If used so, it may filter out all streams for titles that have generic names (e.g., names like `Kingdom`, `Zeus`, `Epic`).
>
> Instead, it is better to use Stream Expressions Language (SEL) to smartly limit and filter streams. You can use [Tamtaro's](https://github.com/Tam-Taro/SEL-Filtering-and-Sorting#-how-to-import).

### Customizing Scores

The template includes several ranked stream expressions that you can customize by editing their scores directly in the template configuration:

#### **Anime Dual Audio**
If you prefer Dual Audio releases, you can adjust the score based on your preference:
- **Within same tier**: Score of `10` (prefers dual audio over single audio in the same quality tier)
- **One tier above**: Score of `101` (prefers dual audio from a lower tier over single audio from a higher tier)
- **Over any tier**: Score of `2000` (always prefers dual audio regardless of quality tier)
- You may also want to disable `Dual Audio` if you only watch dubs.

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
- **x265 (HD)**: Disable to keep x265 HD encodes.
- **3D**: Disable to keep 3D releases if you want them.
- **Obfuscated**: Disable to keep obfuscated releases (Enabled by default, but feel free to adjust score as needed.).
- **Retags**: Disable to keep retagged releases (Enabled by default, but feel free to adjust score as needed.).

---

## 🔧 Community Instance Admin Setup

If you're running a community AIOStreams instance and want to allow users to use these regexes, you can now enable them using environment variables.

### Environment Variables

Set these environment variables in your AIOStreams instance to allow users to use these regexes and stream expressions:

```bash
WHITELISTED_REGEX_PATTERNS_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/English/regexes.json"]
WHITELISTED_SEL_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/English/expressions.json"]
WHITELISTED_SYNC_REFRESH_INTERVAL=3600
```

---

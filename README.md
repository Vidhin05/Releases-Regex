# Releases-Regex Repository

Regular Expressions and ranked stream expressions (AIOStreams) for automatically **sorting and scoring** anime, movies, and TV show releases. Patterns are sourced from [TRaSH Guides](https://trash-guides.info) to score releases based on source quality (Remux, Bluray, WEB), release groups (both high-quality and low-quality), audio/visual tags (HDR, Atmos, DTS), and other quality indicators.

---

## 🚀 AIOStreams - Usage Instructions

AIOStreams uses a template-based import system. Templates are auto-updated with each release; you only need to re-apply them from the Template Wizard section in About to get the latest updates.

### Stream Expression Score-based Sorting (AIOStreams Nightly Only)

This repository has two templates with **Ranked Stream Expressions** featuring scoring capabilities:

#### **Basic Template**
Includes merged anime regexes + **30 regex-based Ranked Stream Expressions** with scoring.  
**Recommended for:** Public instances or users who prefer release group-based scoring only.
```
https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/basic-template.json
```

#### **Advanced Template**
Everything from the Basic Template **plus 16 additional expressions** that score based on audio and visual tags (for now — more coming later).  
**Recommended for:** Selfhosters or public instances with `MAX_STREAM_EXPRESSION_FILTERS` set above 46.
```
https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/advanced-template.json
```

#### **Installation**
1. In AIOStreams, go to `About -> Template Wizard -> Import Template (Bottom Right)`
2. Paste one of the template URLs above (choose **Basic** or **Advanced** based on your needs)
3. Click go, and then load the template.

> [!TIP]
> Add `{stream.streamExpressionScore}` to your formatter to display the score.
>
> My sort order:
> - **Global Sort Order**: `Cached`
> - **Cached Sort Order**: `SeaDex -> Library -> Resolution -> Quality -> Stream Expression Matched -> Stream Expression Score -> Bitrate`
> - **Uncached Sort Order**: `SeaDex -> Library -> Resolution -> Quality -> Stream Type -> Stream Expression Matched -> Stream Expression Score -> Seeders -> Bitrate`

> [!CAUTION]
> It is **not recommended** to use the bad regex pattern as an exclude regex. If used so, it may filter out all streams for titles that have generic names (e.g., names like `Kingdom`, `Zeus`, `Epic`).
>
> Instead, it is better to use Stream Expressions Language (SEL) to smartly limit and filter streams. You can use [Tamtaro's](https://github.com/Tam-Taro/SEL-Filtering-and-Sorting#-how-to-import).

---

## 🔧 Community Instance Admin Setup

If you're running a community AIOStreams instance and want to allow users to use these regexes, you can now enable them using environment variables.

### Environment Variables

Set these environment variables in your AIOStreams instance to allow users to use these regexes, to fetch updates hourly and to allow more stream expressions (for the use of the advanced template):

```bash
ALLOWED_REGEX_PATTERNS_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json"] 
ALLOWED_REGEX_PATTERNS_URLS_REFRESH_INTERVAL=3600000
MAX_STREAM_EXPRESSION_FILTERS=60
```

---

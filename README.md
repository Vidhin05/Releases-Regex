# Releases-Regex Repository

This repository contains **regular expressions (regexes) for the best and recommended release groups** along with regexes for unwanted releases, sourced from [TRaSH Guides](https://trash-guides.info).

> [!NOTE]
> TRaSH Guides is a community-driven resource offering clear, step-by-step guides for optimizing your media management tools—primarily Sonarr for TV shows and Radarr for Movies. Born from a personal quest to fine-tune quality profiles and release preferences, these guides break down complex configurations into easy-to-follow instructions.

> [!IMPORTANT]
> This repository is **not** a general TRaSH Guides repository. It is **only for regex patterns** that help filter and prioritize **high-quality releases** based on TRaSH's recommendations.

---

## 📖 Release Formats

Here are some **common release formats**:

- **Remux** – Lossless, no re-encoding, largest file size, best quality
- **UHD Bluray** – 4K Bluray rip with HDR and high color depth, often re-encoded
- **HD Bluray** – 1080p Bluray rip with higher bitrate than streaming, usually re-encoded
- **WEB-DL** – Direct stream download, no compression artifacts, lower bitrate than Blu-ray

For an in-depth breakdown, visit the [Wikipedia release formats](https://en.wikipedia.org/wiki/Pirated_movie_release_types#Release_formats).

---

## 🚀 AIOStreams - Usage Instructions

AIOStreams uses a template-based import system. Templates are auto-updated with each release; you only need to re-apply them from the Template Wizard section in About to get the latest updates.

> [!WARNING]
> After regexes are updated, public AIOStreams instances may take up to 24 hours to fetch changes. If you're on a public instance, wait a while after update notifications before updating your regexes. You'll know the instance has fetched the update when saving your config shows `You are only permitted to use specific regex patterns`. Once you see that message, you can apply the regex patterns update.

### 🎯 BETA: Stream Expression Score-based Sorting (AIOStreams Nightly Only)

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

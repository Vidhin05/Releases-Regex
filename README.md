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

AIOStreams supports two import methods: a template URL or a direct JSON link. The template method is recommended because it's simpler and templates are auto-updated with each release; you only need to re-apply them from the Template Wizard section in About. With the direct JSON link, you must manually revisit `Filters → Regex → Preferred` and update the link each time.

> [!WARNING]
> After regexes are updated, public AIOStreams instances may take up to 24 hours to fetch changes. If you're on a public instance, wait a while after update notifications before updating your regexes. You'll know the instance has fetched the update when saving your config shows `You are only permitted to use specific regex patterns`. Once you see that message, you can apply the regex patterns update.

#### **Option 1: Template Method (Recommended)**
1. In AIOStreams, go to `About -> Template Wizard -> Import Template (Bottom Right)`
2. Paste the template URL:
   `https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes-template.json`
3. Click go, and then load the template.

<details>
<summary> Option 2: Filters → Regex</summary>

1. Go to `Filters → Regex → Preferred`
2. Paste the raw URL there:
   `https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json`
</details>

> [!TIP]
> My sort order: Set your Preferred Stream Types to `Usenet -> Debrid` and configure:
> - **Global Sort Order**: `Cached`
> - **Cached Sort Order**: `SeaDex -> Library -> Resolution -> Regex Patterns -> Size`
> - **Uncached Sort Order**: `Resolution -> SeaDex -> Library -> Stream Type -> Regex Patterns -> Size`

> [!CAUTION]
> It is **not recommended** to use the bad regex pattern as an exclude regex. If used so, it may filter out all streams for titles that have generic names (e.g., names like `Kingdom`, `Zeus`, `Epic`).
>
> Instead, it is better to use Stream Expressions Language (SEL) to smartly limit and filter streams. You can use [Tamtaro's](https://github.com/Tam-Taro/SEL-Filtering-and-Sorting#-how-to-import).

---

## 🔧 Community Instance Admin Setup

If you're running a community AIOStreams instance and want to allow users to use these regexes, you can now enable them using environment variables.

### Environment Variables

Set this environment variable in your AIOStreams instance to allow users to use these regexes and to fetch updates hourly:

```bash
ALLOWED_REGEX_PATTERNS_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json"]
ALLOWED_REGEX_PATTERNS_URLS_REFRESH_INTERVAL=3600000
```

---

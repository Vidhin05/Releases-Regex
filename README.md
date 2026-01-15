# Releases-Regex Repository

This repository contains **regular expressions (regexes) for the best and recommended release groups** along with regexes for unwanted releases, sourced from [TRaSH Guides](https://trash-guides.info).

> [!IMPORTANT]
> TRaSH Guides is a community-driven resource offering clear, step-by-step guides for optimizing your media management tools—primarily Sonarr for TV shows and Radarr for Movies. Born from a personal quest to fine-tune quality profiles and release preferences, these guides break down complex configurations into easy-to-follow instructions.

> [!CAUTION]
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

## 🚀 Usage Instructions (For AIOStreams)

### AIOStreams - JSON Format

AIOStreams supports JSON regex files for improved organization. Choose one of the following options:

#### **📥 Direct JSON Links:**
- **[Merged Regexes (JSON)](merged-regexes.json)** - For Movies and TV Shows only
- **[Merged+Anime Regexes (JSON)](merged-anime-regexes.json)** - For Movies, TV Shows, and Anime *(Recommended)*

#### **🔗 Raw GitHub Links (for direct import):**
```
https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-regexes.json
```
```
https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json
```

> [!TIP]
> ### Configuration Steps
> 
> 1. In AIOStreams, navigate to the `Filters -> Regex` section
> 2. Copy one of the Raw GitHub links above and paste it into the **"Preferred"** field. **Do not** use the "Include", "Required", or "Exclude" fields for these regexes
> 3. **For non-Usenet/P2P users**: Set your **Global Sort Order** to one of the options below. For the global setting to take effect properly, ensure the sort order fields for specific content types (e.g., Movie, Series) are left empty. You can remove "cached" from the sort order if you are only using Real-Debrid, as many top streams are cached despite showing as not cached. There is a lot of flexibility in the sort order, so you can experiment with different options to find the best one for you
>    - **Resolution/Quality-First**: `Cached -> Library -> Resolution -> Quality -> Regex Patterns -> Size`
>    - **Resolution-First**: `Cached -> Library -> Resolution -> Regex Patterns -> Size`
>    - **Known Groups-First**: `Cached -> Library -> Regex Patterns -> Resolution -> Size`
> 
> 4. **For Usenet/P2P users**: Set your Preferred Stream Types to `Usenet -> Debrid` and configure the following:
>    - **Global Sort Order**: `Cached`
>    - **Cached Sort Order**: `Resolution -> Library -> Quality -> Regex Patterns -> Size`
>    - **Uncached Sort Order**: `Resolution -> Library -> Quality -> Stream Type -> Regex Patterns -> Size`

> [!WARNING]
> It is **not recommended** to remove the bad regex pattern from the JSON file and use it in the exclude regex section. If used as an exclude regex, it may filter out all streams for titles that have generic names (e.g., names like `Kingdom`, `Zeus`, `Epic`).
> Instead, it is better to use Stream Expressions Language (SEL) to smartly limit and filter streams. You can use [this SEL Exclude JSON](exclude-sel.json) to help you with that, heavily inspired by [Tamtaro's work](https://discord.com/channels/1225024298490662974/1410118448306192425) [GitHub](https://github.com/Tam-Taro/SEL-Filtering-and-Sorting).
> 
> The `exclude-sel.json` file contains advanced SEL expressions that intelligently filter out low-quality streams (like CAM, TS, TC, SCR) and lower resolutions when higher quality alternatives are available. It uses conditional logic based on the [Stream Expression Language](https://github.com/Viren070/AIOStreams/wiki/Stream-Expression-Language) to dynamically exclude streams only when better options exist, preventing the loss of all streams for titles with generic names.
> 
> Raw Github link for direct import in Excluded Stream Expressions:
> ```
> https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/exclude-sel.json
> ```

<details>
<summary>Click to see recommended custom formatters</summary>

> For pre-built custom formats, you can select the **"Light Google Drive"** format directly from the formatter section on the configuration page.
>
> Here's an additional recommended custom format for TV screens:
> <details>
> <summary>TV-Usage Optimized Advanced Format</summary>
> 
> **Name:**
> ```
> {stream.type::=p2p["[P2P] "||""]}{service.cached::isfalse["⏳"||""]}{stream.library::istrue["💾 "||""]}{stream.type::=Usenet["📰 "||""]}{stream.type::=http["💻 "||""]}{stream.proxied::istrue["🕵️‍♂️ "||""]}{service.shortName::exists["{service.shortName} "||""]}{addon.name} {stream.resolution::=2160p["4K"||""]}{stream.resolution::=1440p["QHD"||""]}{stream.resolution::=1080p["FHD"||""]}{stream.resolution::=720p["HD"||""]}{stream.resolution::=480p["SD"||""]}
> {stream.visualTags::exists["📺 {stream.visualTags::join(' | ')} "||""]}
> {stream.regexMatched::exists["🏷️{stream.regexMatched}"||""]} {stream.seadexBest::istrue["🏷️Best"||""]}{stream.seadex::istrue::and::stream.seadexBest::isfalse["🏷️Alt. Best"||""]}
> ```
> 
> **Description:**
> ```
> {stream.quality::exists["🎥 {stream.quality} "||""]}{stream.encode::exists["🎞️ {stream.encode} "||""]}{stream.languages::exists["🌎 {stream.languageEmojis::join(' | ')}"||""]}
> {stream.size::>0["📦 {stream.size::bytes} "||""]}{stream.audioTags::exists["🎧 {stream.audioTags::join(' | ')} "||""]}
> {stream.filename::exists["📄 {stream.filename}"||""]}
> ```
> </details>
</details>

---

## 🔧 Community Instance Admin Setup

If you're running a community AIOStreams instance and want to allow users to use these regexes, you can now enable them using environment variables.

### Environment Variables

Set this environment variable in your AIOStreams instance to allow users to use these regexes:

```bash
ALLOWED_REGEX_PATTERNS_URLS=["https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json", "https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-regexes.json"]
```

---

## 🔄 Recyclarr Configuration

I have included my version of Recyclarr configuration that can be used by those running a single Radarr/Sonarr instance for handling all resolutions (4K, 1080p, etc.) and anime.

### Features

- **Single Instance Setup**: Configured for users who prefer one Radarr/Sonarr instance to manage all content types and resolutions
- **Custom TRaSH Guides Fork**: Uses my fork of the TRaSH Guides repository
- **Remux Tier 00**: Adds a new tier that prioritizes non-Framestor Remux Tier 1 releases

### Configuration Files

- **`recyclarr.yml`**: Main Recyclarr configuration file
- **`settings.yml`**: Custom fork for the Remux Tier 00 configuration

### Usage

1. **To use Remux Tier 00**: Keep the current configuration as-is (line 100 in `recyclarr.yml` is active)
2. **To skip Remux Tier 00**: Comment out line 100 in `recyclarr.yml` which contains the Remux Tier 00 configuration

> [!NOTE]
> The Remux Tier 00 feature requires editing `settings.yml`. If you don't want to use this custom tier, you can simply comment out line 100 in `recyclarr.yml` and skip editing the settings file.

---
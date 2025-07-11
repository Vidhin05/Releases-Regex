# Releases-Regex Repo
This repository contains **regular expressions (regexes) for the best and recommended release groups** along with regexes for unwanted releases, sourced from [TRaSH Guides](https://trash-guides.info).

> [!IMPORTANT]
> TRaSH Guides is a community-driven resource offering clear, step-by-step guides for optimizing your media management tools—primarily Sonarr for TV shows and Radarr for Movies. Born from a personal quest to fine-tune quality profiles and release preferences, these guides break down complex configurations into easy-to-follow instructions.

> [!CAUTION]
> This repo is **not** a general TRaSH Guides repository. It is **only for regex patterns** that help filter and prioritize **high-quality releases** based on TRaSH's recommendations.

---

## 📂 Regex Lists
### 🎬 **[Movies](Source%20Regexes/Movie.md)** 
### 📺 **[TV Shows](Source%20Regexes/TV.md)**  
### 🍥 **[Anime](Source%20Regexes/Anime.md)**
### 🎭 **[Bad](Source%20Regexes/Bad.md)**
### 📝 **[All](All.md)** **(Use this when multiple regexes are not allowed)**

### ✨ **[Merged](Merged.md)** *Recommended if not interested in Anime*
### ✨ **[Merged+Anime](Merged+Anime.md)** *Recommended*

---

## 📖 Release Formats  

Here are some **common release formats**:

- **Remux** – lossless, no re-encoding, largest file size, best quality.
- **UHD Bluray** – 4K Bluray rip with HDR and high color depth, often re-encoded. 
- **HD Bluray** – 1080p Bluray rip with higher bitrate than streaming, usually re-encoded.
- **WEB-DL** – Direct stream download, no compression artifacts, lower bitrate than Blu-ray. 

For an in-depth breakdown, visit the [Wikipedia release formats](https://en.wikipedia.org/wiki/Pirated_movie_release_types#Release_formats).

---

## 🚀 Usage Instructions (For AIOStreams)

### AIOStreams v2 - JSON Format

AIOStreams v2 supports JSON regex files for improved organization. Choose one of the following:

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
> ### Configuration
> 1. In AIOStreams v2, navigate to the `Filters -> Regex` section.
> 2. Copy one of the Raw GitHub links above and paste it into the **"Preferred"** field. **Do not** use the "Include", "Required", or "Exclude" fields for these regexes.
> 3. Set your **Global Sort Order** to one of the options below. For the global setting to take effect properly, ensure the sort order fields for specific content types (e.g., Movie, Series) are left empty.
>    - **Resolution/Quality-First**: `Cached -> Library -> Resolution -> Quality -> Regex Patterns -> Size`
>    - **Known Groups-First**: `Cached -> Library -> Regex Patterns -> Resolution -> Size`

> [!WARNING]
> It is not recommended to remove the bad regex pattern from the JSON file and use it in the exclude regex section. If used as an exclude regex, it may filter out all streams for titles that have generic names (e.g., names like `Kingdom`, `Zeus`, `Epic`).

<details>
<summary>Click to see recommended custom formatters</summary>

> For pre-built custom formats, you can select the **"Light Google Drive"** format directly from the formatter section on the configuration page.
>
> Here's an additional recommended custom format for TV screens:
> <details>
> <summary>TV-Usage Optimised Advanced Format</summary>
> 
> ([source](https://discord.com/channels/1225024298490662974/1367377508328280145))
> 
> **Name:**
> ```
> {stream.type::=p2p["[P2P]"||""]}{service.cached::isfalse["⏳"||""]}{stream.library::istrue["☁️ "||""]}{addon.name} {stream.resolution::=2160p["4K"||""]}{stream.resolution::=1440p["QHD"||""]}{stream.resolution::=1080p["FHD"||""]}{stream.resolution::=720p["HD"||""]}{stream.resolution::=480p["SD"||""]}
> {stream.visualTags::exists["📺 {stream.visualTags::join(' | ')} "||""]}
> {stream.regexMatched::exists["🏷️{stream.regexMatched}"||""]}
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

<details>
<summary>AIOStreams v1 - Legacy Instructions</summary>

### 1. Choosing the Right Regex
- **Recommended**: Use `Merged+Anime` for comprehensive coverage
- **Alternative**: Use `Merged` if you don't want to sort anime content

### 2. Sort Order Configuration
- **Resolution/Quality-First**: `Cached -> Personal -> Resolution -> Quality -> Regex Sort -> Size`
- **Known Groups-First**: `Cached -> Personal -> Regex Sort -> Resolution -> Size`

### 3. Configuration Methods

If you haven't already, you need to set API_KEY in your `.env` to enable using regex patterns. It acts as a password protecting your instance. While configuring the addon, you also need to enter the API_KEY at the bottom of the page.

#### Option A: Using .env File (Recommended)
Due to the length of these regexes, it's recommended to configure them in your `.env` file to avoid HTTP 431 (Request Headers too large) errors.

```sh
# Configure your regex in .env
DEFAULT_REGEX_SORT_PATTERNS='[Copy the Space-Separated Regex from your chosen file below]'

# Optional: Exclude Hi10 content if your device doesn't support it (prevents stuttering)
DEFAULT_REGEX_EXCLUDE_PATTERN='^.*Hi10.*$'
```

> Always use single quotes for regex values in the `.env` file, especially when using Docker.

> Add `DEFAULT_REGEX_EXCLUDE_PATTERN='^.*Hi10.*$'` to your `.env` file if your device does not support Hi10 encoding. Hi10 content can cause stuttering on unsupported devices.

#### Option B: Using Addon Configuration URL
<details>
<summary>If you prefer using the addon configuration URL and are experiencing HTTP 431 Request Header Fields Too Large error, if you are using Authelia, you can increase the read and write buffers in your Authelia config `configuration.yml`.</summary>
```yml
buffers:
  read: 2097152
  write: 2097152
```
</details>

### Direct Links
- [Merged+Anime Space-Separated Regex](Merged+Anime.md#-merged-space-seperated-regex-use-this-for-aiostreams) - Merged regex pattern for Movies, TV and anime sorting
- [Merged Space-Separated Regex](Merged.md#-merged-space-seperated-regex-use-this-for-aiostreams) - Mergex Regex pattern for Movies and TV Shows sorting


> To see which regex pattern matched a stream, add `{stream.regexMatched::exists["🏷️{stream.regexMatched}"||""]}` to your custom format.

<details>
<summary>Click to see recommended custom formatters</summary>

> Here are two recommended custom formats:
> <details>
> <summary>Slightly less minimalistic gdrive format</summary>
> 
> ([source: Viren](https://discord.com/channels/1225024298490662974/1370170296568516608))
> 
> **Name:**
> ```
> {stream.proxied::istrue["🕵️ "||""]}{stream.infoHash::exists["[P2P]"||""]}{provider.shortName::exists["[{provider.shortName}"||""]}{stream.personal::istrue[" ☁️"||""]}{provider.cached::istrue["⚡] "||""]}{provider.cached::isfalse["⏳]"||""]}{addon.name}{stream.resolution::exists[" {stream.resolution}"||""]}{stream.regexMatched::exists[" ({stream.regexMatched})"||""]}
> ```
> 
> **Description:**
> ```
> {stream.title::exists["📁 {stream.title}"||""]}{stream.year::exists[" ({stream.year})"||""]}{stream.season::>=0[" S"||""]}{stream.season::<=9["0"||""]}{stream.season::>0["{stream.season}"||""]}{stream.episode::>=0[" • E"||""]}{stream.episode::<=9["0"||""]}{stream.episode::>0["{stream.episode}"||""]}
> {stream.quality::exists["🎥 {stream.quality} "||""]}{stream.encode::exists["🎞️ {stream.encode} "||""]}{stream.releaseGroup::exists["🏷️ {stream.releaseGroup}"||""]}
> {stream.visualTags::exists["📺 {stream.visualTags::join(' • ')} "||""]}{stream.audioTags::exists["🎧 {stream.audioTags::join(' • ')}"||""]}
> {stream.size::>0["📦 {stream.size::bytes} "||""]}{stream.duration::>0["⏱️ {stream.duration::time} "||""]}{stream.age::exists["📅 {stream.age} "||""]}{stream.indexer::exists["🔍 {stream.indexer}"||""]}
> {stream.languageEmojis::exists["🌐 {stream.languageEmojis::join(' / ')}"||""]}
> ```
> </details>
> 
> <details>
> <summary>TV-Usage Optimised Advanced Format</summary>
> 
> ([source](https://discord.com/channels/1225024298490662974/1367377508328280145))
> 
> **Name:**
> ```
> {stream.infoHash::exists["[P2P]"||""]}{provider.cached::isfalse["⏳"||""]}{stream.personal::istrue["☁️ "||""]}{addon.name} {stream.resolution::=2160p["4K"||""]}{stream.resolution::=1440p["QHD"||""]}{stream.resolution::=1080p["FHD"||""]}{stream.resolution::=720p["HD"||""]}{stream.resolution::=480p["SD"||""]}
> {stream.visualTags::exists["📺 {stream.visualTags::join(' | ')} "||""]}
> {stream.regexMatched::exists["🏷️{stream.regexMatched}"||""]}
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

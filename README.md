# Releases-Regex Repo
This repository contains **regular expressions (regexes) for the best and recommended release groups**, sourced from [TRaSH Guides](https://trash-guides.info).

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

### 1. Choosing the Right Regex
- **Recommended**: Use `Merged+Anime` for comprehensive coverage
- **Alternative**: Use `Merged` if you don't want to sort anime content

### 2. Sort Order Configuration
- **Resolution/Quality-First**: `Cached -> Personal -> Resolution -> Quality -> Regex Sort -> Size`
- **Known Groups First**: `Cached -> Personal -> Regex Sort -> Resolution -> Size`

### 3. Configuration Methods

#### Option A: Using .env File (Recommended)
Due to the length of the merged regexes, it's recommended to configure them in your `.env` file to avoid HTTP 431 (Request Headers too large) errors.

```sh
# Configure your regex in .env
DEFAULT_REGEX_SORT_PATTERNS='[Copy the Merged Space-Separated Regex from Merged+Anime.md or Merged.md below]'
```

> [!IMPORTANT]
> Always use single quotes for regex values in the `.env` file, especially when using Docker.

#### Option B: Using Addon Configuration URL
If you prefer using the addon configuration URL and are experiencing HTTP 431 errors, you can increase the read and write buffers in your `configuration.yaml` file. This is only possible if you are using Authelia.

### Direct Links
- [Merged+Anime Space-Separated Regex](Merged+Anime.md#-merged-space-seperated-regex-use-this-for-aiostreams) - Merged regex pattern for Movies, TV and anime sorting
- [Merged Space-Separated Regex](Merged.md#-merged-space-seperated-regex-use-this-for-aiostreams) - Mergex Regex pattern for Movies and TV Shows sorting

---

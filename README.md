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
> Instead, it is better to use Stream Expressions Language (SEL) to smartly limit and filter streams. You can use [this SEL Exclude JSON](exclude-sel.json) to help you with that, heavily inspired by [Tamtaro's work](https://discord.com/channels/1225024298490662974/1391478569607368924).
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
> {service.shortName::exists["{service.shortName}"||""]} {stream.type::=p2p["[P2P]"||""]}{service.cached::isfalse["⏳"||""]}{stream.library::istrue["☁️ "||""]}{addon.name} {stream.resolution::=2160p["4K"||""]}{stream.resolution::=1440p["QHD"||""]}{stream.resolution::=1080p["FHD"||""]}{stream.resolution::=720p["HD"||""]}{stream.resolution::=480p["SD"||""]}
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

## 🔧 Community Instance Admin Setup

If you're running a community AIOStreams instance and want to allow users to use these regexes, you can now enable them using environment variables.

### Environment Variables

Add these environment variables to your AIOStreams instance to allow users to use these regexes:

<details>
<summary>Click to see environment variables</summary>

```bash
ALLOWED_REGEX_PATTERNS='["/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*(?:\\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|D-Z0N3|EbP|EDPH|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\\b|-BMF)).*/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:APEX|FLUX|KiNGS|TOMMY)\\b).*/", "/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*(?:\\b(?:DON|Geek)\\b)).*/", "/(\\b(DameDesuYo)\\b)|\\[AC\\]|-AC\\b/i", "/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*\\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|SPHD|WEBDV|playHD)\\b).*/i", "/\\bRemux\\b.*\\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\\b|-BMF|-WiLDCAT/i", "/\\bRemux\\b.*\\b(NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\\b/i", "/(\\[(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\\]|-(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\\b|\\b(Asenshi|BlurayDesuYo|Bunny-Apocalypse|EJF|Exiled-Destiny|E-D|FFF|Final8|GS|Inka-Subs|LCE|Licca|niizk|Nishi-Taku|OnDeed|orz|PAS|peachflavored|Saizen|SCP-2223|SHiN-gx|SmugCat|Zurako)\\b)/i", "/(\\[(Alt|ARC|Arid|DemiHuman|Lulu|Moxie|Not-Vodes|Yuki)\\]|-(Alt|ARC|Arid|DemiHuman|Lulu|Moxie|Not-Vodes|Yuki)\\b|\\b(0x539|aro|Baws|BKC|Brrrrrrr|Chotab|CsS|CUNNY|Cunnysseur|D-Z0N3|Dae|Datte13|FLFL|hydes|iKaos|JySzE|LostYears|Matsya|MC|McBalls|MTBB|Noyr|NSDAB|Okay-Subs|pog42|pyroneko|RAI|Reza|Shimatta|Spirale|UDF)\\b)/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:DEFLATE|INFLATE)\\b).*/i", "/(\\[(Lia|ZigZag)\\]|-(Lia|ZigZa)\\b|\\b(BlueLobster|Erai-raws|GST|HorribleRips|HorribleSubs|KAN3D2M|KS|KiyoshiStar|NanDesuKa|URANIME|VARYG)\\b)/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:3cTWeB|BTW|BYNDR|Cinefeel|CiT|Coo7|dB|FC|iJP|iKA|iT00NZ|JETIX|KHN|MiU|MZABI|NPMS|NYH|orbitron|playWEB|PSiG|RAWR|ROCCaT|RTFM|SA89|SbR|SDCC|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\\b).*/i", "/(\\[(Aergia|smol|SoM|Vodes)\\]|-(Aergia(?!-raws)|smol|SoM)\\b|\\b(Arg0|LYS1TH3A|OZR|SCY|ZeroBuild)\\b)|(?<!Not)-Vodes\\b/i", "/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*\\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\\b).*/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:ABBIE|AJP69|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|GNOME|HONE|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|ViSUM)\\b).*/i", "/\\b(?<=\\b[12]\\d{3}\\b).*\\b(3d|sbs|half[ .-]ou|half[ .-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[ ._-]Clip|Sing[-_. ]Along)\\b|\\bAV1\\b|\\b(\\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[ .-]?[ .-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[ .-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[ .-]lu[ .-]zen|Man\\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[ .-]?Bay|Mr\\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[ ._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[ .-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[ .-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[ .-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[ ._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[ .-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\\b|\\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\\]|\\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|New|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[ ._-]?(Raws)\\b|\\b(Moozzi2|Raws-Maji|ReinForce)\\b|\\[km\\]|-km\\b|\\b(alfaHD.*|BAT|BlackBit|BNd|C\\.A\\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\\b|\\b(Golumpa|KamiFS|torenter69)\\b|\\[Yameii\\]|-Yameii\\b|^(?!.*(Dual|Multi)[-_. ]?Audio).*((?<!multi-)\\b(dub(bed)?)\\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[ ._-]?audio|(JA|ZH|KO)\\\\+EN|EN\\+(JA|ZH|KO))).*\\b(KaiDubs|KS)\\b|\\b(BiOMA|BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\\b|\\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|GHOSTS|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\\b|\\b(1XBET|2160p.*BiTOR|BEN[ ._-]THE[ ._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\\bjennaortega(UHD)?|READ(\\s|\\.)+NOTE|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\\b|\\b(24xHD|41RGB|4K4U|AOC|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|beAst|BTM|C1NEM4|C4K|CDDHD|CHAOS|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EPiC|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDHUB4U|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KiNGDOM|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|LUCY|MarkII|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RARBG|RDN|Rifftrax|RU4HD|SANTi|Scene|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\\b|\\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\\b|\\b(-D3US|D3US-|DRX|E|Flights)\\b/in", "/(\\[(Crow|Drag|Metal|Smoke|Thighs)\\]|-(Crow|Drag|Metal|Smoke|Thighs)\\b)/", "/(\\[(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\\]|-(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\\b|\\b(0x539|GSK[._-]kun|Half-Baked|HatSubs|MALD|MTBB|Okay-Subs|Reza|Slyfox|SoLCE)\\b)/i", "/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*(?:\\b(?:BBQ|c0kE|Chotab|CRiSC|CtrlHD|Dariush|decibeL|D-Z0N3|EbP|EDPH|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\\b|-BMF)).*/i", "/^(?=.*\\bBlu[-_]?Ray\\b)(?!.*\\bRemux\\b)(?!.*\\bWEB[-_.]?(?:DL|Rip)\\b)(?=.*\\b(?:LoRD)\\b).*/", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:GNOMiSSiON|NINJACENTRAL|ROCCaT|SLiGNOME|SwAgLaNdEr|T4H)\\b).*/i", "/(\\[VULCAN\\]|-VULCAN\\b|\\b(BluDragon|D4C|E[.-]N[.-]D|Raizel|REVO|SRLS|TTGA)\\b|^(?=.*\\b(PMR)\\b)(?=.*\\b(Remux)\\b))/i", "/(\\[(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\\]|-(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\\b|\\b(ASC|AssMix|B00BA|CBT|CTR|CyC|Flugel|Galator|GSK[._-]kun|Holomux|IK|AnimeKaizoku|Kametsu|KH|kuchikirukia|LazyRemux|MK|Netaro|Pn8|Pookie|Quetzal|Rasetsu|ShowY|WBDP|WSE|Yoghurt|ZOIO|ZR)\\b|-ZR-)|(?<=remux).*\\b(NAN0)\\b/i", "/(\\[(Legion|sam|Vanilla)\\]|-(Legion|sam|Vanilla)\\b)/", "/(\\[Kantai\\]|-Kantai\\b|\\b(GJM|SobsPlease|Some-Stuffs)\\b)/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:DRACULA|ViSiON)\\b).*/", "/(\\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\\b|\\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[ .-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[ ._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\\b)/i", "/^(?=.*\\bWEB[-_.]?(?:DL|RIP)\\b)(?=.*\\b(?:DEEP|END|ETHiCS|Flights|KiMCHI|LAZY|PHOENiX|SIGMA|SMURF|SPiRiT)\\b).*/", "/(\\b(SubsPlease|SubsPlus\\+?|ZR)\\b)/i", "/(\\[(Arid|sam|smol|SoM|Vodes)\\]|-(Arid|sam|smol|SoM)\\b|\\b(Arg0|Baws|LostYears|LYS1TH3A|McBalls|SCY|Setsugen|Z4ST1N|ZeroBuild)\\b)|(?<!Not)-Vodes\\b/i", "/(\\[(NPC|STRiFE)\\]|-(NPC|STRiFE)\\b|\\b(A-L|ANiHLS|CBM|DHD|DragsterPS|HAiKU|Hark0N|iAHD|inid4c|KS|KiyoshiStar|MCR|RedBlade|RH|SEV|TENEIGHTY|WaLMaRT)\\b)/i", "/\\bRemux\\b.*\\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\\b/i", "/\\b(?<=\\b[12]\\d{3}\\b).*\\b(3d|sbs|half[ .-]ou|half[ .-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[ ._-]Clip|Sing[-_. ]Along)\\b|\\bAV1\\b|\\b(\\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[ .-]?[ .-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[ .-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[ .-]lu[ .-]zen|Man\\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[ .-]?Bay|Mr\\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[ ._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[ .-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[ .-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[ .-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[ ._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[ .-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\\b|\\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\\]|\\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|New|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[ ._-]?(Raws)\\b|\\b(Moozzi2|Raws-Maji|ReinForce)\\b|\\[km\\]|-km\\b|\\b(alfaHD.*|BAT|BlackBit|BNd|C\\.A\\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\\b|\\b(Golumpa|KamiFS|torenter69)\\b|\\[Yameii\\]|-Yameii\\b|^(?!.*(Dual|Multi)[-_. ]?Audio).*((?<!multi-)\\b(dub(bed)?)\\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[ ._-]?audio|(JA|ZH|KO)\\\\+EN|EN\\+(JA|ZH|KO))).*\\b(KaiDubs|KS)\\b|\\b(BiOMA|BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\\b|\\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|GHOSTS|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\\b|\\b(1XBET|2160p.*BiTOR|BEN[ ._-]THE[ ._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\\bjennaortega(UHD)?|READ(\\s|\\.)+NOTE|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\\b|\\b(24xHD|41RGB|4K4U|AOC|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|beAst|BTM|C1NEM4|C4K|CDDHD|CHAOS|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EPiC|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDHUB4U|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KiNGDOM|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|LUCY|MarkII|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RARBG|RDN|Rifftrax|RU4HD|SANTi|Scene|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\\b|\\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\\b|\\b(-D3US|D3US-|DRX|E|Flights)\\b/i", "/(\\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\\b|\\b(AkihitoSubs|Arukoru|Nep[ ._-]Blanc|Shir\u03c3)\\b)/i"]'
ALLOWED_REGEX_PATTERNS_DESCRIPTION="[Vidhin's Regexes](https://github.com/Vidhin05/Releases-Regex/) are available for everyone to use.\nImport `https://raw.githubusercontent.com/Vidhin05/Releases-Regex/main/merged-anime-regexes.json` into preferred regexes to easily add them to your filters."
```

</details>

---
## ✨ Merged

This section merges **Movies** and **TV Shows** regexes together for a more streamlined experience.

> [!Note]  
> - Some groups were **bumped a tier** to remove duplicates within the same release type.  
> - UHD & HD Bluray Tiers were **merged** since you can always tell from resolution.

> [!TIP]
> While this Merged list is great for TV and Movies, I **recommend** using the [**Merged+Anime**](Merged+Anime.md) list if you are interested in Anime as well.

## ✨ Merged Space-Seperated Regex (Use this for AIOStreams)
  ```regex
  Remux_T1<::>\bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT Remux_T2<::>\bRemux\b.*\b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\b Remux_T3<::>\bRemux\b.*\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\b Bluray_T1<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|Chotab|CRiSC|CtrlHD|Dariush|decibeL|D-Z0N3|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\b|-BMF)).* Bluray_T2<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).* Bluray_T3<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).* Web_T1<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).* Web_T2<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).* Web_T3<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).* Web_Scene<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).* Neutral<::>^(?!.*(\b(?<=\b[12]\d{3}\b).*\b(3d|sbs|half[\s.-]ou|half[\s.-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[\s._-]Clip|Sing[-_.\s]Along)\b|\bAV1\b|\b(\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[\s.-]?[\s.-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[\s.-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[\s.-]lu[\s.-]zen|Man\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[\s.-]?Bay|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[\s._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[\s.-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[\s.-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[\s.-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[\s._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[\s.-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[\s.-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\b|\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[\s.-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\]|\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|New|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[\s._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b|\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b|\b(Golumpa|KamiFS|torenter69)\b|\[Yameii\]|-Yameii\b|^(?!.*(Dual|Multi)[-_.\s]?Audio).*((?<!multi-)\b(dub(bed)?)\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[\s._-]?audio|(JA|ZH|KO)\\+EN|EN\+(JA|ZH|KO))).*\b(KaiDubs|KS)\b|\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b|\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|GHOSTS|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b|\b(1XBET|2160p.*BiTOR|BEN[\s._-]THE[\s._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\bjennaortega(UHD)?|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b|\b(24xHD|41RGB|4K4U|AOC|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|beAst|BTM|C1NEM4|C4K|CDDHD|CHAOS|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EPiC|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDHUB4U|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KiNGDOM|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|LUCY|MarkII|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RARBG|RDN|Rifftrax|RU4HD|SANTi|Scene|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b|\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\b)).*$
  ```

  > [!Note]  
  > Remove `Neutral<::>` from the pattern to stop tagging releases that are neither good or bad.

### **Remux Tier 01** / 🍿1️⃣ / 📀1️⃣
  ```regex
  \bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT
  ```
### **Remux Tier 02** / 🍿2️⃣ / 📀2️⃣
  ```regex
  \bRemux\b.*\b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\b
  ```
### **Remux Tier 03** / 🍿3️⃣ / 📀3️⃣
  ```regex
  \bRemux\b.*\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\b
  ```
### **Bluray Tier 01** / 💿1️⃣
  ```regex
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|Chotab|CRiSC|CtrlHD|Dariush|decibeL|D-Z0N3|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\b|-BMF)).*
  ```
### **Bluray Tier 02** / 💿2️⃣
  ```regex
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).*
  ```
### **Bluray Tier 03** / 💿3️⃣
  ```regex
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).*
  ```
### **WEB Tier 01** / 🌐1️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).*
  ```
### **WEB Tier 02** / 🌐2️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).*
  ```
### **WEB Tier 03** / 🌐3️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).*
  ```
### **WEB Scene** / 🌐🎭
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).*
  ```

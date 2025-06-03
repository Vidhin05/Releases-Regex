## ✨ Merged

This section merges **Movies**, **TV Shows** and **Anime** regexes together for a more streamlined experience.

> [!Note]  
> - Some groups were **bumped a tier** to remove duplicates within the same release type.  
> - UHD & HD Bluray Tiers were **merged** since you can always tell from resolution.
> - Removed Chotab from Blu-ray Tier 01 as it is already in Anime BD Tier 02. Removed D-Z0N3 from Blu-ray Tier 01 as it is already in Anime BD Tier 02.
> - Pushed AC down from Anime BD Tier 03 to Anime Web Tier 06 to reduce false positives.

Order:
This order is recommended for movies, tv shows and anime.
- [Anime BD Tier 01 (Top SeaDex Muxers)](Merged+Anime.md#Anime-BD-Tier-01-Top-SeaDex-Muxers)
- [Anime BD Tier 02 (SeaDex Muxers)](Merged+Anime.md#Anime-BD-Tier-02-SeaDex-Muxers)
- [Anime BD Tier 03 (SeaDex Muxers)](Merged+Anime.md#Anime-BD-Tier-03-SeaDex-Muxers)
- [Anime BD Tier 04 (SeaDex Muxers)](Merged+Anime.md#Anime-BD-Tier-04-SeaDex-Muxers)
- [Remux Tier 01](Merged+Anime.md#Remux-Tier-01)
- [Anime BD Tier 05 (Remuxes)](Merged+Anime.md#Anime-BD-Tier-05-Remuxes)
- [Remux Tier 02](Merged+Anime.md#Remux-Tier-02)
- [Remux Tier 03](Merged+Anime.md#Remux-Tier-03)
- [Bluray Tier 01](Merged+Anime.md#Bluray-Tier-01)
- [Bluray Tier 02](Merged+Anime.md#Bluray-Tier-02)
- [Bluray Tier 03](Merged+Anime.md#Bluray-Tier-03)
- [Anime BD Tier 06 (FanSubs)](Merged+Anime.md#Anime-BD-Tier-06-FanSubs)
- [Anime BD Tier 07 (P2P/Scene)](Merged+Anime.md#Anime-BD-Tier-07-P2P/Scene)
- [Anime BD Tier 08 (Mini Encodes)](Merged+Anime.md#Anime-BD-Tier-08-Mini-Encodes)
- [Anime Web Tier 01 (Muxers)](Merged+Anime.md#Anime-Web-Tier-01-Muxers)
- [Anime Web Tier 02 (Top FanSubs)](Merged+Anime.md#Anime-Web-Tier-02-Top-FanSubs)
- [Anime Web Tier 03 (Official Subs)](Merged+Anime.md#Anime-Web-Tier-03-Official-Subs)
- [Web Tier 01](Merged+Anime.md#Web-Tier-01)
- [Anime Web Tier 04 (Official Subs)](Merged+Anime.md#Anime-Web-Tier-04-Official-Subs)
- [Web Tier 02](Merged+Anime.md#Web-Tier-02)
- [Anime Web Tier 05 (FanSubs)](Merged+Anime.md#Anime-Web-Tier-05-FanSubs)
- [Web Tier 03](Merged+Anime.md#Web-Tier-03)
- [Anime Web Tier 06 (FanSubs)](Merged+Anime.md#Anime-Web-Tier-06-FanSubs)
- [WEB Scene](Merged+Anime.md#WEB-Scene)

## ✨ Merged Space-Seperated Regex (Use this for AIOStreams)
  ```regex
  Anime_BD_T1<::>(\[(Aergia|Legion|sam|smol|SoM|Vanilla|Vodes)\]|-(Aergia(?!-raws)|Legion|sam|smol|SoM|Vanilla)\b|\b(Arg0|LYS1TH3A|OZR|SCY|ZeroBuild)\b)|(?<!Not)-Vodes\b Anime_BD_T2<::>(\[(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\]|-(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\b|\b(0x539|aro|Baws|BKC|Brrrrrrr|Chotab|CsS|CUNNY|Cunnysseur|D-Z0N3|Dae|Datte13|FLFL|hydes|iKaos|JySzE|LostYears|Matsya|MC|McBalls|MTBB|Noyr|NSDAB|Okay-Subs|pog42|pyroneko|RAI|Reza|Shimatta|Spirale|UDF)\b) Anime_BD_T3<::>(\[(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\]|-(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\b|\b(ASC|AssMix|CBT|CTR|CyC|Flugel|Galator|GSK[._-]kun|Holomux|IK|AnimeKaizoku|Kametsu|KH|kuchikirukia|LazyRemux|MK|Netaro|Pn8|Pookie|Quetzal|Rasetsu|ShowY|WBDP|WSE|Yoghurt|ZOIO|ZR)\b|-ZR-)|(?<=remux).*\b(NAN0)\b Anime_BD_T4<::>(\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\b|\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[\s.-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[\s._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\b) Remux_T1<::>\bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT Anime_BD_T5<::>(\[VULCAN\]|-VULCAN\b|\b(BluDragon|D4C|E[.-]N[.-]D|Raizel|REVO|SRLS|TTGA)\b|^(?=.*\b(PMR)\b)(?=.*\b(Remux)\b)) Remux_T2<::>\bRemux\b.*\b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\b Remux_T3<::>\bRemux\b.*\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\b Bluray_T1<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\b|-BMF)).* Bluray_T2<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).* Bluray_T3<::>^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).* Anime_BD_T6<::>(\[(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\]|-(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\b|\b(Asenshi|BlurayDesuYo|Bunny-Apocalypse|EJF|Exiled-Destiny|E-D|FFF|Final8|GS|Inka-Subs|LCE|Licca|niizk|Nishi-Taku|OnDeed|orz|PAS|peachflavored|Saizen|SCP-2223|SHiN-gx|SmugCat|Zurako)\b) Anime_BD_T7<::>(\[(NPC|STRiFE)\]|-(NPC|STRiFE)\b|\b(A-L|ANiHLS|CBM|DHD|DragsterPS|HAiKU|Hark0N|iAHD|inid4c|KS|KiyoshiStar|MCR|RedBlade|RH|SEV|TENEIGHTY|WaLMaRT)\b) Anime_BD_T8<::>(\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\b|\b(AkihitoSubs|Arukoru|Nep[\s._-]Blanc|Shirσ)\b) Anime_Web_T1<::>(\[(Arid|sam|smol|SoM|Vodes)\]|-(Arid|sam|smol|SoM)\b|\b(Arg0|Baws|LostYears|LYS1TH3A|McBalls|SCY|Setsugen|Z4ST1N|ZeroBuild)\b)|(?<!Not)-Vodes\b Anime_Web_T2<::>(\[(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\]|-(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\b|\b(0x539|GSK[._-]kun|Half-Baked|HatSubs|MALD|MTBB|Okay-Subs|Reza|Slyfox|SoLCE)\b) Anime_Web_T3<::>(\b(SubsPlease|SubsPlus\+?|ZR)\b) Web_T1<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).* Anime_Web_T4<::>(\[(Lia|ZigZag)\]|-(Lia|ZigZa)\b|\b(BlueLobster|Erai-raws|GST|HorribleRips|HorribleSubs|KAN3D2M|KS|KiyoshiStar|NanDesuKa|URANIME|VARYG)\b) Web_T2<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).* Anime_Web_T5<::>(\[Kantai\]|-Kantai\b|\b(GJM|SobsPlease|Some-Stuffs)\b) Web_T3<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).* Anime_Web_T6<::>(\b(DameDesuYo)\b)|\[AC\]|-AC\b Web_Scene<::>^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).* Neutral<::>^(?!.*(\b(?<=\b[12]\d{3}\b).*\b(3d|sbs|half[\s.-]ou|half[\s.-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[\s._-]Clip|Sing[-_.\s]Along)\b|\bAV1\b|\b(\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[\s.-]?[\s.-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[\s.-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[\s.-]lu[\s.-]zen|Man\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[\s.-]?Bay|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[\s._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[\s.-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[\s.-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[\s.-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[\s._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[\s.-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[\s.-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\b|\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[\s.-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\]|\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|New|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[\s._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b|\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b|\b(Golumpa|KamiFS|torenter69)\b|\[Yameii\]|-Yameii\b|^(?!.*(Dual|Multi)[-_.\s]?Audio).*((?<!multi-)\b(dub(bed)?)\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[\s._-]?audio|(JA|ZH|KO)\\+EN|EN\+(JA|ZH|KO))).*\b(KaiDubs|KS)\b|\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b|\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|GHOSTS|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b|\b(1XBET|2160p.*BiTOR|BEN[\s._-]THE[\s._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\bjennaortega(UHD)?|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b|\b(24xHD|41RGB|4K4U|AOC|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|beAst|BTM|C1NEM4|C4K|CDDHD|CHAOS|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EPiC|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDHUB4U|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KiNGDOM|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|LUCY|MarkII|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RARBG|RDN|Rifftrax|RU4HD|SANTi|Scene|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b|\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\b)).*$
  ```

  > [!Note]  
  > Remove `Neutral<::>` from the pattern to stop tagging releases that are neither good or bad.

### **Anime BD Tier 01 (Top SeaDex Muxers):**
  ```regex
  (\[(Aergia|Legion|sam|smol|SoM|Vanilla|Vodes)\]|-(Aergia(?!-raws)|Legion|sam|smol|SoM|Vanilla)\b|\b(Arg0|LYS1TH3A|OZR|SCY|ZeroBuild)\b)|(?<!Not)-Vodes\b
  ```
### **Anime BD Tier 02 (SeaDex Muxers):**
  ```regex
  (\[(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\]|-(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\b|\b(0x539|aro|Baws|BKC|Brrrrrrr|Chotab|CsS|CUNNY|Cunnysseur|D-Z0N3|Dae|Datte13|FLFL|hydes|iKaos|JySzE|LostYears|Matsya|MC|McBalls|MTBB|Noyr|NSDAB|Okay-Subs|pog42|pyroneko|RAI|Reza|Shimatta|Spirale|UDF)\b)
  ```
### **Anime BD Tier 03 (SeaDex Muxers):**
  ```regex
  (\[(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\]|-(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\b|\b(ASC|AssMix|CBT|CTR|CyC|Flugel|Galator|GSK[._-]kun|Holomux|IK|AnimeKaizoku|Kametsu|KH|kuchikirukia|LazyRemux|MK|Netaro|Pn8|Pookie|Quetzal|Rasetsu|ShowY|WBDP|WSE|Yoghurt|ZOIO|ZR)\b|-ZR-)|(?<=remux).*\b(NAN0)\b
  ```
### **Anime BD Tier 04 (SeaDex Muxers):**
  ```regex
  (\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\b|\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[\s.-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[\s._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\b)
  ```
### **Remux Tier 01** / 🍿1️⃣ / 📀1️⃣
  ```regex
  \bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT
  ```
### **Anime BD Tier 05 (Remuxes):**
  ```regex
  (\[VULCAN\]|-VULCAN\b|\b(BluDragon|D4C|E[.-]N[.-]D|Raizel|REVO|SRLS|TTGA)\b|^(?=.*\b(PMR)\b)(?=.*\b(Remux)\b))
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
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|ZoroSenpai|W4NK3R|ZQ)\b|-BMF)).*
  ```
### **Bluray Tier 02** / 💿2️⃣
  ```regex
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).*
  ```
### **Bluray Tier 03** / 💿3️⃣
  ```regex
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).*
  ```
### **Anime BD Tier 06 (FanSubs):**
  ```regex
  (\[(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\]|-(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\b|\b(Asenshi|BlurayDesuYo|Bunny-Apocalypse|EJF|Exiled-Destiny|E-D|FFF|Final8|GS|Inka-Subs|LCE|Licca|niizk|Nishi-Taku|OnDeed|orz|PAS|peachflavored|Saizen|SCP-2223|SHiN-gx|SmugCat|Zurako)\b)
  ```
### **Anime BD Tier 07 (P2P/Scene):**
  ```regex
  (\[(NPC|STRiFE)\]|-(NPC|STRiFE)\b|\b(A-L|ANiHLS|CBM|DHD|DragsterPS|HAiKU|Hark0N|iAHD|inid4c|KS|KiyoshiStar|MCR|RedBlade|RH|SEV|TENEIGHTY|WaLMaRT)\b)
  ```
### **Anime BD Tier 08 (Mini Encodes):**
  ```regex
  (\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\b|\b(AkihitoSubs|Arukoru|Nep[\s._-]Blanc|Shirσ)\b)
  ```
### **Anime Web Tier 01 (Muxers):**
  ```regex
  (\[(Arid|sam|smol|SoM|Vodes)\]|-(Arid|sam|smol|SoM)\b|\b(Arg0|Baws|LostYears|LYS1TH3A|McBalls|SCY|Setsugen|Z4ST1N|ZeroBuild)\b)|(?<!Not)-Vodes\b
  ```
### **Anime Web Tier 02 (Top FanSubs):**
  ```regex
  (\[(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\]|-(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\b|\b(0x539|GSK[._-]kun|Half-Baked|HatSubs|MALD|MTBB|Okay-Subs|Reza|Slyfox|SoLCE)\b)
  ```
### **Anime Web Tier 03 (Official Subs):**
  ```regex
  (\b(SubsPlease|SubsPlus\+?|ZR)\b)
  ```
### **WEB Tier 01** / 🌐1️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).*
  ```
### **Anime Web Tier 04 (Official Subs):**
  ```regex
  (\[(Lia|ZigZag)\]|-(Lia|ZigZa)\b|\b(BlueLobster|Erai-raws|GST|HorribleRips|HorribleSubs|KAN3D2M|KS|KiyoshiStar|NanDesuKa|URANIME|VARYG)\b)
  ```
### **WEB Tier 02** / 🌐2️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).*
  ```
### **Anime Web Tier 05 (FanSubs):**
  ```regex
  (\[Kantai\]|-Kantai\b|\b(GJM|SobsPlease|Some-Stuffs)\b)
  ```
### **WEB Tier 03** / 🌐3️⃣
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).*
  ```
### **Anime Web Tier 06 (FanSubs):**
  ```regex
  (\b(DameDesuYo)\b)|\[AC\]|-AC\b
  ```
### **WEB Scene** / 🌐🎭
  ```regex
  ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).*
  ```
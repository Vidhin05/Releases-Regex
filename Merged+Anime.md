## ✨ Merged

This section merges **Movies**, **TV Shows** and **Anime** regexes together for a more streamlined experience.

> [!Note]  
> - Some groups were **bumped a tier** to remove duplicates within the same release type.  
> - UHD & HD Bluray Tiers were **merged** since you can always tell from resolution.
> - Removed Chotab from Blu-ray Tier 01 as it is already in Anime BD Tier 02. Removed D-Z0N3 from Blu-ray Tier 01 as it is already in Anime BD Tier 02.
> - Pushed AC down from Anime BD Tier 03 to Anime Web Tier 06 to reduce false positives.

Order:
This order is recommended for movies, tv shows and anime.
- [Anime BD Tier 01 (Top SeaDex Muxers)](Merged.md#Anime-BD-Tier-01-Top-SeaDex-Muxers)
- [Anime BD Tier 02 (SeaDex Muxers)](Merged.md#Anime-BD-Tier-02-SeaDex-Muxers)
- [Anime BD Tier 03 (SeaDex Muxers)](Merged.md#Anime-BD-Tier-03-SeaDex-Muxers)
- [Anime BD Tier 04 (SeaDex Muxers)](Merged.md#Anime-BD-Tier-04-SeaDex-Muxers)
- [Remux Tier 01](Merged.md#Remux-Tier-01)
- [Anime BD Tier 05 (Remuxes)](Merged.md#Anime-BD-Tier-05-Remuxes)
- [Remux Tier 02](Merged.md#Remux-Tier-02)
- [Remux Tier 03](Merged.md#Remux-Tier-03)
- [Bluray Tier 01](Merged.md#Bluray-Tier-01)
- [Bluray Tier 02](Merged.md#Bluray-Tier-02)
- [Bluray Tier 03](Merged.md#Bluray-Tier-03)
- [Anime BD Tier 06 (FanSubs)](Merged.md#Anime-BD-Tier-06-FanSubs)
- [Anime BD Tier 07 (P2P/Scene)](Merged.md#Anime-BD-Tier-07-P2P/Scene)
- [Anime Web Tier 08 (Mini Encodes)](Merged.md#Anime-Web-Tier-08-Mini-Encodes)
- [Anime Web Tier 01 (Muxers)](Merged.md#Anime-Web-Tier-01-Muxers)
- [Anime Web Tier 02 (Top FanSubs)](Merged.md#Anime-Web-Tier-02-Top-FanSubs)
- [Anime Web Tier 03 (Official Subs)](Merged.md#Anime-Web-Tier-03-Official-Subs)
- [Web Tier 01](Merged.md#Web-Tier-01)
- [Anime Web Tier 04 (Official Subs)](Merged.md#Anime-Web-Tier-04-Official-Subs)
- [Web Tier 02](Merged.md#Web-Tier-02)
- [Anime Web Tier 05 (FanSubs)](Merged.md#Anime-Web-Tier-05-FanSubs)
- [Web Tier 03](Merged.md#Web-Tier-03)
- [Anime Web Tier 06 (FanSubs)](Merged.md#Anime-Web-Tier-06-FanSubs)
- [WEB Scene](Merged.md#WEB-Scene)

## ✨ Merged Space-Seperated Regex (Use this for AIOStreams)
  ```regex
  (\[(Aergia|Legion|sam|smol|SoM|Vanilla|Vodes)\]|-(Aergia(?!-raws)|Legion|sam|smol|SoM|Vanilla)\b|\b(Arg0|LYS1TH3A|OZR|SCY|ZeroBuild)\b)|(?<!Not)-Vodes\b (\[(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\]|-(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\b|\b(0x539|aro|Baws|BKC|Brrrrrrr|Chotab|CsS|CUNNY|Cunnysseur|D-Z0N3|Dae|Datte13|FLFL|hydes|iKaos|JySzE|LostYears|Matsya|MC|McBalls|MTBB|Noyr|NSDAB|Okay-Subs|pog42|pyroneko|RAI|Reza|Shimatta|Spirale|UDF)\b) (\[(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\]|-(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\b|\b(ASC|AssMix|CBT|CTR|CyC|Flugel|Galator|GSK[._-]kun|Holomux|IK|AnimeKaizoku|Kametsu|KH|kuchikirukia|LazyRemux|MK|Netaro|Pn8|Pookie|Quetzal|Rasetsu|ShowY|WBDP|WSE|Yoghurt|ZOIO|ZR)\b|-ZR-)|(?<=remux).*\b(NAN0)\b (\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\b|\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[.-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\b) \bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT (\[VULCAN\]|-VULCAN\b|\b(BluDragon|D4C|E[.-]N[.-]D|Raizel|REVO|SRLS|TTGA)\b|^(?=.*\b(PMR)\b)(?=.*\b(Remux)\b)) \bRemux\b.*\b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\b \bRemux\b.*\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\b ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|W4NK3R|ZQ)\b|-BMF)).* ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).* ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).* (\[(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\]|-(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\b|\b(Asenshi|BlurayDesuYo|Bunny-Apocalypse|EJF|Exiled-Destiny|E-D|FFF|Final8|GS|Inka-Subs|LCE|Licca|niizk|Nishi-Taku|OnDeed|orz|PAS|peachflavored|Saizen|SCP-2223|SHiN-gx|SmugCat|Zurako)\b) (\[(NPC|STRiFE)\]|-(NPC|STRiFE)\b|\b(A-L|ANiHLS|CBM|DHD|DragsterPS|HAiKU|Hark0N|iAHD|inid4c|KS|KiyoshiStar|MCR|RedBlade|RH|SEV|TENEIGHTY|WaLMaRT)\b) (\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\b|\b(AkihitoSubs|Arukoru|Nep[._-]Blanc|Shirσ)\b) (\[(Arid|sam|smol|SoM|Vodes)\]|-(Arid|sam|smol|SoM)\b|\b(Arg0|Baws|LostYears|LYS1TH3A|McBalls|SCY|Setsugen|Z4ST1N|ZeroBuild)\b)|(?<!Not)-Vodes\b (\[(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\]|-(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\b|\b(0x539|GSK[._-]kun|Half-Baked|HatSubs|MALD|MTBB|Okay-Subs|Reza|Slyfox|SoLCE)\b) (\b(SubsPlease|SubsPlus\+?|ZR)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).* (\[(Lia|ZigZag)\]|-(Lia|ZigZa)\b|\b(BlueLobster|Erai-raws|GST|HorribleRips|HorribleSubs|KAN3D2M|KS|KiyoshiStar|NanDesuKa|URANIME|VARYG)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).* (\[Kantai\]|-Kantai\b|\b(GJM|SobsPlease|Some-Stuffs)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).* (\b(DameDesuYo)\b)|\[AC\]|-AC\b ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).*
  ```

<details>
<summary>Second Regex</summary>

  ```regex
  (\[(Aergia|Legion|sam|smol|SoM|Vanilla|Vodes)\]|-(Aergia(?!-raws)|Legion|sam|smol|SoM|Vanilla)\b|\b(Arg0|LYS1TH3A|OZR|SCY|ZeroBuild)\b)|(?<!Not)-Vodes\b (\[(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\]|-(Alt|ARC|Arid|Crow|DemiHuman|Drag|Lulu|Metal|Moxie|Not-Vodes|Smoke|Thighs|Yuki)\b|\b(0x539|aro|Baws|BKC|Brrrrrrr|Chotab|CsS|CUNNY|Cunnysseur|D-Z0N3|Dae|Datte13|FLFL|hydes|iKaos|JySzE|LostYears|Matsya|MC|McBalls|MTBB|Noyr|NSDAB|Okay-Subs|pog42|pyroneko|RAI|Reza|Shimatta|Spirale|UDF)\b) (\[(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\]|-(Ayashii|CRUCiBLE|Dekinai|EXP|Kaizoku|Mysteria|Senjou|YURI)\b|\b(ASC|AssMix|CBT|CTR|CyC|Flugel|Galator|GSK[._-]kun|Holomux|IK|AnimeKaizoku|Kametsu|KH|kuchikirukia|LazyRemux|MK|Netaro|Pn8|Pookie|Quetzal|Rasetsu|ShowY|WBDP|WSE|Yoghurt|ZOIO|ZR)\b|-ZR-)|(?<=remux).*\b(NAN0)\b (\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\b|\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[ .-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[ ._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\b) \bRemux\b.*\b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT (\[VULCAN\]|-VULCAN\b|\b(BluDragon|D4C|E[.-]N[.-]D|Raizel|REVO|SRLS|TTGA)\b|^(?=.*\b(PMR)\b)(?=.*\b(Remux)\b)) \bRemux\b.*\b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|KRaLiMaRKo|PTer|TRiToN)\b \bRemux\b.*\b(ATELiER|iFT|NTb|PTP|SumVision|TOA)\b ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|W4NK3R|ZQ)\b|-BMF)).* ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:EA|HiDt|HiSD|HQMUX|iFT|QOQ|SA89|sbR)\b).* ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*\b(?:ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|SPHD|WEBDV|playHD)\b).* (\[(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\]|-(Afro|Akai|Almighty|ANE|CH|Harunatsu|Impatience|Judgment|Kantai|Nii-sama|Soldado|Sushi|Vivid|Watashi|Yabai)\b|\b(Asenshi|BlurayDesuYo|Bunny-Apocalypse|EJF|Exiled-Destiny|E-D|FFF|Final8|GS|Inka-Subs|LCE|Licca|niizk|Nishi-Taku|OnDeed|orz|PAS|peachflavored|Saizen|SCP-2223|SHiN-gx|SmugCat|Zurako)\b) (\[(NPC|STRiFE)\]|-(NPC|STRiFE)\b|\b(A-L|ANiHLS|CBM|DHD|DragsterPS|HAiKU|Hark0N|iAHD|inid4c|KS|KiyoshiStar|MCR|RedBlade|RH|SEV|TENEIGHTY|WaLMaRT)\b) (\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\b|\b(AkihitoSubs|Arukoru|Nep[ ._-]Blanc|Shirσ)\b) (\[(Arid|sam|smol|SoM|Vodes)\]|-(Arid|sam|smol|SoM)\b|\b(Arg0|Baws|LostYears|LYS1TH3A|McBalls|SCY|Setsugen|Z4ST1N|ZeroBuild)\b)|(?<!Not)-Vodes\b (\[(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\]|-(Asakura|Cyan|Dae|Foxtrot|Gao|Not-Vodes|Pizza|tenshi)\b|\b(0x539|GSK[._-]kun|Half-Baked|HatSubs|MALD|MTBB|Okay-Subs|Reza|Slyfox|SoLCE)\b) (\b(SubsPlease|SubsPlus\+?|ZR)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CasStudio|CMRG|CRFW|CRUD|CtrlHD|FLUX|GNOME|HONE|KiNGS|Kitsune|monkee|NOSiViD|NTb|NTG|QOQ|RTN|SiC|TEPES|T6D|TOMMY|ViSUM)\b).* (\[(Lia|ZigZag)\]|-(Lia|ZigZa)\b|\b(BlueLobster|Erai-raws|GST|HorribleRips|HorribleSubs|KAN3D2M|KS|KiyoshiStar|NanDesuKa|URANIME|VARYG)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:3cTWeB|BTW|Cinefeel|CiT|Coo7|dB|DEEP|END|ETHiCS|FC|Flights|iJP|iKA|iT00NZ|JETIX|KHN|KiMCHI|LAZY|MiU|MZABI|NPMS|NYH|orbitron|PHOENiX|playWEB|PSiG|ROCCaT|RTFM|SA89|SbR|SDCC|SIGMA|SMURF|SPiRiT|TVSmash|WELP|XEBEC|4KBEC|CEBEX)\b).* (\[Kantai\]|-Kantai\b|\b(GJM|SobsPlease|Some-Stuffs)\b) ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:BYNDR|DRACULA|GNOMiSSiON|NINJACENTRAL|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr|T4H|ViSiON)\b).* (\b(DameDesuYo)\b)|\[AC\]|-AC\b ^(?=.*\bWEB[-_.]?(?:DL|RIP)\b)(?=.*\b(?:DEFLATE|INFLATE)\b).*
  ```
</details>

> [!Note]
> - The second regex is has space between square brackets in some groups, hence should only be used in future implementations where regexes are not split by spaces.

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
  (\[(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere)\]|-(Asakura|Bolshevik|Bulldog|Chihiro|Chimera|Davinci|Doki|Foxtrot|Lia|Orphan|SOLA|Tsundere(?!-))\b|\b(9volt|AOmundson|ASO|Cait-Sidhe|CoalGirls|Commie|D3|deanzel|Dragon-Releases|GHS|HaiveMind|hchcsen|Iznjie[ .-]Biznjie|Kaleido|karios|kBaraka|kmplx|Koitern|Koten[ ._-]Gars|Kulot|MCLR|mottoj|NH|NTRM|RMX|SallySubs|Scriptum|ShadyCrab|SNSbu|THORA|UWU|xPearse)\b)
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
  ^(?=.*\bBlu[-_]?Ray\b)(?!.*\bRemux\b)(?!.*\bWEB[-_.]?(?:DL|Rip)\b)(?=.*(?:\b(?:BBQ|c0kE|CRiSC|CtrlHD|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|MainFrame|NCmt|NTb|PTer|TayTO|TDD|TnP|VietHD|W4NK3R|ZQ)\b|-BMF)).*
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
  (\[(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\]|-(EDGE|EMBER|GHOST|Judas|naiyas|Prof|YURASUKA)\b|\b(AkihitoSubs|Arukoru|Nep[ ._-]Blanc|Shirσ)\b)
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
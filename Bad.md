## 🎭 Bad

This section contains a list of release groups, formats, and other criteria that are considered "bad" or not recommended for use.

## **All Bad:**
  ```regex
  \b(0neshot|1XBET|24xHD|41RGB|4K4U|A-Destiny|AIUS|AREY|AROMA|ASW|AV1|AZAZE|AceAres|AhmadDev|AniVoid|AnimeDynastyEN|AnimeKuro|AnimeRG|AnimeTR|Animesubs|Anitsu|ArataEnc|Ari|Asuka|BARC0DE|BDMV|BDVD|BJX|(Baked|Dead|Space)Fish|BdC|Beatrice|BiTOR|BlackLuster|C4K|CBB|CDDHD|CHD|CREATiVE24|CTFOH|CameEsp|Cat66|Cerberus|CiNE|Cleo|CrEwSaDe|CuaP|DARKFLiX|DBArabic|DDR|DKB|DNL|DP|Daddy|Deadmau|DepraveD|DsunS|Emmid|EuReKA|ExREN|FAV|FGT|FRDS|FZHD|FaNGDiNG0|Fumi|FunArts|GERMini|GHD|GPTHD|GalaxyRG|Golumpa|HAV1T|HDS|HDT|HDTime|HDWinG|HENiL|Hakata|Hall_of_C|Hatsuyuki|Hitoki|HollowRoxas|ICEBLUE|Iriza|JFF|JacobSwaggedUp|Johnny-englishsubs|KC|KEKMASTERS|KIRA|KQRM|KRP|KaiDubs|Kallango|KamiFS|Kanjouteki|Kawaiika|Kirion|Koi|L0SERNIGHT|LAMA|Leffe|LiGaS|Liber8|Lilith|LoliHouse|LowPower|M2TS|M@nI|MD|MGD|MT|MTeam|MarkII|Maximus|MeGusta|Metaljerk|MiniFreeza|MiniMTBB|MiniTheatre|MinisCuba|Mites|Modders|Moozzi2|Mr\.Deadpool|MySiLU|NC|NS|Nanako|NemDiggers|N(eo|wo)b|NhaNc3|NoGrp|Nokou|Nyanpasu|OFT|Ohys|OldCastle|PATOMiEL|PRODJi|PSA|PTNK|Pahe|Pandoratv|Pantsu|Pao|Pixel|Plex|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|RDN|RU4HD|Rando235|Ranger|Rapta|Raws-Maji|Raze|Reaktor|ReinForce|Rifftrax|RightShiftBy2|SAD|SANTi|SEiN|SHD|SHFS|SLAX|SRW|SSA|STUTTERSHIT|SWTYBLZ|Salieri|Samir755|SanKyuu|SasukeducK|Scryous|Seicher|ShieldBearer|Shiniori|Sokudo|StrayGods|Suki|TBS|TEKNO3D|TIKO|TOPKEK|TeamTurquoize|TeeWee|Tenrai|Tigole|TnF|Trix|U3-Web|UNBIASED|USD|Upscaler|VECTOR|VISIONPLUSHDR|Valenciano|VipapkStudios|WAF|Wardevil|WiKi|Will1869|YIFY|YTS|Yabai_Desu_NeRandomRemux|YakuboEncodes|Yameii|YuiSubs|Zeus|\$tore-Chill|aXXo|bonkai77|d3g|iNTENSO|iPUNISHER|iPlanet|iVy|jennaortega|km|mHD|mSD|mdcx|nHD|nSD|neko|neoHEVC|nikt0|phazer11|sekkusu&ok|tarunk9c|torenter69|x0r|xiao-av1|youshikibi)\b
  ```
<details>
<summary>Use the above pattern for now, until this one is fixed</summary>

  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(sbs|half[ .-]ou|half[ .-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[ ._-]Clip|Sing[-_. ]Along)\b|\bAV1\b|\b(\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[ .-]?[ .-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[ .-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[ .-]lu[ .-]zen|Man\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[ .-]?Bay|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[ ._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[ .-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[ .-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[ .-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[ ._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[ .-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\b|\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\]|\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[ ._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b|\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b|\b(Golumpa|KamiFS|torenter69)\b|\[Yameii\]|-Yameii\b|^(?!.*(Dual|Multi)[-_. ]?Audio).*((?<!multi-)\b(dub(bed)?)\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[ ._-]?audio|[([]dual[])]|(JA|ZH|KO)\\+EN|EN\+(JA|ZH|KO))).*\b(KaiDubs|KS)\b|\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b|\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b|\b(1XBET|2160p.*BiTOR|BEN[ ._-]THE[ ._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\bjennaortega(UHD)?|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b|\b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|BTM|C1NEM4|C4K|CDDHD|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RDN|Rifftrax|RU4HD|SANTi|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b|\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\b
  ```
</details>
<details>
<summary>Click here for All Bad DMM-specific</summary>

  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(sbs|half[.-]ou|half[.-]sbs|BluRay3D|BD3D|Extras|Bonus|Extended[._-]Clip|Sing[-_.]Along)\b|\bAV1\b|\b(\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[.-]?[.-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[.-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[.-]lu[.-]zen|Man\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[.-]?Bay|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[.-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[.-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[.-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[.-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[.-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\b|\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[.-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\]|\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b|\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b|\b(Golumpa|KamiFS|torenter69)\b|\[Yameii\]|-Yameii\b|^(?!.*(Dual|Multi)[-_.]?Audio).*((?<!multi-)\b(dub(bed)?)\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[._-]?audio|(JA|ZH|KO)\\+EN|EN\+(JA|ZH|KO))).*\b(KaiDubs|KS)\b|\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b|\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b|\b(1XBET|2160p.*BiTOR|BEN[._-]THE[._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\bjennaortega(UHD)?|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b|\b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|BTM|C1NEM4|C4K|CDDHD|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RDN|Rifftrax|RU4HD|SANTi|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b|\b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\b
  ```
</details>

### **3D:**
  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(sbs|half[ .-]ou|half[ .-]sbs|BluRay3D|BD3D)\b
  ```
<details>
<summary>Click here for alternate 3D- do not use</summary>
  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(3d|sbs|half[ .-]ou|half[ .-]sbs|BluRay3D|BD3D)\b
  ```
</details>

### **Anime LQ Groups:**
  ```regex
  \b(\$tore-Chill|0neshot|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBBCerberus|CuaP|DARKFLiX|DBArabic|Deadmau[ .-]?[ .-]?RAWS|DKB|DP|DsunS|ExREN|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata[ .-]?Ramen|Hall_of_C|HAV1T|HENiL|HollowRoxas|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|mal[ .-]lu[ .-]zen|Man\.KMaximus|mdcx|Metaljerk|MGD|Mites|Modders[ .-]?Bay|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|N[eo][wo]b[ ._-]?Subs|NS|Nyanpasu|OldCastle|phazer11|Plex[ .-]?Friendly|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235Ranger|M2TS|BDMV|BDVD|Reaktor|RightShiftBy2|Rip[ .-]?Time|Salieri|Samir755|SanKyuu|sekkusu&ok|SHFS|shincaps|SLAX|SRW|SSA|StrayGods|TeamTurquoize|Tenrai[ .-]?Sensei|TnF|TOPKEK|U3-Web|Valenciano|VipapkStudios|WtF[ ._-]?Anime|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|Anime[ .-]?(Chap|Land|Time)|Mini(Freeza|MTBB|sCuba|Theatre)|-(224|Ari|Cerberus|Cleo|Daddy(Subs)?|Emmid|FAV|Hatsuyuki|Hitoki|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|USD|Wardevil|Yun|zza))\b|\[(224|Ari|Cerberus|Cleo|Daddy(Subs)?|DB|Emmid|FAV|Hatsuyuki|Hitoku|HR|Kallango|Maximus|MD|Pantsu|Pao|Pixel|Ranger|Rapta|Raze|SAD|SEiN|Sokudo|Suki[ .-]?Desu|Trix|UNBIASED|uP|USD|Wardevil|Yun|zza)\]
  ```

### **Anime Raws:**
  ```regex
  \b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[ ._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b
  ```
<details>
<summary>Click here for alternate anime raws- do not use</summary>
  ```regex
  \b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|Koi|Lilith|LowPower|Nanako|NC|neko|New|Ohys|Pandoratv|Scryous|Seicher|Shiniori)[ ._-]?(Raws)\b|\b(Moozzi2|Raws-Maji|ReinForce)\b|\[km\]|-km\b
  ```
</details>

### **AV1:**
  ```regex
  \bAV1\b
  ```

### **Bad Dual Groups:**
  ```regex
  \b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b
  ```

### **Dubs Only:**
  ```regex
  \b(Golumpa|KamiFS|torenter69)\b|\[Yameii\]|-Yameii\b|^(?!.*(Dual|Multi)[-_. ]?Audio).*((?<!multi-)\b(dub(bed)?)\b|(funi|eng(lish)?)_?dub)|^(?!.*(dual[ ._-]?audio|[([]dual[])]|(JA|ZH|KO)\\+EN|EN\+(JA|ZH|KO))).*\b(KaiDubs|KS)\b
  ```

### **Extras:**
  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(Extras|Bonus|Extended[ ._-]Clip)\b
  ```

### **VOSTFR:**
  ```regex
  \b(VOST.*?FR(E|A)?|SUBFR(A|ENCH)?)\b
  ```

### **Generated Dynamic HDR:**
  ```regex
  \b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b
  ```

### **LQ:**
  ```regex
  \b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b
  ```
<details>
<summary>Click here for alternate LQ- do not use</summary>
  ```regex
  \b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|GHOSTS|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b
  ```
</details>

### **LQ (Release Title):**
  ```regex
  \b(1XBET|2160p.*BiTOR|BEN[ ._-]THE[ ._-]MEN|CREATiVE24|Feranki1980|GalaxyRG|(?<!-)\bjennaortega(UHD)?|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b
  ```

### **LQ (General):**
  ```regex
  \b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|BTM|C1NEM4|C4K|CDDHD|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RDN|Rifftrax|RU4HD|SANTi|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b
  ```
<details>
<summary>Click here for alternate LQ- do not use</summary>
  ```regex
  \b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|beAst|BTM|C1NEM4|C4K|CDDHD|CHAOS|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EPiC|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KiNGDOM|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|LUCY|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?|PATOMiEL|PRODJi|PSA|PTNK|RARBG|RDN|Rifftrax|RU4HD|SANTi|Scene|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b
  ```
</details>

### **Sing-Along Versions:**
  ```regex
  \b(?<=\b[12]\d{3}\b).*\b(Sing[-_. ]Along)\b
  ```
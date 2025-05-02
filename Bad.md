# Bad Regex Patterns

- ** All Bad:**
```
\b(?<=\b[12]\d{3}\b).*\b(sbs|BluRay3D|BD3D)\b|\b(\$tore-Chill|0neshot|\[224\]|-224|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|\[Ari\]|-Ari\b|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBB|\[Cerberus\]|-Cerberus\b|\[Cleo\]|-Cleo|CuaP|\[Daddy(Subs)?\]|-Daddy(Subs)?\b|DARKFLiX|\[DB\]|DBArabic|Deadmau|DKB|DP|DsunS|\[Emmid\]|-Emmid\b|ExREN|\[FAV\]|-FAV\b|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata|Hall_of_C|\[Hatsuyuki\]|-Hatsuyuki\b|HAV1T|HENiL|\[Hitoku\]|-Hitoku\b|HollowRoxas|\[HR\]|-HR\b|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|\[Kallango\]|-Kallango\b|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|Man\.K|\[Maximus\]|-Maximus\b|\[MD\]|-MD\b|mdcx|Metaljerk|MGD|MiniFreeza|MiniMTBB|MinisCuba|MiniTheatre|Mites|Modders|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|NS|Nyanpasu|OldCastle|\[Pantsu\]|-Pantsu\b|\[Pao\]|-Pao\b|phazer11|\[Pixel\]|-Pixel\b|Plex|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235|\[Ranger\]|-Ranger\b|\[Rapta\]|-Rapta\b|M2TS|BDMV|BDVD|\[Raze\]|-Raze\b|Reaktor|RightShiftBy2|Rip|\[SAD\]|-SAD\b|Salieri|Samir755|SanKyuu|\[SEiN\]|-SEiN\b|sekkusu&ok|SHFS|shincaps|SLAX|\[Sokudo\]|-Sokudo\b|SRW|SSA|StrayGods|Suki|TeamTurquoize|Tenrai|TnF|TOPKEK|\[Trix\]|-Trix\b|U3-Web|\[UNBIASED\]|-UNBIASED\b|\[uP\]|\[USD\]|-USD\b|Valenciano|VipapkStudios|\[Wardevil\]|-Wardevil\b|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|\[Yun\]|-Yun\b|\[zza\]|-zza\b)\b|\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|\[km\]|-km\b|Koi|Lilith|LowPower|Moozzi2|Nanako|NC|neko|Ohys|Raws-Maji|ReinForce|Scryous|Seicher|Shiniori)\b|\b(\bAV1\b)\b|\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b|\b(Golumpa|KamiFS|torenter69|\[Yameii\]|-Yameii\b)\b|\b((?<=\\b[12]\\d{3}\\b).*\\b(Extras|Bonus)\\b)\b|\b(\b(VOST.*?FR(E|A)?)\b|\b(SUBFR(A|ENCH)?)\b)\b|\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)|\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?\b|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b|\b(1XBET|Feranki1980|GalaxyRG|(?<!-)\b(jennaortega(UHD)?)\b|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b|\b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|BTM|C1NEM4|C4K|CDDHD|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?\b|PATOMiEL|PRODJi|PSA|PTNK|RDN|Rifftrax|RU4HD|SANTi|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b
```

- **3D:**
```
\b(?<=\b[12]\d{3}\b).*\b(sbs|BluRay3D|BD3D)\b
```

- **Anime LQ Groups:**
```
\b(\$tore-Chill|0neshot|\[224\]|-224|A-Destiny|AceAres|AhmadDev|AnimeDynastyEN|AnimeKuro|AnimeRG|Animesubs|AnimeTR|Anitsu|AniVoid|ArataEnc|AREY|\[Ari\]|-Ari\b|ASW|BJX|BlackLuster|bonkai77|CameEsp|Cat66|CBB|\[Cerberus\]|-Cerberus\b|\[Cleo\]|-Cleo|CuaP|\[Daddy(Subs)?\]|-Daddy(Subs)?\b|DARKFLiX|\[DB\]|DBArabic|Deadmau|DKB|DP|DsunS|\[Emmid\]|-Emmid\b|ExREN|\[FAV\]|-FAV\b|(Baked|Dead|Space)Fish|FunArts|GERMini|Hakata|Hall_of_C|\[Hatsuyuki\]|-Hatsuyuki\b|HAV1T|HENiL|\[Hitoku\]|-Hitoku\b|HollowRoxas|\[HR\]|-HR\b|ICEBLUE|iPUNISHER|JacobSwaggedUp|Johnny-englishsubs|\[Kallango\]|-Kallango\b|Kanjouteki|KEKMASTERS|Kirion|KQRM|KRP|LoliHouse|M@nI|Man\.K|\[Maximus\]|-Maximus\b|\[MD\]|-MD\b|mdcx|Metaljerk|MGD|MiniFreeza|MiniMTBB|MinisCuba|MiniTheatre|Mites|Modders|Mr\.Deadpool|NemDiggers|neoHEVC|Nokou|NS|Nyanpasu|OldCastle|\[Pantsu\]|-Pantsu\b|\[Pao\]|-Pao\b|phazer11|\[Pixel\]|-Pixel\b|Plex|PnPSubs|Polarwindz|Project-gxs|PuyaSubs|QAS|QCE|Rando235|\[Ranger\]|-Ranger\b|\[Rapta\]|-Rapta\b|M2TS|BDMV|BDVD|\[Raze\]|-Raze\b|Reaktor|RightShiftBy2|Rip|\[SAD\]|-SAD\b|Salieri|Samir755|SanKyuu|\[SEiN\]|-SEiN\b|sekkusu&ok|SHFS|shincaps|SLAX|\[Sokudo\]|-Sokudo\b|SRW|SSA|StrayGods|Suki|TeamTurquoize|Tenrai|TnF|TOPKEK|\[Trix\]|-Trix\b|U3-Web|\[UNBIASED\]|-UNBIASED\b|\[uP\]|\[USD\]|-USD\b|Valenciano|VipapkStudios|\[Wardevil\]|-Wardevil\b|xiao-av1|Yabai_Desu_NeRandomRemux|YakuboEncodes|youshikibi|YuiSubs|\[Yun\]|-Yun\b|\[zza\]|-zza\b)\b
```

- **Anime Raws:**
```
\b(Asuka|Beatrice|Daddy|Fumi|Iriza|Kawaiika|\[km\]|-km\b|Koi|Lilith|LowPower|Moozzi2|Nanako|NC|neko|Ohys|Raws-Maji|ReinForce|Scryous|Seicher|Shiniori)\b
```

- **AV1:**
```
\b(\bAV1\b)\b
```

- **Bad Dual Groups:**
```
\b(alfaHD.*|BAT|BlackBit|BNd|C\.A\.A|Cory|EXTREME|FF|FOXX|G4RiS|GUEIRA|LCD|N3G4N|ONLYMOViE|PD|PTHome|RiPER|RK|SiGLA|Tars|tokar86a|TvR|vnlls|WTV|Yatogam1|YusukeFLA|ZigZag|ZNM)\b
```

- **Dubs Only:**
```
\b(Golumpa|KamiFS|torenter69|\[Yameii\]|-Yameii\b)\b
```

- **Extras:**
```
\b((?<=\\b[12]\\d{3}\\b).*\\b(Extras|Bonus)\\b)\b
```

- **VOSTFR:**
```
\b(\b(VOST.*?FR(E|A)?)\b|\b(SUBFR(A|ENCH)?)\b)\b
```

- **Generated Dynamic HDR:**
```
\b(BiTOR|DepraveD|SasukeducK|tarunk9c|VD0N|VECTOR)\b
```

- **LQ:**
```
\b(BRiNK|BTM|CHX|CTFOH|d3g|DepraveD|EVO|Feranki1980|FGT|FMD|HiQVE|iNTENSO|iVy|JFF|KC|MeGusta|nhanc3|OFT|Pahe(\.(ph|in))?\b|PSA|SasukeducK|SHD|ShieldBearer|TBS|TG|VIDEOHOLE|worldmkv|XLF|Zero00)\b
```

- **LQ (Release Title):**
```
\b(1XBET|Feranki1980|GalaxyRG|(?<!-)\b(jennaortega(UHD)?)\b|SWTYBLZ|TeeWee|TEKNO3D|Will1869)\b
```

- **LQ (General):**
```
\b(24xHD|41RGB|4K4U|AROMA|aXXo|AZAZE|BARC0DE|BAUCKLEY|BdC|BTM|C1NEM4|C4K|CDDHD|CHD|CiNE|COLLECTiVE|CREATiVE24|CrEwSaDe|CTFOH|d3g|DDR|DNL|EuReKA|FaNGDiNG0|Feranki1980|FGT|FMD|FRDS|FZHD|GalaxyRG|GHD|GPTHD|HDS|HDT|HDTime|HDWinG|iNTENSO|iPlanet|iVy|jennaortega(UHD)?|JFF|KC|KIRA|L0SERNIGHT|LAMA|Leffe|Liber8|LiGaS|MarkII|MeGusta|mHD|mSD|MTeam|MT|MySiLU|NhaNc3|nHD|nikt0|NoGr(ou)?p|nSD|OFT|Pahe(\.(ph|in))?\b|PATOMiEL|PRODJi|PSA|PTNK|RDN|Rifftrax|RU4HD|SANTi|SHD|ShieldBearer|STUTTERSHIT|SUNSCREEN|TBS|TEKNO3D|Tigole|TIKO|VISIONPLUSHDR(-X|1000)?|WAF|WiKi|x0r|YIFY|YTS(.(MX|LT|AG))?|Zeus)\b
```
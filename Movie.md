## 🎬 Movies  

- **ALL** includes every Movie recommended release group, regardless of its format and tier.

  - **Remux** – lossless, no re-encoding, largest file size, best quality.
    - Remux Tier 01 - Best lossless rips from the **most trusted release groups**
    - Remux Tier 02 - High-quality, untouched rips with slightly lower consistency
    - Remux Tier 03 - Still lossless but from **less prominent groups**; quality may vary
  
  - **UHD Bluray** – 4K Bluray rip with HDR and high color depth, often re-encoded.
    - UHD Bluray Tier 01 – Premium **4K Blu-ray** rips with **top-tier encoding**
    - UHD Bluray Tier 01 – High-quality UHD encodes but **slightly lower consistency**
    - UHD Bluray Tier 01 – Acceptable UHD encodes with **more compression/artifacts**
  
  - **HD Bluray** – 1080p Bluray rip with higher bitrate than streaming, usually re-encoded.
    - HD Bluray Tier 01 – Best **1080p Blu-ray** encodes with **high bitrates**
    - HD Bluray Tier 02 – Solid HD encodes with **good quality but slightly lower consistency**.
    - HD Bluray Tier 03 – Acceptable HD rips but **with more noticeable compression**
  
  - **WEB** – Direct stream download, no compression artifacts, lower bitrate than Blu-ray.
    - WEB Tier 01 – Top-tier **WEB-DLs** with **high bitrates and minimal compression**
    - WEB Tier 02 – Good quality WEB releases but **slightly lower bitrates**
    - WEB Tier 03 – Acceptable WEB encodes but **quality varies, with more compression**   
---

## **All Movies:**
```regex
    \b(3L|ATELiER|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ|Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|iFT|KRaLiMaRKo|NTb|PTP|SumVision|TOA|TRiToN|CtrlHD|MainFrame|DON|W4NK3R|HQMUX|BHDStudio|hallowed|HONE|PTer|SPHD|WEBDV|BBQ|c0kE|Chotab|CRiSC|D-Z0N3|Dariush|EbP|EDPH|Geek|LolHD|TayTO|TDD|TnP|VietHD|EA|HiDt|HiSD|QOQ|SA89|sbR|LoRD|playHD|ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CMRG|CRFW|CRUD|FLUX|GNOME|KiNGS|Kitsune|NOSiViD|NTG|SiC|dB|MiU|monkee|MZABI|PHOENiX|playWEB|SbR|SMURF|TOMMY|XEBEC|4KBEC|CEBEX)\b|-BMF|-WiLDCAT

```
---
## **All Remux Tiers:**
```regex
    \b(3L|ATELiER|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ|Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES|decibeL|EPSiLON|HiFi|iFT|KRaLiMaRKo|NTb|PTP|SumVision|TOA|TRiToN)\b|-BMF|-WiLDCAT
```
### **Remux Tier 01:**
```regex
    \b(3L|BiZKiT|BLURANiUM|CiNEPHiLES|FraMeSToR|PmP|ZQ)\b|-BMF|-WiLDCAT
```
### **Remux Tier 02:**
```regex
    \b(Flights|NCmt|playBD|SiCFoI|SURFINBIRD|TEPES)\b
```
### **Remux Tier 03:**
```regex
    \b(ATELiER|decibeL|EPSiLON|HiFi|iFT|KRaLiMaRKo|NTb|PTP|SumVision|TOA|TRiToN)\b
```
---
## **All UHD Bluray Tiers:**
```regex
    \b(CtrlHD|MainFrame|DON|W4NK3R|HQMUX|BHDStudio|hallowed|HONE|PTer|SPHD|WEBDV)\b
```
### **UHD Bluray Tier 01:**
```regex
    \b(CtrlHD|MainFrame|DON|W4NK3R)\b
```
### **UHD Bluray Tier 02:**
```regex
    \b(HQMUX)\b
```
### **UHD Bluray Tier 03:**
```regex
    \b(BHDStudio|hallowed|HONE|PTer|SPHD|WEBDV)\b
```
---
## **All HD Bluray Tiers:**
```regex
    \b(ATELiER|BBQ|c0kE|Chotab|CRiSC|CtrlHD|D-Z0N3|Dariush|decibeL|DON|EbP|EDPH|Geek|HiFi|LolHD|NCmt|PTer|TayTO|TDD|TnP|VietHD|ZQ|EA|HiDt|HiSD|iFT|NTb|QOQ|SA89|sbR|BHDStudio|hallowed|HONE|LoRD|playHD|SPHD|W4NK3R)\b|-BMF
```
### **HD Bluray Tier 01:**
```regex
    \b(BBQ|c0kE|Chotab|CRiSC|CtrlHD|D-Z0N3|Dariush|decibeL|DON|EbP|EDPH|Geek|LolHD|NCmt|PTer|TayTO|TDD|TnP|VietHD|ZQ)\b|-BMF
```
### **HD Bluray Tier 02:**
```regex
    \b(EA|HiDt|HiSD|iFT|NTb|QOQ|SA89|sbR)\b
```
### **HD Bluray Tier 03:**
```regex
    \b(ATELiER|BHDStudio|hallowed|HiFi|HONE|LoRD|playHD|SPHD|W4NK3R)\b
```
---
## **All WEB Tiers:**
```regex
    \b(ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CMRG|CRFW|CRUD|FLUX|GNOME|HONE|KiNGS|Kitsune|NOSiViD|NTb|NTG|SiC|TEPES|dB|Flights|MiU|monkee|MZABI|PHOENiX|playWEB|SbR|SMURF|TOMMY|XEBEC|4KBEC|CEBEX)\b
```
### **WEB Tier 01:**
```regex
    \b(ABBIE|AJP69|APEX|PAXA|PEXA|XEPA|BLUTONiUM|CMRG|CRFW|CRUD|FLUX|GNOME|HONE|KiNGS|Kitsune|NOSiViD|NTb|NTG|SiC|TEPES)\b
```
### **WEB Tier 02:**
```regex
    \b(dB|Flights|MiU|monkee|MZABI|PHOENiX|playWEB|SbR|SMURF|TOMMY|XEBEC|4KBEC|CEBEX)\b
```
### **WEB Tier 03:**
```regex
    \b(GNOMiSSiON|NINJACENTRAL|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr)\b
```
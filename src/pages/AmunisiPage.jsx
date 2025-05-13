import { useState } from "react";

const amunisi = [
  { name: "MU5-TJ", 
    description: "61 grains 5,56 x 45 mm NATO FMJ ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5 TJ.png" },

  { name: "MU5-TJ A1", 
    description: "68 grains 5,56 x 45 mm NATO FMJ ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5TJA1.png" },

  { name: "MU5-TJ METALLIC CLIP", 
    description: "61 grains 5,56 x 45 mm NATO FMJ ammunition with metallic clip for faster loading, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5TJ METALLICCLIP.png" },

  { name: "MU5-TJ METALLIC LINK M27", 
    description: " 5,56 x 45 mm NATO FMJ Linked (M27) ammunition, for use with light machine guns chambered in 5,56 x 45 mm NATO: SM3, SM3-A1, and others using 7 inch twist barrel.", 
    image: "MU5TJ METALLIC LINK M27.png" },

  { name: "MU5-TJ + MU5-N LINK", 
    description: "5,56 x 45 mm NATO FMJ and Tracer Linked (M27) ammunition, for use with light machine guns chambered in 5,56 x 45 mm NATO with M27 Link: SM3, SM3-A1, and others using 7 inch twist barrel.", 
    image: "MU5TJA1.png" },

  { name: "MU5-H", 
    description: "5,56 x 45 mm NATO Blank ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel with blank firing adapter.", 
    image: "MU5-H.png" },

  { name: "MU5-M A1", 
    description: "5,56 x 45 mm NATO Rifle Match ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-M A1.png" },

  { name: "MU5-M A2", 
    description: "5,56 x 45 mm NATO Carbine Match ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-M A2.png" },

  { name: "MU5-HPBT A1", 
    description: "5,56 x 45 mm NATO Rifle Match ammunition with HPBT Bullet, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-HPBT A1.png" },

  { name: "MU5-HPBT A2", 
    description: "5,56 x 45 mm NATO Carbine Match ammunition with HPBT Bullet, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-HPBT A2.png" },

  { name: " MU5-K", 
    description: " 5,56 x 45 mm NATO Less-Lethal ammunition with Plastic Bullet, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-K.png" },

  { name: "MU5-N", 
    description: " 5,56 x 45 mm NATO Tracer ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel.", 
    image: "MU5-N.png" },

  { name: "MU5-S A1", 
    description: "5,56 x 45 mm NATO Subsonic ammunition, for use with firearms chambered in 5,56 x 45 mm NATO: SS1 series, SS2 series, SS3-M1 series, and others using 7 inch twist barrel", 
    image: "MU5-S A1.png" },

  { name: " MU4-TJ", 
    description: " 5,56 x 45 mm M193 FMJ ammunition, for use with firearms chambered in 5,56 x 45 mm M193: M16A1 and others using 12 inch twist barrel.", 
    image: "MU4-TJ.png" },

  { name: " MU4-N", 
    description: "5,56 x 45 mm M193 Tracer ammunition, for use with firearms chambered in 5,56 x 45 mm M193: M16A1 and others using 12 inch twist barrel.", 
    image: "MU4-N.png" },

  { name: " MU4-TJ + MU4-N LINK", 
    description: " 5,56 x 45 mm M193 Linked (M27) FMJ and Tracer ammunition, for use with light machine guns chambered in 5,56 x 45 mm M193 Linked (M27) using 12 inch twist barrel.", 
    image: "MU4-TJ_MU4-N_LINK.png" },

  { name: " MU42-TJ", 
    description: "5,56 x 44 mm (.222) FMJRN ammunition, for use with firearms chambered in 5.56 x 44 mm/.222: SB2 series.", 
    image: "MU42-TJ.png" },

  { name: "MU42-K", 
    description: " 5,56 x 44 mm (.222) Less-lethal ammunition with plastic bullet, for use with firearms chambered in 5.56 x 44 mm/.222: SB2 series.", 
    image: "MU42-K.png" },

  { name: "MU42-H", 
    description: " 5,56 x 44 mm (.222) Blank ammunition, for use with firearms chambered in 5.56 x 44 mm/.222: SB2 series using blank firing adapter.", 
    image: "MU42-H.png" },

  { name: "MU2-TJ", 
    description: " 7,62 x 51 mm NATO FMJ ammunition, for use with firearms chambered in 7,62 x 51 mm NATO: SS3, SPM-2, SPR-3, SP-1, and others with similar caliber.", 
    image: "MU2-TJ.png" },

  { name: "MU2-TJS", 
    description: "7,62 x 51 mm NATO Sniper ammunition, for use with high precision rifles chambered in 7,62 x 51 mm NATO: SPR-3 and others with similar caliber.", 
    image: "MU2-TJS.png" },

  { name: " MU2-TJS A1", 
    description: "7,62 x 51 mm NATO Match King ammunition, for use with high precision rifles chambered in 7,62 x 51 mm NATO: SPR-3 and others with similar caliber.", 
    image: "MU2-TJS A1.png" },

  { name: "MU2-H", 
    description: " 7,62 x 51 mm NATO Blank ammunition, for use with firearms chambered in 7,62 x 51 mm NATO: SPM-2, SPR-3, SP-1, others with similar caliber using blank firing adapter", 
    image: "MU2-H.png" },

  { name: " MU2-N", 
    description: " 7,62 x 51 mm NATO Tracer ammunition, for use with firearms chambered in 7,62 x 51 mm NATO: SPM-2, SPR-3, SP-1, and others with similar caliber.", 
    image: "MU2-N.png" },

  { name: "MU2-TJ + MU2-N", 
    description: " 7,62 x 51 mm NATO Linked (M13) FMJ and Tracer ammunition for use with Light Machine Guns and General Purpose Machine Guns chambered in 7,62 x 51 mm NATO with M13 Link: SM2-V1, SM2-V2, and others with similar caliber", 
    image: "MU2-TJ MU2-N.png" },

  { name: "MU2-TJ", 
    description: " 7,62 x 51 mm NATO Linked (M13) FMJ ammunition, for use with Light Machine Guns and General Purpose Machine Guns chambered in 7,62 x 51 mm NATO with M13 Link: SM2-V1, SM2-V2, and others with similar caliber.", 
    image: "MU2-TJ.png" },

  { name: " MU2-DP", 
    description: "7,62 x 51 mm special ammunition for use with training firearms chambered in 7,62 x 51 mm: SS Dopper.", 
    image: "MU2-DP.png" },

  { name: "MU11-TJ SABHARA", 
    description: " 7,62 x 45 mm FMJ ammunition, for use with firearms chambered in 7,62 x 51 mm: SB1 series.", 
    image: "MU11-TJ SABHARA.png" },

  { name: " MU11-K", 
    description: " 7,62 x 45 mm Less-lethal ammunition with plastic bullet, for use with firearms chambered in 7,62 x 51 mm: SB1 series.", 
    image: "MU11-K.png" },

  { name: " MU11-H", 
    description: " 7,62 x 45 mm Blank ammunition, for use with firearms chambered in 7,62 x 51 mm: SB1 series using blank firing adapter.", 
    image: "MU11-H.png" },

  { name: "MU8-TJ", 
    description: " 7,62 x 39 mm Russian FMJ ammunition For use with firearms chambered in 7,62 x 39 mm Russian: AK-47, AKM, SKS, RPK, RPD, and others with similar caliber.", 
    image: "MU8-TJ.png" },

  { name: " MU8-H", 
    description: " 7,62 x 39 mm Russian Blank ammunition For use with firearms chambered in 7,62 x 39 mm Russian: AK-47, AKM, SKS, RPK, RPD, and others with similar caliber using blank firing adapter.", 
    image: "MU8-H.png" },

  { name: " MU8-K", 
    description: " 7,62 x 39 mm Russian Less-lethal ammunition with rubber bullet, for use with firearms chambered in 7,62 x 39 mm Russian: AK-47, AKM, SKS, RPK, RPD, and others with similar caliber.", 
    image: "MU8-K.png" },

  { name: " MU57-TJ", 
    description: ".300 Blackout (7,62 x 35 mm) Ball Ammunition, for use with firearms chambered in .300 Blackout (7,62 x 35 mm) : SS-Blackout and others with similar caliber.", 
    image: "MU57-TJ.png" },

  { name: " MU15-TJ A1", 
    description: "7,65 x 21 mm FMJ ammunition, for use with firearms chambered in 7,65 x 21 mm: First Defence, PM .32 FS and others with similar caliber.", 
    image: "MU15-TJ A1.png" },

  { name: "MU15-TJ", 
    description: " 7,65 x 21 mm (.32 ACP) FMJ ammunition, for use with firearms chambered in 7,65 x 17 mm/.32 ACP: P3A and others with similar caliber. ", 
    image: "MU15-TJ.png" },

  { name: " MU2-M A1", 
    description: " 175 grains .308 WIN Match ammunition, for use with high precision rifles chambered in .308 WIN: SPR-3 and others with similar caliber.", 
    image: "MU2-M A1.png" },

  { name: " MU2-M", 
    description: ".308 WIN Match ammunition, for use with high precision rifles chambered in .308 WIN: SPR-3 and others with similar caliber.", 
    image: "MU2-M.png" },

  { name: "MU56-MA1", 
    description: " .338 Magnum Ammunition, for use with high precision rifles chambered in .338 Magnum : SPR-4 and others with similar caliber.", 
    image: "MU56-MA1.png" },

  { name: " MU3-TJ + MU3-N", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M15A2) FMJ and Tracer ammunition for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M15A2 Link Belt: SM5 and others with similar caliber.", 
    image: "MU3-TJ_MU3-N.png" },

  { name: "MU3-TJ + MU3-N METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) FMJ and Tracer ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber.", 
    image: "MU3-TJ  MU3-N METALLIC LINK M2HBFL.png" },

  { name: " MU3-P + MU3-PN METALLIC LINK M15A2/CIS", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M15A2) Armour Piercing and Armour Piercing Tracer ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M15A2 Link Belt: SM5 and others with similar caliber", 
    image: "MU3-P   MU3-PNMETALLIC LINK M15A2CIS.png" },

  { name: "MU3-P + MU3-PN METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) Armour Piercing and Armour Piercing Tracer ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber. ", 
    image: "MU3-P  MU3-PN METALLICLINK M2HBFL.png" },

  { name: " MU3-P + MU3-PB METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) Armour Piercing and Armour Piercing Incendiary ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber.", 
    image: "MU3-P  MU3-PBMETALLIC LINK M2HBFL.png" },

  { name: "MU3-P + MU3-PBN METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) Armour Piercing and Armour Piercing Incendiary Tracer ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber.", 
    image: "MU3-P  MU3-PBN METALLICLINK M2HBFL.png" },

  { name: "MU3-TJ LINKED HBFL METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) FMJ ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber.", 
    image: "MU3-TJ LINKED HBFL METALLIC LINK M2HBFL.png" },

  { name: "MU3-P LINKED HBFL METALLIC LINK M2/HBFL", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M2) Armour Piercing ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M2 Link Belt: SM5-A1 and others with similar caliber.", 
    image: "MU3-P LINKEDHBFL METALLIC LINK M2HBFL.png" },

  { name: "MU3-TJ LINK CIS METALLIC LINK M15A2/CIS", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Linked (M15A2) FMJ ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M15A2 Link Belt: SM5 and others with similar caliber. ", 
    image: "MU3-TJ LINK CIS METALLICLINK M15A2CIS.png" },

  { name: "MU3-P LINK CIS METALLIC LINK M15A2/CIS", 
    description: "12,7 x 99 mm NATO (.50 BMG) Linked (M15A2) Armour Piercing ammunition, for use with Heavy Machine Guns chambered in 12,7 x 99 mm/.50 BMG with M15A2 Link Belt: SM5 and others with similar caliber. ", 
    image: "MU3-P LINK CIS METALLIC LINK M15A2CIS.png" },

  { name: "MU3-M ", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Long Range Sniper Ammunition, for use with High Precision Rifles chambered in 12,7 x 99 mm/.50 BMG: SPR-2 and others with similar caliber.", 
    image: "MU3-M.png" },

  { name: "MU3-BLAM", 
    description: " 12,7 x 99 mm NATO (.50 BMG) High Explosive Incendiary Armour Piercing ammunition, for use with High Precision Rifles chambered in 12,7 x 99 mm/.50 BMG: SPR-2 and others with similar caliber.", 
    image: "MU3-BLAM.png" },

  { name: "MU3-SAM", 
    description: " 12,7 x 99 mm NATO (.50 BMG) Sniper Anti Material ammunition, for use with High Precision Rifles chambered in 12,7 x 99 mm/.50 BMG: SPR-2 and others with similar caliber", 
    image: "MU3-SAM.png" },

  { name: "MU1-TJ ", 
    description: " 9 x 19 mm Luger/Parabellum FMJ ammunition, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber. ", 
    image: "MU1-TJ.png" },

  { name: "MU1-TJ A1", 
    description: " 9 x 19 mm Luger/Parabellum FMJ ammunition with IPSC load, for use with f irearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber.", 
    image: "MU1-TJ A1.png" },

  { name: "MU1-JHP", 
    description: " 9 x 19 mm Luger/Parabellum Jacketed Hollow Point ammunition, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber. ", 
    image: "MU1-JHP.png" },

  { name: "MU1-JHP A1", 
    description: "9 x 19 mm Luger/Parabellum Jacketed Hollow Point ammunition with copper bullet, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber.", 
    image: "MU1-JHP A1.png" },

  { name: "MU1-H", 
    description: "9 x 19 mm Luger/Parabellum Blank ammunition, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber.", 
    image: "MU1-H.png" },

  { name: "MU1-S", 
    description: " 9 x 19 mm Luger/Parabellum Subsonic ammunition, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber.", 
    image: "MU1-S.png" },

  { name: "MU1-K", 
    description: "9 x 19 mm Luger/Parabellum Less-lethal ammunition with rubber bullet, for use with firearms chambered in 9 x 19 mm Luger/Parabellum: G2 Series, Armo Series, P1, P2, PM1, PM2, PM3, and others with similar caliber.", 
    image: "MU1-K.png" },

  { name: "MU9-BK", 
    description: " 9 x 21 mm Less-lethal ammunition with rubber ball, for use with firearms chambered in 9 x 21 mm with smooth barrel.", 
    image: "MU9-BK.png" },

  { name: "MU9-K", 
    description: " 9 x 21 mm Less-lethal ammunition with rubber bullet, for use with firearms chambered in 9 x 21 mm: PM1-A1 (SPH2-V1) and others with similar caliber", 
    image: "MU9-K.png" },

  { name: "MU9-UL", 
    description: " 9 x 21 mm ammunition with soft point bullet, for use with firearms chambered in 9 x 21 mm: PM1-A1 (SPH2-V1) and others with similar caliber. ", 
    image: "MU9-UL.png" },

  { name: "MU9-TJ", 
    description: " 9 x 21 mm FMJ ammunition, for use with firearms chambered in 9 x 21 mm: PM1-A1 (SPH2-V1) and others with similar caliber.", 
    image: "MU9-TJ.png" },

  { name: "MU16-TJ", 
    description: " 9 x 17 mm/.380 Auto FMJ ammunition, for use with firearms chambered in 9 x 17 mm/.380 Auto.", 
    image: "MU16-TJ.png" },

  { name: "MU20-TJ ", 
    description: ".38 Super Auto FMJ ammunition, for use with firearms chambered in .38 Super Auto.", 
    image: "MU20-TJ.png" },

  { name: "MU20-TJ A1", 
    description: ".38 Super Auto FMJ ammunition with IPSC load, for use with firearms chambered in .38 Super Auto.", 
    image: "MU20-TJ A1.png" },

  { name: "MU6-TJ", 
    description: " .38 Special ammunition with round nose bullet, for use with firearms chambered in .38 Special.", 
    image: "MU6-TJ.png" },

  { name: "MU6-K", 
    description: ".38 Special Less-lethal ammunition with rubber bullet, for use with firearms chambered in .38 Special.", 
    image: "MU6-K.png" },

  { name: "MU6-H", 
    description: ".38 Special Blank ammunition, for use with firearms chambered in .38 Special.", 
    image: "MU6-H.png" },

  { name: "MU18-TJ", 
    description: ".40 S&W FMJ ammunition, for use with firearms chambered in .40 S&W.", 
    image: "MU18-TJ.png" },

  { name: "MU37-TJ", 
    description: ".45 Auto FJM ammunition, for use with firearms chambered in .45 Auto/ACP.", 
    image: "MU37-TJ.png" },

  { name: "MEDIUM CALIBER AMMUNITION", 
    description: " 20 x 110 Armour Piercing round, for use with 20 x 110 mm cannons and anti material rifles.", 
    image: "MEDIUM CALIBER AMMUNITION.png" },

  { name: "MU30-PE", 
    description: " 40 mm Low Velocity High Explosive Grenade, for use with Low Velocity Grenade Launcher chambered in 40 x 46 mm: SPG-1, SPG-1A series and others with similar caliber. ", 
    image: "MU30-PE.png" },

  { name: "MU30-AR", 
    description: " 40 mm Low Velocity Tear Gas Grenade, for use with Low Velocity Grenade Launcher chambered in 40 x 46 mm: SPG-1, SPG-1A series and others with similar caliber. ", 
    image: "MU30-AR.png" },

  { name: "MU30-TP", 
    description: " 40 mm Low Velocity Target Practice Grenade, for use with Low Velocity Grenade Launcher chambered in 40 x 46 mm: SPG-1, SPG-1A series and others with similar caliber. ", 
    image: "MU30-TP.png" },

  { name: "MU28-PE", 
    description: " 60 mm Long Range High Explosive Mortar Bomb, for use with 60 mm Long Range Mortar Launcher: MO-2 ", 
    image: "MU28-PE.png" },

  { name: "MU28-AS", 
    description: "60 mm Long Range Smoke Mortar Bomb, for use with 60 mm Long Range Mortar Launcher: MO-2 ", 
    image: "MU28-AS.png" },

  { name: "MU28-LAT A1", 
    description: " 60 mm Long Range Practice A1 Reusable (20x) Mortar Bomb, for use with 60 mm Long Range Mortar Launcher: MO-2", 
    image: "MU28-LAT A1.png" },

  { name: "MU28-LAT A2", 
    description: " 60 mm Long Range Practice A1 Reusable (6x) Mortar Bomb, for use with 60 mm Long Range Mortar Launcher: MO-2", 
    image: "MU28-LAT A2.png" },

  { name: "MU27-PE", 
    description: " 60 mm Commando High Explosive Mortar Bomb, for use with 60 mm Commando Mortar Launcher: MO-1 ", 
    image: "MU27-PE.png" },

  { name: "MU27-AS ", 
    description: " 60 mm Commando Smoke Mortar Bomb, for use with 60 mm Commando Mortar Launcher: MO-1", 
    image: "MU27-AS.png" },

  { name: "IPT-27", 
    description: " For use as increment charge for 60 mm Commando mortar bomb: MU27.", 
    image: "IPT-27.png" },

  { name: "IPT-28", 
    description: " For use as increment charge for 60 mm Long Range mortar bomb: MU28.", 
    image: "IPT-28.png" },

  { name: "IPP-27", 
    description: "For use as ignition cartridge for 60 mm Commando mortar bomb: MU27.", 
    image: "IPP-27.png" },

  { name: "IPP-28", 
    description: " For use as ignition cartridge for 60 mm Long Range mortar bomb: MU28.", 
    image: "IPP-28.png" },

  { name: "MU29-PE", 
    description: "81 mm High Explosive Mortar Bomb, for use with 81 mm Mortar Launcher: MO-3 ", 
    image: "MU29-PE.png" },

  { name: "MU29-AS", 
    description: " 81 mm Smoke Mortar Bomb, for use with 81 mm Mortar Launcher: MO-3", 
    image: "MU29-AS.png" },

  { name: "MU29-LAT A1", 
    description: " 81 mm Practice A1 Reusable (20x) Mortar Bomb, for use with 81 mm Mortar Launcher: MO-3 ", 
    image: "MU29-LAT A1.png" },

  { name: "MU29-LAT A2", 
    description: "81 mm Practice A2 Reusable (6x) Mortar Bomb, for use with 81 mm Mortar Launcher: MO-3", 
    image: "MU29-LAT A2.png" },

  { name: "IPT-29", 
    description: "For use as increment charge for 81 mm mortar bomb: MU29.", 
    image: "IPT-29.png" },

  { name: "IPP-29", 
    description: " For use as ignition cartridge for 81 mm mortar bomb: MU29.", 
    image: "IPP-29.png" },

  { name: "MU47-PE", 
    description: "105 mm Howitzer High Explosive ammunition, for use with 105 mm Artillery Gun: M101, M101A1, M102, LG1, and others with similar caliber. ", 
    image: "MU47-PE.png" },

  { name: "MU47-AS", 
    description: " 105 mm Howitzer Smoke ammunition, for use with 105 mm Artillery Gun: M101, M101A1, M102, LG1, and others with similar caliber.", 
    image: "MU47-AS.png" },

  { name: "MU19-BK", 
    description: " 12 Gauge Less-lethal Shotgun Shell with Rubber Balls, for use with 12 Gauge Shotgun: SG-1 and others with similar type of ammunition.", 
    image: "MU19-BK.png" },

  { name: "MU19-BT9", 
    description: " 12 Gauge Buckshot Shotgun Shell, for use with 12 Gauge Shotgun: SG-1 and others with similar type of ammunition.", 
    image: "MU19-BT9.png" },

  { name: "MU19-ICM", 
    description: " 12 Gauge Signal Shotgun Shell, for use with 12 Gauge Shotgun: SG-1 and others with similar type of ammunition.", 
    image: "MU19-ICM.png" },

  { name: "MU19-DB", 
    description: " 12 Gauge Slug Shotgun Shell with Brenneke Rifled Slug, for use with 12 Gauge Shotgun: SG-1 and others with similar type of ammunition.", 
    image: "MU19-DB.png" },
    
  { name: "MU48-H GOLD", 
    description: " 75 mm Blank Cartridge, for use with 75 mm Saluting Gun.", 
    image: "MU48-H GOLD.png" },

  { name: "MU47-H GOLD ", 
    description: " 105 mm Blank Cartridge, for use with 105 mm Saluting Gun.", 
    image: "MU47-H GOLD.png" },

  { name: "CTG22-AS ", 
    description: " 22 mm Smoke Cartridge, for use as main charge of 25 kg Smoke Practice Bomb.", 
    image: "CTG22-AS.png" },

  { name: "CTG30-AS ", 
    description: "30 mm Smoke Cartridge, for use as main charge of 250 kg Smoke Practice Bomb.", 
    image: "CTG30-AS.png" },

  { name: "GT6-AS", 
    description: " A throwable hand grenade which generates colored smoke.", 
    image: "GT6-AS.png" },

  { name: "GT5-FB LAT", 
    description: " A throwable practice hand grenade which generates extremely loud bang and blinding flash", 
    image: "GT5-FB LAT.png" },

  { name: "GT5-FB", 
    description: " A throwable hand grenade which generates extremely loud bang and blinding flash.", 
    image: "GT5-FB.png" },

  { name: "GL66-AS A3", 
    description: " 66 mm Smoke Grenade, for use with vehicle mounted 66 mm Smoke Grenade Launchers.", 
    image: "GL66-AS A3.png" },

  { name: "GT5-OFF", 
    description: " Throwable High Explosive Hand Grenade", 
    image: "GT5-OFF.png" },

  { name: "GT5-PE A2", 
    description: " Throwable High Explosive Hand Grenade with fragmentation ", 
    image: "GT5-PE A2.png" },

  { name: "MU10- ICH", 
    description: " 1” Signal Cartridge, for use with 1” (25.4 mm) Signal Pistol: PI and others with similar cartridge.", 
    image: "MU10- ICH.png" },

  { name: "MU10- ICM", 
    description: " 1” Signal Cartridge, for use with 1” (25.4 mm) Signal Pistol: PI and others with similar cartridge.", 
    image: "MU10- ICM.png" },

  { name: "MU10- ICP", 
    description: " 1” Signal Cartridge, for use with 1” (25.4 mm) Signal Pistol: PI and others with similar cartridge.", 
    image: "MU10- ICP.png" },

  { name: "MU10- ICO", 
    description: " 1” Signal Cartridge, for use with 1” (25.4 mm) Signal Pistol: PI and others with similar cartridge.", 
    image: "MU10- ICO.png" },

  { name: "MU24-AR", 
    description: " 38 mm Tear Gas Powder Cartridge, for use with 38 mm Smooth Barrel Non-Lethal Launcher: SAR-2 and others with similar caliber.", 
    image: "MU24-AR.png" },

  { name: "MU24-KT", 
    description: " 38 mm Rubber Shotshell Cartridge, for use with 38 mm Smooth Barrel Non-Lethal Launcher: SAR-2 and others with similar caliber.", 
    image: "MU24-KT.png" },

  { name: "MU24-BK", 
    description: " 38 mm Rubber Ball Cartridge, for use with 38 mm Smooth Barrel Non-Lethal Launcher: SAR-2 and others with similar caliber.", 
    image: "MU24-BK.png" },

  { name: "MU53-AR", 
    description: " 44 mm Tear Gas Powder Cartridge, for use with 44 mm Smooth Barrel Non-Lethal Launchers.", 
    image: "MU53-AR.png" },

  { name: "MU53-AR A1", 
    description: " 44 mm Tear Gas Smoke Cartridge, for use with 44 mm Smooth Barrel Non-Lethal Launchers", 
    image: "MU53-AR A1.png" },

  { name: "MU24-AR A1 ", 
    description: " 38 mm Tear Gas Smoke Cartridge, for use with 38 mm Smooth Barrel Non-Lethal Launcher: SAR-2 and others with similar caliber.", 
    image: "MU24-AR A1.png" },

  { name: "MU24-AR A2", 
    description: "37/38 mm Tear Gas Powder Cartridge, for use with 37/38 mm Smooth Barrel Non-Lethal Launchers.", 
    image: "MU24-AR A2.png" },

  { name: "MU24-AR A3", 
    description: "37/38 mm Tear Gas Smoke Cartridge, for use with 37/38 mm Smooth Barrel Non-Lethal Launchers", 
    image: "MU24-AR A3.png" },

  { name: "BLA-250", 
    description: " 250 kg MK82 Smoke Practice Bomb, for use with NATO Standard Aircraft.", 
    image: "BLA-250.png" },

  { name: "MK-81 LIVE", 
    description: "MK81 High Explosive Bomb, for use with NATO Standard Aircraft.", 
    image: "MK-81 LIVE.png" },

  { name: "R-HAN 122B", 
    description: " 122 mm Field Artillery Rocket, for use with 122 mm Multiple Launch Rocket Systems: RHAN-122B Launcher, BM-21 GRAD, RM-70 Vampire, and others with similar caliber.", 
    image: "R-HAN 122B.png" },

  { name: "DEMOLITION CHARGE TNT 60 GRAMS M1",
    image: "DEMOLITION CHARGETNT 60 GRAMS M1.png" },

  { name: "DEMOLITION CHARGE TNT 130 GRAMS M1",
    image: "DEMOLITION CHARGETNT 130 GRAMS M1.png" },

  { name: "DEMOLITION CHARGE TNT 225 GRAMS M1",
    image: "DEMOLITION CHARGETNT 225 GRAMS M1.png" },

  { name: "DEMOLITION CHARGE TNT 500 GRAMS M1 ", 
    image: "DEMOLITION CHARGETNT 500 GRAMS M1.png" },

  { name: "DETONATING CORD 5 GRAMS", 
    image: "DETONATING CORD 5 GRAMS.png" },

  { name: "DETONATING CORD 10 GRAMS", 
    image: "DETONATING CORD 10 GRAMS.png" },

  { name: "DETOL NO. 6D. 0 LW 1,8 M & 6 M", 
    image: "DETOL NO. 6D. 0 LW 1,8 M & 6 M.png" },

  { name: "DETOL NO. 8D. 0 LW 1,8 M & 6 M", 
    image: "DETOL NO. 8D. 0 LW 1,8 M & 6 M.png" },
    
  { name: "COSAT 1000", 
    description: " Cloud Seeding Agent Tube, for use with aircraft or Unmanned Aerial Vehicle to increase or decrease rainfall.", 
    image: "COSAT 1000.png" },
  ];
  
  const AmunisiPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    return (
      <section className="container mx-auto pt-20 py-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Amunisi</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amunisi.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              
              {/* Centering the image */}
              <div className="flex justify-center pt-4">
                <img
                  src={`/images/amunisi/${item.image}`}
                  alt={item.name}
                  className="w-82 h-32 object-cover rounded-md cursor-pointer"
                  onClick={() => setSelectedItem({ ...item, showImage: true })}
                />
              </div>
          
              <div className="p-3 sm:p-4 text-center">
                <h3 className="text-sm sm:text-base font-semibold">{item.name}</h3>
                <button
                  className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white text-sm sm:text-base rounded hover:bg-blue-700"
                  onClick={() => setSelectedItem({ ...item, showImage: false })}
                >
                  Desc
                </button>
              </div>
            </div>
          ))}
        </div>
  
  
        {/* Modal Gambar */}
        {selectedItem && selectedItem.showImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-xl w-full">
              <img
                src={`/images/amunisi/${selectedItem.image}`}
                alt={selectedItem.name}
                className="w-full h-auto rounded"
              />
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 block mx-auto"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
  
        {/* Modal Deskripsi */}
        {selectedItem && selectedItem.showImage === false && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{selectedItem.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{selectedItem.description}</p>
              <button
                className="mt-4 px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white text-sm sm:text-base rounded hover:bg-red-700"
                onClick={() => setSelectedItem(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    );
  };
  
  export default AmunisiPage;
  
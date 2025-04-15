import { useState } from "react";

const senjata = [
  { name: "SS3-M1 10.5", 
    description: "5,56 mm gas operated assault rifle for Law Enforcement and Military use specifically designed and tuned to operate even on the harshest condition. Suitable for Designated Marksman Rifle (DMR) roles within a combat unit.", 
    image: "SS3-M1 10.5.png" },

  { name: "SS3-M1 14.5", 
    description: "5,56 mm gas operated carbine for Military and Law Enforcement use conditions. WEAPONSspecifically designed and tuned to operate even on the most challenging", 
    image: "SS3-M1 14.5.png" },

  { name: "SS3-M1 16", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use conditions.  specifically designed and tuned to operate even on the most challenging challenging conditions.", 
    image: "SS3-M1 16.png" },

  { name: "SS3-M1 20", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use specifically designed and tuned to operate even on the most challenging conditions. Suitable for DMR role within a combat unit ", 
    image: "SS3-M1 20.png" },

  { name: "SS2-V1", 
    description: "5,56 mm gas operated assault rifle for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions.", 
    image: "SS2-V1.png" },

  { name: "SS2-V1 A1", 
    description: " 5,56 mm gas operated assault rifle for Military and Law Enforcement use tested and qualified on the most demanding battlefield conditions. Additional picatinny rail and adjustable buttstock provide better modularity and ergonomy ", 
    image: "SS2-V1 A1.png" },

  { name: "SS2-V1 HB", 
    description: "5,56 mm gas operated assault rifle with Heavy Barrel for excellent accuracy and precision.", 
    image: "SS2-V1 HB.png" },

  { name: "SS2-V2", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use, tested, and qualified on the most demanding battlefield conditions.", 
    image: "SS2-V2.png" },

  { name: "SS3-M1 16", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use, tested, and qualified on the most demanding battlefield conditions.", 
    image: "SS3-M1 16.png" },

  { name: "SS2-V2 A1", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions. Additional picatinny rail and adjustable buttstock provide better modularity and ergonomy.", 
    image: "SS2-V2 A1.png" },

  { name: "SS2-V2 A2", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions. Additional picatinny rail and adjustable buttstock provide better modularity and ergonomy.", 
    image: "SS2-V2 A2.png" },

  { name: "SS2-V2 HB", 
    description: " 5,56 mm gas operated carbine with Heavy Barrel for excellent accuracy and precision.", 
    image: "SS2-V2 HB.png" },

  { name: "SS2-V4", 
    description: " 5,56 mm gas operated assault rifle for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions. Suitable for DMR role within a combat unit.", 
    image: "SS2-V4.png" },

  { name: "SS2-V4 HB", 
    description: " 5,56 mm gas operated assault rifle with Heavy Barrel for excellent accuracy and precision.", 
    image: "SS2-V4 HB.png" },

  { name: "SS2-V4 A1", 
    description: " 5,56 mm gas operated assault rifle for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions. Additional picatinny rail and adjustable buttstock provide better modularity and ergonomy. ", 
    image: "SS2-V4 A1.png" },

  { name: "SS2-V4 A2", 
    description: " 5,56 mm gas operated carbine for Military and Law Enforcement use, tested and qualified on the most demanding battlefield conditions. Additional MLOK rail and adjustable buttstock provide advanced modularity and ergonomy.", 
    image: "SS2-V4 A2.png" },

  { name: "SS2-V5", 
    description: "5,56 mm gas operated short-barreled assault rifle for Military and Law Enforcement use tested and qualified on the most demanding battlefield conditions. Suitable for armoured vehicle and artillery crews.", 
    image: "SS2-V5.png" },

  { name: "SS2-V5 A1", 
    description: " 5,56 mm gas operated short-barreled assault rifle for Military and Law Enforcement use tested and qualified on the most demanding battlefield conditions. Suitable for close quarter battle scenarios.", 
    image: "SS2-V5 A1.png" },

  { name: "SS AMPHIBIOUS", 
    description: " 5,56 mm gas operated amphibious assault rifle for amphibious operations. The rifle can be operated seamlessly between land and underwater operations simply by changing the magazine loaded with underwater ammunition and switching the gas lever to underwater setting. ", 
    image: "SS AMPHIBIOUS.png" },

  { name: "SS DOPPER", 
    description: " 7,62 mm gas operated battle rifle for military training. The rifle, when used with special Dopper ammunition, provides loud sound while maintaining safety (no ricochet) when fired to the soil.", 
    image: "SS DOPPER.png" },

  { name: "SS BLACKOUT-V1", 
    description: " .300 Blackout gas operated assault rifle for Military and Law Enforcement use, designed based on the successful SS2 platform. Additional MLOK rail and adjustable buttstock provide advanced modularity and ergonomy.", 
    image: "SS BLACKOUT-V1.png" },

  { name: "SS BLACKOUT-V2", 
    description: "300 Blackout gas operated short-barreled assault rifle for Military and Law Enforcement use designed based on the successful SS2 platform. Additional MLOK rail and adjustable buttstock provide advanced modularity and ergonomy. ", 
    image: "SS BLACKOUT-V2.png" },

  { name: "SS BLACKOUT-V3", 
    description: "300 Blackout gas operated short-barreled assault rifle for Military and Law Enforcement use designed based on the successful SS2 platform. Additional MLOK rail and adjustable buttstock provide advanced modularity and ergonomy. ", 
    image: "SS BLACKOUT-V3.png" },

  { name: "G2 COMBAT", 
    description: "9 mm pistol suitable for standard service-use by military and Law Enforcements", 
    image: "G2 COMBAT.png" },

  { name: "PISTOL G2 COMBAT A1", 
    description: " 9 mm pistol suitable for tactical-use by military and Law Enforcements.", 
    image: "PISTOL G2 COMBAT A1.png" },

  { name: "G2 ELITE", 
    description: " 9 mm pistol suitable for standard service-use by military and Law Enforcements.", 
    image: "G2 ELITE.png" },

  { name: "G2 PREMIUM", 
    description: " 9 mm pistol crafted to win shooting competitions.", 
    image: "G2 PREMIUM.png" },

  { name: "MAG-4", 
    description: " 9 mm pistol with 4 inch barrel designed for Military and Law Enforcements use.", 
    image: "MAG-4.png" },

  { name: "P3A", 
    description: " 7,65 x 17 mm (.32 ACP) pistol designed for self defence.", 
    image: "P3A.png" },

  { name: "FIRST DEFENCE", 
    description: " 9 x 21 mm pistol based on 1911 platform, designed for concealed carry and self-defence.", 
    image: "FIRST DEFENCE.png" },

  { name: "ARMO V1", 
    description: " 9 mm polymer-framed pistol designed for Military and Law Enforcement use.", 
    image: "ARMO V1.png" },

  { name: "ARMO V2", 
    description: " 9 mm polymer-framed pistol designed for Military and Law Enforcement use.", 
    image: "ARMO V2.png" },

  { name: "ARMO V3 IPSC", 
    description: " 9 mm polymer-framed pistol specially built and tuned for shooting competitions..", 
    image: "ARMO V3 IPSC.png" },

  { name: "ARMO V4", 
    description: " 9 mm polymer-framed, stiker-fired pistol designed for Military and Law Enforcement use.", 
    image: "ARMO V4.png" },

  { name: "PM3", 
    description: " A high-performance gas operated 9 mm submachine gun for Military and Law Enforcement use ", 
    image: "PM3.png" },

  { name: "PM3-V3", 
    description: " 9 mm Pistol Caliber Carbine designed to win shooting competitions", 
    image: "PM3-V3.png" },

  { name: "SB2-V5 A1", 
    description: "  A gas operated .222 CQB rifle for Special Law Enforcement Units.", 
    image: "SB2-V5 A1.png" },

  { name: "SPM-1", 
    description: " 5.56 mm gas operated rifle for Military use specifically designed and tuned for Designated Marksman Rifle (DMR) role with advanced modularity and ergonomy. Based on the successful SS2 platform, tested and qualified on the most demanding battlefield conditions.  ", 
    image: "SPM-1.png" },

  { name: "SPM-2", 
    description: " 7.62 mm gas operated rifle for Military use specifically designed and tuned for Designated Marksman Rifle (DMR) role with advanced modularity and ergonomy. Based on the new platform created by PT Pindad. ", 
    image: "SPM-2.png" },

  { name: " SPR-2 ", 
    description: " 12,7 mm/.50 BMG bolt-action precision rifle for Military use, specifically designed for long-range target engagement. Tuned by PT Pindad to achieve superior accuracy using special 12.7 mm/.50 BMG  ammunition manufactured by PT Pindad including HEI-AP, LRSA, and Sniper Anti Material.", 
    image: "SPR-2.png" },

  { name: " SPR-3 ", 
    description: " 7,62 mm/.308 WIN bolt-action precision rifle for Military use, specifically designed for long-range target engagement. Tuned by PT Pindad to achieve superior accuracy using special 7.62 mm/.308 WIN  ammunition manufactured by PT Pindad including Sniper, Match, and Match King", 
    image: "SPR-3.png" },

  { name: " SPR-4 ", 
    description: ".338 LM bolt-action precision rifle for Military use, specifically designed for long-range target engagement. Tuned by PT Pindad to achieve superior accuracy using special .338 LM ammunition manufactured by PT Pindad.", 
    image: "SPR-4.png" },

  { name: " SM2-V1 ", 
    description: " 7,62 mm General Purpose Machine Gun for Military use designed for sustained fire by infantry units.", 
    image: "SM2-V1.png" },

  { name: " SM2-V2 ", 
    description: "7,62 mm General Purpose Machine Gun for Military use designed for sustained fire from military vehicles.", 
    image: "SM2-V2.png" },

  { name: " SM3 ", 
    description: " 5,56 mm Light Machine Gun/Squad Automatic Weapon for Military use designed for sustained fire by infantry units.", 
    image: "SM3.png" },

  { name: " SM3-A1 ", 
    description: " 5,56 mm Light Machine Gun/Squad Automatic Weapon for Military use designed for sustained fire by infantry units with additional features WEAPONS including adjustable buttstock and the ability to feed from NATO 30 round magazine.", 
    image: "SM3-A1.png" },

  { name: " SM5 ", 
    description: " gas operated 12,7 mm/.50 BMG Heavy Machine Gun for Military use designed for sustained fire from various platforms: military vehicles, military vessels, or infantry use with tripod.", 
    image: "SM5.png" },

  { name: " SM5-A1 ", 
    description: " blowback 12,7 mm/.50 BMG Heavy Machine Gun for Military use designed for sustained fire from various platforms: military vehicles, military vessels,  or infantry use with tripod.", 
    image: "SM5-A1.png" },

  { name: " SAR-2 ", 
    description: " 38 mm non-lethal launcher for Law Enforcement use designed to fire various 38 mm cartridges including tear gas, smoke, and rubber balls", 
    image: "SAR-2.png" },

  { name: " SPG1A-V2 ", 
    description: "40 mm grenade launcher for Military use designed to fire various 40 mm Low Velocity Grenades including High Explosive and Smoke. Attachable to SS1 Assault Rifle", 
    image: "SPG1A-V2.png" },

  { name: " SPG1A-V3 ", 
    description: "40 mm grenade launcher for Military use designed to fire various 40 mm Low Velocity Grenades including High Explosive and Smoke. Attachable to SS2-V5 Short-Barreled Assault Rifle.", 
    image: "SPG1A-V3.png" },

  { name: " SPG1A-V4 ", 
    description: "40 mm grenade launcher for Military use designed to fire various 40 mm Low Velocity Grenades including High Explosive and Smoke. Attachable to SS2-V4 Assault Rifle.", 
    image: "SPG1A-V4.png" },

  { name: " SPS-1 ANTI DRONE ", 
    description: " A man-portable handheld Anti Drone System with Soft Kill and Hard Kill capability. Able to neutralize enemy drones from 100 m range using Hard Kill feature.", 
    image: "SPS-1 ANTI DRONE.png" },

  { name: "MOBILE JAMMER SECTORIAL MOBILE JAMMER", 
    description: " An integrated Mobile Anti Drone System with Soft Kill and Hard Kill capability. Able to neutralize enemy drones within 3 km radius using Soft Kill feature.", 
    image: "MOBILE JAMMER SECTORIAL MOBILEJAMMER.png" },

  { name: " Mo-1 ", 
    description: " 60 mm Commando Mortar Launcher for Military use designed for attacking short range enemy positions.", 
    image: "Mo-1.png" },

  { name: " Mo-2 ", 
    description: "60 mm Long Range Mortar Launcher for Military use designed for attacking long range enemy positions.", 
    image: "Mo-2.png" },

  { name: " Mo-3 ", 
    description: " 81 mm Mortar Launcher for Military use designed for attacking long range enemy positions. ", 
    image: "Mo-3.png" },

  { name: " SHIELD REMOTE CONTROLLED WEAPON STATION (RCWS) ", 
    description: " A modular Remote Controlled Weapon Station designed to provide firepower as well as protection to vehicle crew members. Able to use 7,62 mm and 12,7 mm using single cradle. Equipped with day and thermal camera with long Detection, Recognition, and Identification range as well as target locking and tracking features.", 
    image: "SHIELD REMOTE CONTROLLED WEAPON STATION (RCWS).png" },
];
  
const SenjataPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="container mx-auto pt-20 py-10 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Senjata</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {senjata.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            
            {/* Centering the image */}
            <div className="flex justify-center pt-4">
              <img
                src={`/images/senjata/${item.image}`}
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
              src={`/images/senjata/${selectedItem.image}`}
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

export default SenjataPage;
  
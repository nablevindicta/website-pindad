import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const kendaraanKhusus = [
    { name: "MAUNG V3 SPARTAN", 
      description: "An ultra-light tactical vehicle designed to carry 4 personnel through the most challenging terrain possible. Suitable for operational and tactical purpose", 
      image: "MAUNG V3 SPARTAN.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "100 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "500 km",
         CombatWeight: "3 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "5 x 2 x 1,8 m",
         Power: "199 HP",
         Torque: "411 Nm",
         Transmission: "Automatic",
         Equipments: "Electric winch, A/C, spare wheel",
      },
    },

    { name: "MAUNG V3 SOFT TOP (CRUISER)", 
      description: "An ultra-light tactical vehicle designed to carry 4 personnel through the most challenging terrain. Equipped with a detachable roof. ", 
      image: "MAUNG V3 SOFT TOP (CRUISER).png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "100 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "500 km",
         CombatWeight: "3 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "5 x 2 x 1,8 m",
         Power: "199 HP",
         Torque: "411 Nm",
         Transmission: "Automatic",
         Equipments: "Electric winch, A/C, spare wheel",
      },
    },

    { name: "MAUNG V3 HARD TOP (COMMAND)", 
      description: " An ultra-light tactical vehicle with hard top, designed to operate as a squad commander vehicle. ", 
      image: "MAUNG V3 HARD TOP (COMMAND).png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "100 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "500 km",
         CombatWeight: "3 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "5 x 2 x 1,8 m",
         Power: "199 HP",
         Torque: "411 Nm",
         Transmission: "Automatic",
         Equipments: "Electric winch, A/C, spare wheel",
      },
    },

    { name: "MAUNG V1 4X4", 
      description: " An ultra-light tactical vehicle designed to carry 4 personnel through the extreme off road condition. Suitable for operational and tactical purposes.", 
      image: "MAUNG V1 4X4.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "120 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "3 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "5,2 x 2,1 x 2 m",
         Power: "184 HP",
         Torque: "420 Nm",
         Transmission: "Automatic",
         Equipments: "Electric winch, A/C, spare wheel",
      },
    },

    { name: "KOMODO 4X4 APC", 
      description: " 4x4 tactical vehicle designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level I standard armour and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "KOMODO 4X4 APC.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "450 km",
         CombatWeight: "9,5 ton",
         PersonnelCapacity: "12 personnel",
         Dimension: "6 x 2,3 x 2,5 m",
         Power: "236 HP",
         Torque: "725 Nm",
         Transmission: "Manual",
         Equipments: "RCWS, smoke grenade launcher, thermal camera, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: "KOMODO 4X4 RECONNAISSANCE", 
      description: " 4x4 tactical vehicle designed to perform 4-personnel surveillance and recon naissance missions. Equipped with STANAG Level I standard armour and mac hi ne gun mount on top of the vehicle. The vehicle can be equipped with Remote Controlled Weapon Station as an option to engage enemy threat without potentially endangering the gunner.", 
      image: "KOMODO 4X4 RECONNAISSANCE.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "500 km",
         CombatWeight: "8 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "5,5 x 2,3 x 2,2 m",
         Power: "215 HP",
         Torque: "800 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, smoke grenade launcher, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: "KOMODO 4X4 MISSILE LAUNCHER", 
      description: "4x4 tactical vehicle designed to carry and launch Surface-to-Air Missile to neutralize enemy aircrafts, helicopters, and UAVs. Equipped with STANAG Level I standard armour and equipments storage on the back of the vehicle. ", 
      image: "KOMODO 4X4 MISSILELAUNCHER.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "450 km",
         CombatWeight: "9 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "6,3 x 2,2 x 3,6 m",
         Power: "206 HP",
         Transmission: "Manual",
         Equipments: "Missile storage, missile launcher, electric winch, A/C, communication radio",
      },
    },

    { name: "KOMODO 4X4 BATTERING RAM", 
      description: " 4x4 tactical vehicle designed for Special Police Units. Equipped with STANAG Level I standard armour, machine gun mount, tactical ladder, and a bullbar on the front end of the vehicle to ram through doors, concrete walls, fences, or any obstacle which may get the in the way to accomplish a mission. ", 
      image: "KOMODO 4X4 BATTERING RAM.png",
      spesifications: {
         Configuration: "4x4",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "450 km",
         CombatWeight: "9,5 ton",
         PersonnelCapacity: "10 personnel",
         Dimension: "5,9 x 2,3 x 2,5 m",
         Power: "215 HP",
         Transmission: "Manual",
         Equipments: "Portable ladder, bumper, smoke grenade launcher, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: "ANOA 2 6X6 APC", 
      description: " 6x6 Armoured Personnel Carrier designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level I standard armour (upgradable to Level III) and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 APC.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "12 personnel",
         Dimension: "6 x 2,5 x 2,2 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, Smoke grenade launcher, thermal camera, electric winch, ramp door,A/C, battlefield management system, communication radio.",
      },
    },

    { name: "ANOA 2 6X6 COMMAND AND CONTROL", 
      description: " 6x6 combat vehicle designed as a command and control center during military operations. Equipped with STANAG Level I standard armour (upgradable to Level III) and optional Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 COMMAND AND CONTROL.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "7 Personnel",
         Dimension: "6 x 2,5 x 2,6 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, map & work table, smoke grenade launcher, thermal camera, electric winch, A/C, battlefield management system, communication radio.",
      },
    },

    { name: " ANOA 2 6X6 MORTAR LAUNCHER", 
      description: "6x6 combat vehicle designed to carry and fire 81 mm mortar launcher from inside of the vehicle. Equipped with STANAG Level I standard armour (upgradable to Level III).", 
      image: "ANOA 2 6X6 MORTAR LAUNCHER.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "4 personnel",
         Dimension: "6 x 2,5 x 2,3 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         MortarLauncher: "81 mm",
         Equipments: "Smoke grenade launcher, thermal camera, electric winch, battlefield management system, communication radio, hydraulic operated roof",
      },
    },

    { name: "ANOA 2 6X6 RECOVERY", 
      description: " 6x6 combat vehicle designed to perform recovery of other vehicles. Equipped with STANAG Level I standard armour (upgradable to Level III). ", 
      image: "ANOA 2 6X6 RECOVERY.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "5 personnel",
         Dimension: "6 x 2,5 x 2,6 m",
         Power: "320 HP",
         Torque: "320 HP",
         Transmission: "Automatic",
         Equipments: "Hydraulic jack stand, 6 ton electric winch, 15 ton hydraulic winch, 6 ton crane, thermal camera, A/C, battlefield management system, communication radio.",
      },
    },

    { name: "ANOA 2 6X6 AMBULANCE", 
      description: " 6x6 combat vehicle designed to evacuate wounded personnel to safety while providing first aid. Equipped with STANAG Level I standard armour (upgradable to Level III) and field medical equipments.", 
      image: "ANOA 2 6X6 AMBULANCE.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "7 personnel + 2 patients",
         Dimension: "6 x 2,5 x 2,6 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "Oxygen cylinder, respirator, first aid kit, medical pack, resuscitation kit, defibrillator, thermal camera, electric winch, A/C.",
      },
    },

    { name: " ANOA 2 6X6 FUEL CARRIER", 
      description: " 6x6 combat vehicle designed to safely transport fuel as part of logistic support to combat vehicles at the frontline. Equipped with STANAG Level I standard armour (upgradable to Level III) and 1600 liter fuel storage.", 
      image: "ANOA 2 6X6 FUEL CARRIER.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "2 personnel",
         Dimension: "6 x 2,5 x 2,4 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, 1600 liter fuel storage, pumps for fuel filling, smoke grenade launcher, thermal camera, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: " ANOA 2 6X6 AMMUNITION CARRIER", 
      description: " 6x6 combat vehicle designed to safely transport ammunition as part of logistic support to combat vehicles at the frontline. Equipped with STANAG Level I standard armour (upgradable to Level III) and ammunition storage.", 
      image: "ANOA 2 6X6 AMMUNITION CARRIER.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,5 ton",
         PersonnelCapacity: "2 personnel",
         Dimension: "6 x 2,5 x 2,4 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, ammunition storage, smoke grenade launcher, thermal camera, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: "ANOA 2 6X6 AMPHIBIOUS", 
      description: " 6x6 combat vehicle designed to perform coastal landing and lake/river crossing operations. Equipped with STANAG Level I standard armour (upgradable to Level III) and optional Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 AMPHIBIOUS.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         MaxSpeedWater: "10 km/h",
         Amphibious: "Sea state level 1",
         Gradient: "60 %",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "14,2 ton",
         Dimension: "7,6 x 2,5 x 2,7 m",
         Power: "320 HP",
         Torque: "1.200 Nm",
         Transmission: "Automatic",
         Equipments: "RCWS, ramp door, smoke grenade launcher, bilge pump, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: "BADAK 6X6 CANNON 90 MM", 
      description: " 6x6 combat vehicle designed to provide fire support during military operations. Equipped with STANAG Level III standard armour and 90 mm Low Pressure Turret for maximum firepower.", 
      image: "BADAK 6X6 CANNON 90 MM.png",
      spesifications: {
         Configuration: "6x6",
         MaxSpeed: "80 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "600 km",
         CombatWeight: "17 ton",
         PersonnelCapacity: "3 personnel",
         Dimension: "5,8 x 2,8 x 2,8 m",
         Power: "340 HP",
         Torque: "1.300 Nm",
         Transmission: "Automatic",
         WeaponSystem: "90 mm turret",
         BallisticProtection: "STANAG 4569 Level 3",
         Equipments: "laser warning system, auxiliary power unit, smoke grenade launcher, electric winch, A/C, battlefield management system, communication radio",
      },
    },

    { name: " HARIMAU MEDIUM TANK", 
      description: "medium weight tracked military vehicle designed to perform direct attack to enemy positions during operations. Equipped with STANAG Level III standard armour and 105 mm Turret with the ability to fire various kind of rounds including APFSDS-T to penetrate against enemy vehicles’ armour. ", 
      image: "HARIMAU MEDIUM TANK.png",
      spesifications: {
         Configuration: "Tracked vehicle",
         MaxSpeed: "70 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "400 km",
         CombatWeight: "31,5 ton",
         PersonnelCapacity: "3 personnel",
         Dimension: "7 x 3,2 x 2,9 m",
         Power: "711 HP",
         Torque: "2.714 Nm",
         Transmission: "Automatic",
         TurningRadius: "Pivot",
         Cannon: "105 mm",
         BallisticProtection: "STANAG 4569 Level 3",
         MineBlastprotection : "STANAG 4569 Level 4a and 3b",
         Equipments: "laser warning system, smoke grenade launcher, gunshot detection, thermal camera, A/C, NBC protection equipment, battlefield management system, communication radio",
      },
    },

    { name: "HARIMAU APC", 
      description: "medium weight tracked military vehicle designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level III standard armour and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "HARIMAU APC.png",
      spesifications: {
         Configuration: "Tracked vehicle",
         MaxSpeed: "74 km/h",
         Gradient: "60%",
         SideSlope: "30%",
         CruisingRange: "450 km",
         CombatWeight: "29 ton",
         PersonnelCapacity: "13 personnel",
         Dimension: "7,2 x 3,2 x 2,5 m",
         Power: "711 HP",
         Torque: "2.714 Nm",
         Transmission: "Automatic",
         TurningRadius: "Pivot",
         BallisticProtection: "STANAG 4569 Level 3",
         MineBlastprotection : "STANAG 4569 Level 4a and 3b",
         Equipments: "RCWS, laser warning system, gunshot detection, smoke grenade launcher, thermal camera, A/C, NBC protection equipment, battlefield management system, communication radio",
      },
    },
  ];
  
  const KendaraanKhususPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const navigate = useNavigate();
  
    return (
      <section className="container mx-auto pt-20 py-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Special Vehicle</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kendaraanKhusus.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              
              {/* Centering the image */}
              <div className="flex justify-center pt-4">
                <img
                  src={`/images/kendaraan/${item.image}`}
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
                 {/* Tombol Spesifikasi */}
                <button
                  className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-green-500 text-white text-sm sm:text-base rounded hover:bg-green-700"
                  onClick={() => navigate(`/kendaraan/${encodeURIComponent(item.name)}`)}
                >
                Spesifikasi
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
                src={`/images/kendaraan/${selectedItem.image}`}
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
  
  export { kendaraanKhusus };
  export default KendaraanKhususPage;
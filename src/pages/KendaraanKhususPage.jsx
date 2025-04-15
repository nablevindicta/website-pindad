import { useState } from "react";

const kendaraanKhusus = [
    { name: "MAUNG V3 SPARTAN", 
      description: "An ultra-light tactical vehicle designed to carry 4 personnel through the most challenging terrain possible. Suitable for operational and tactical purpose", 
      image: "MAUNG V3 SPARTAN.png" },

    { name: "MAUNG V3 SOFT TOP (CRUISER)", 
      description: "An ultra-light tactical vehicle designed to carry 4 personnel through the most challenging terrain. Equipped with a detachable roof. ", 
      image: "MAUNG V3 SOFT TOP (CRUISER).png" },

    { name: "MAUNG V3 HARD TOP (COMMAND)", 
      description: " An ultra-light tactical vehicle with hard top, designed to operate as a squad commander vehicle. ", 
      image: "MAUNG V3 HARD TOP (COMMAND).png" },

    { name: "MAUNG V1 4X4", 
      description: " An ultra-light tactical vehicle designed to carry 4 personnel through the extreme off road condition. Suitable for operational and tactical purposes.", 
      image: "MAUNG V1 4X4.png" },

    { name: "KOMODO 4X4 APC", 
      description: " 4x4 tactical vehicle designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level I standard armour and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "KOMODO 4X4 APC.png" },

    { name: "KOMODO 4X4 RECONNAISSANCE", 
      description: " 4x4 tactical vehicle designed to perform 4-personnel surveillance and recon naissance missions. Equipped with STANAG Level I standard armour and mac hi ne gun mount on top of the vehicle. The vehicle can be equipped with Remote Controlled Weapon Station as an option to engage enemy threat without potentially endangering the gunner.", 
      image: "KOMODO 4X4 RECONNAISSANCE.png" },

    { name: "KOMODO 4X4 MISSILE LAUNCHER", 
      description: "4x4 tactical vehicle designed to carry and launch Surface-to-Air Missile to neutralize enemy aircrafts, helicopters, and UAVs. Equipped with STANAG Level I standard armour and equipments storage on the back of the vehicle. ", 
      image: "KOMODO 4X4 MISSILELAUNCHER.png" },

    { name: "KOMODO 4X4 BATTERING RAM", 
      description: " 4x4 tactical vehicle designed for Special Police Units. Equipped with STANAG Level I standard armour, machine gun mount, tactical ladder, and a bullbar on the front end of the vehicle to ram through doors, concrete walls, fences, or any obstacle which may get the in the way to accomplish a mission. ", 
      image: "KOMODO 4X4 BATTERING RAM.png" },

    { name: "ANOA 2 6X6 APC", 
      description: " 6x6 Armoured Personnel Carrier designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level I standard armour (upgradable to Level III) and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 APC.png" },

    { name: "ANOA 2 6X6 COMMAND AND CONTROL", 
      description: " 6x6 combat vehicle designed as a command and control center during military operations. Equipped with STANAG Level I standard armour (upgradable to Level III) and optional Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 COMMAND AND CONTROL.png" },

    { name: " ANOA 2 6X6 MORTAR LAUNCHER", 
      description: "6x6 combat vehicle designed to carry and fire 81 mm mortar launcher from inside of the vehicle. Equipped with STANAG Level I standard armour (upgradable to Level III).", 
      image: "ANOA 2 6X6 MORTAR LAUNCHER.png" },

    { name: "ANOA 2 6X6 RECOVERY", 
      description: " 6x6 combat vehicle designed to perform recovery of other vehicles. Equipped with STANAG Level I standard armour (upgradable to Level III). ", 
      image: "ANOA 2 6X6 RECOVERY.png" },

    { name: "ANOA 2 6X6 AMBULANCE", 
      description: " 6x6 combat vehicle designed to evacuate wounded personnel to safety while providing first aid. Equipped with STANAG Level I standard armour (upgradable to Level III) and field medical equipments.", 
      image: "ANOA 2 6X6 AMBULANCE.png" },

    { name: " ANOA 2 6X6 FUEL CARRIER", 
      description: " 6x6 combat vehicle designed to safely transport fuel as part of logistic support to combat vehicles at the frontline. Equipped with STANAG Level I standard armour (upgradable to Level III) and 1600 liter fuel storage.", 
      image: "ANOA 2 6X6 FUEL CARRIER.png" },

    { name: " ANOA 2 6X6 AMMUNITION CARRIER", 
      description: " 6x6 combat vehicle designed to safely transport ammunition as part of logistic support to combat vehicles at the frontline. Equipped with STANAG Level I standard armour (upgradable to Level III) and ammunition storage.", 
      image: "ANOA 2 6X6 AMMUNITION CARRIER.png" },

    { name: "ANOA 2 6X6 AMPHIBIOUS", 
      description: " 6x6 combat vehicle designed to perform coastal landing and lake/river crossing operations. Equipped with STANAG Level I standard armour (upgradable to Level III) and optional Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "ANOA 2 6X6 AMPHIBIOUS.png" },

    { name: "BADAK 6X6 CANNON 90 MM", 
      description: " 6x6 combat vehicle designed to provide fire support during military operations. Equipped with STANAG Level III standard armour and 90 mm Low Pressure Turret for maximum firepower.", 
      image: "BADAK 6X6 CANNON 90 MM.png" },

    { name: " HARIMAU MEDIUM TANK", 
      description: "medium weight tracked military vehicle designed to perform direct attack to enemy positions during operations. Equipped with STANAG Level III standard armour and 105 mm Turret with the ability to fire various kind of rounds including APFSDS-T to penetrate against enemy vehicles’ armour. ", 
      image: "HARIMAU MEDIUM TANK.png" },

    { name: "HARIMAU APC", 
      description: "medium weight tracked military vehicle designed to safely transport infantry personnel from point A to B. Equipped with STANAG Level III standard armour and a Remote Controlled Weapon Station to engage enemy threat without potentially endangering the gunner. ", 
      image: "HARIMAU APC.png" },
  ];
  
  const KendaraanKhususPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
  
    return (
      <section className="container mx-auto pt-20 py-10 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Kendaraan Khusus</h2>
  
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
  
  export default KendaraanKhususPage;
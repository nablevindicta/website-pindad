// SpesifikasiSenjata.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { senjata } from './SenjataPage'; // Sesuaikan path jika diperlukan

const SpesifikasiSenjata = () => {
  const { name } = useParams();
  const weapon = senjata.find((item) => item.name.trim() === name.trim());

  if (!weapon) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Data senjata tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-bold text-center mb-6">{weapon.name}</h2>

      {/* Gambar Senjata */}
      <div className="flex justify-center mb-6">
        <img
          src={`/images/senjata/${weapon.image}`}
          alt={weapon.name}
          className="w-full max-w-md rounded shadow"
        />
      </div>

      {/* Deskripsi Senjata */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-8">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">DESCRIPTION</h3>
        <p className="text-gray-700 mb-6">{weapon.description}</p>

        {/* Tabel Spesifikasi */}
        <h3 className="text-lg font-semibold text-blue-700 mb-2">SPECIFICATIONS</h3>
        <table className="w-full text-sm text-left border-collapse">
          <tbody>
            {Object.entries(weapon.specifications).map(([key, value], index) => (
              <tr key={index} className="border-t">
                <td className="py-2 font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </td>
                <td className="py-2">{value || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SpesifikasiSenjata;
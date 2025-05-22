// SpesifikasiAmunisi.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { amunisi } from './AmunisiPage'; // Sesuaikan path jika perlu

const SpesifikasiAmunisi = () => {
  const { name } = useParams();
  const selectedAmmunition = amunisi.find(item => item.name.trim() === name.trim());

  if (!selectedAmmunition) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">Data amunisi tidak ditemukan.</p>
      </div>
    );
  }

  // Fungsi untuk render spesifikasi secara rekursif
  const renderSpecifications = (specs, level = 0) => {
    return Object.entries(specs).map(([key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        return (
          <React.Fragment key={key}>
            <tr>
              <td colSpan="2" className="font-semibold pt-4 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </td>
            </tr>
            {renderSpecifications(value, level + 1)}
          </React.Fragment>
        );
      }
      return (
        <tr key={key} className="border-t">
          <td className="py-2 font-medium capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}:
          </td>
          <td className="py-2">{value}</td>
        </tr>
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-bold text-center mb-6">{selectedAmmunition.name}</h2>

      {/* Gambar Amunisi */}
      <div className="flex justify-center mb-6">
        <img
          src={`/images/amunisi/${selectedAmmunition.image}`}
          alt={selectedAmmunition.name}
          className="w-82 h-32 object-cover rounded-md"
        />
      </div>

      {/* Deskripsi Amunisi */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">DESCRIPTION</h3>
        <p className="text-sm text-gray-700 mb-6">{selectedAmmunition.description || '-'}</p>

        <h3 className="text-lg font-semibold text-blue-700 mb-2">SPECIFICATIONS</h3>
        <table className="w-full text-left text-sm">
          <tbody>{renderSpecifications(selectedAmmunition.specifications)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default SpesifikasiAmunisi;
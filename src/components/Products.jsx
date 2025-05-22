import { Link } from "react-router-dom";

const categories = [
  { id: "weapons", name: "Weapon", image: "/images/senjata/SS3-M1 10.5.png", path: "/products/weapons" },
  { id: "ammunition", name: "Ammunition", image: "/images/amunisi/MU42-TJ.png", path: "/products/ammunition" },
  { id: "vehicles", name: "Special Vehicle", image: "/images/kendaraan/MAUNG V3 SPARTAN.png", path: "/products/vehicles" },
];

const Products = () => {
  return (
    <section className="container mx-auto pt-20 py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>

      {/* Kategori Produk */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex justify-center pt-4">
            <img src={category.image} alt={category.name} className="w-82 h-32 object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold">{category.name}</h3>
              <Link to={category.path}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

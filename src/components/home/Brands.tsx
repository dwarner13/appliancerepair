export default function Brands() {
  const brands = [
    'Samsung', 'LG', 'Whirlpool', 'GE', 'Maytag', 'Kenmore', 
    'Frigidaire', 'KitchenAid', 'Bosch', 'Electrolux'
  ];

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Brands We Service
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Expert repair service for all major appliance brands
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none">
          {brands.map((brand) => (
            <div key={brand} className="text-center">
              <p className="text-lg font-semibold text-gray-900">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function Benefits() {
  const benefits = [
    {
      title: 'Licensed & Insured',
      description: 'Our technicians are fully licensed and insured, providing you with peace of mind and professional service.'
    },
    {
      title: 'Same-Day Service',
      description: 'Emergency repairs and same-day service available throughout Edmonton and surrounding areas.'
    },
    {
      title: '90-Day Warranty',
      description: 'All repairs come with a 90-day warranty on parts and labor for your complete satisfaction.'
    },
    {
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees. We provide upfront quotes before starting any repair.'
    }
  ];

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
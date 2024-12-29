import { Link } from 'react-router-dom';
import { Image, images } from '../Images';

const services = [
  {
    title: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator brands including Samsung, LG, Whirlpool, and GE. We fix cooling issues, ice maker problems, water leaks, and strange noises.',
    image: images.refrigerator,
    link: '/services#refrigerator'
  },
  {
    title: 'Washer & Dryer Repair',
    description: 'Professional washer and dryer repairs. We service all major brands and fix issues like not spinning, leaking, no heat, and excessive noise.',
    image: images.washer,
    link: '/services#washer-dryer'
  },
  {
    title: 'Dishwasher Repair',
    description: 'Complete dishwasher repair service. From drainage issues to cleaning problems, our experts fix all dishwasher brands and models.',
    image: images.dishwasher,
    link: '/services#dishwasher'
  },
  {
    title: 'Stove & Oven Repair',
    description: 'Professional stove and oven repair service. We fix heating elements, temperature control issues, and gas problems for all major brands.',
    image: images.stove,
    link: '/services#stove-oven'
  }
];

export default function ServiceHighlights() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional appliance repair services for all major brands and models
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="flex flex-col items-start bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
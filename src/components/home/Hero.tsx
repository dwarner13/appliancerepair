import { Link } from 'react-router-dom';
import { Image, images } from '../Images';

export default function Hero() {
  return (
    <div className="relative isolate">
      <div className="relative">
        <Image
          src={images.hero}
          alt="Edmonton Appliance Repair - Professional Service"
          className="h-[600px] w-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Expert Appliance Repair in Edmonton
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Professional repair services for all major appliance brands. Same-day service available throughout Edmonton and surrounding areas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Schedule Service
              </Link>
              <Link
                to="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
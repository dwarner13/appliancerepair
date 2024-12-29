export default function EmergencyBanner() {
  return (
    <div className="bg-blue-600 text-white py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-3">
          <span className="font-semibold">24/7 Emergency Service Available</span>
          <span>|</span>
          <a href="tel:825-888-3333" className="hover:text-gray-300">
            (825) 888-3333
          </a>
        </div>
      </div>
    </div>
  );
}
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Schedule Your Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Book your appliance repair service or request a quote
            </p>
          </div>
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
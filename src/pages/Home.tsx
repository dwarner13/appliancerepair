import SEO from '../components/SEO/SEO';
import { generateOrganizationSchema, generateServiceSchema } from '../utils/seo/schema';
import { 
  Hero,
  EmergencyBanner,
  ServiceHighlights,
  ContactSection,
  Benefits,
  Brands 
} from '../components/home';
import Coupons from '../components/Coupons';
import GoogleReview from '../components/GoogleReview';

const schema = {
  ...generateOrganizationSchema(),
  mainEntity: generateServiceSchema()
};

export default function Home() {
  return (
    <>
      <SEO
        title="Edmonton Appliance Repair | Same Day Service | Licensed Technicians"
        description="Expert appliance repair in Edmonton. Fast, reliable service for all major brands. Same-day appointments available. Licensed and insured technicians."
        keywords="appliance repair Edmonton, refrigerator repair Edmonton, washer repair Edmonton, dryer repair Edmonton"
        canonical="/"
        schema={schema}
      />
      <main className="bg-white">
        <Hero />
        <EmergencyBanner />
        <ServiceHighlights />
        <Benefits />
        <Brands />
        <Coupons />
        <GoogleReview />
        <ContactSection />
      </main>
    </>
  );
}
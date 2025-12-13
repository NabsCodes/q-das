import {
  Hero,
  Partnerships,
  Services,
  WhyChooseUs,
  Testimonials,
  FAQ,
} from "@/components/home";
import { ContactSection } from "@/components/shared/contact-section";
import { getFAQs, getPartners, getTestimonials } from "@/lib/sanity/fetch";

export default async function Home() {
  const [testimonials, faqs, partners] = await Promise.all([
    getTestimonials(),
    getFAQs(),
    getPartners(),
  ]);

  return (
    <main className="flex-1">
      <Hero />
      <Partnerships partners={partners} />
      <Services />
      <WhyChooseUs />
      <Testimonials testimonials={testimonials} />
      <FAQ faqs={faqs} />
      <ContactSection />
    </main>
  );
}

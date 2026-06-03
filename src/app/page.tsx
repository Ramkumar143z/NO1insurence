import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CalculatorsHub from "@/components/CalculatorsHub";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Partners />
        <Services />
        <WhyChooseUs />
        <CalculatorsHub />
        <Process />
        <Testimonials />
        <FAQ />
        <WhatsAppCTA />
        <Contact />
      </main>
    </>
  );
}

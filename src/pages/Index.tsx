import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SliderSection from "@/components/SliderSection";
import HealthConcernsSection from "@/components/HealthConcernsSection";
import AppointmentSection from "@/components/AppointmentSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import DoctorsSection from "@/components/DoctorsSection";
import ConsultationPromo from "@/components/ConsultationPromo";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnersSection from "@/components/PartnersSection";
import AppSection from "@/components/AppSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SliderSection />
      <HealthConcernsSection />
      <AppointmentSection />
      <SpecialtiesSection />
      <DoctorsSection />
      <ConsultationPromo />
      <HowItWorksSection />
      <PartnersSection />
      <AppSection />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

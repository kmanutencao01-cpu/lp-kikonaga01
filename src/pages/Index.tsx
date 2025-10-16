import { HeroSection } from "@/components/HeroSection";
import { TargetAudienceSection } from "@/components/TargetAudienceSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { JourneySection } from "@/components/JourneySection";
import { MethodSection } from "@/components/MethodSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Header } from "@/components/Header";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground antialiased relative">
      <ScrollAnimations />
      <Header />
      
      {/* Global Floating Particles - covers entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particles-container" />
      </div>
      
      <main className="pt-20 relative z-10">
        {/* Hero Section - Full Width */}
        <HeroSection />
        
        {/* Target Audience Section - Full Width */}
        <TargetAudienceSection />
        
        {/* Authority Section - Full Width */}
        <AuthoritySection />
        
        {/* Journey Section - Full Width */}
        <JourneySection />
        
        {/* Method Section - Full Width */}
        <MethodSection />
        
        {/* Final CTA Section - Full Width */}
        <FinalCtaSection />
        
        {/* Form Section - Controlled Width */}
        <div className="w-full max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mt-20 sm:mt-24 md:mt-28 lg:mt-32">
            <ApplicationForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

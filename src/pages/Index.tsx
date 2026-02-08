import HeroSection from "@/components/wedding/HeroSection";
import QuotesSection from "@/components/wedding/QuotesSection";
import LocationSection from "@/components/wedding/LocationSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import RSVPSection from "@/components/wedding/RSVPSection";

const Index = () => {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="h-screen snap-start">
        <HeroSection />
      </div>
      <div className="h-screen snap-start">
        <QuotesSection />
      </div>
      <div className="h-screen snap-start">
        <LocationSection />
      </div>
      <div className="h-screen snap-start">
        <DressCodeSection />
      </div>
      <div className="snap-start">
        <RSVPSection />
      </div>
    </div>
  );
};

export default Index;
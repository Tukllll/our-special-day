import HeroSection from "@/components/wedding/HeroSection";
import QuotesSection from "@/components/wedding/QuotesSection";
import LocationSection from "@/components/wedding/LocationSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import RSVPSection from "@/components/wedding/RSVPSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="h-screen snap-start snap-always">
        <HeroSection />
      </div>
      <div className="h-screen snap-start snap-always">
        <QuotesSection />
      </div>
      <div className="h-screen snap-start snap-always">
        <LocationSection />
      </div>
      <div className="h-screen snap-start snap-always">
        <DressCodeSection />
      </div>
      <RSVPSection />
      <RSVPSection />
    </div>
  );
};

export default Index;
import HeroSection from "@/components/wedding/HeroSection";
import QuotesSection from "@/components/wedding/QuotesSection";
import LocationSection from "@/components/wedding/LocationSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import RSVPSection from "@/components/wedding/RSVPSection";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Snap scroll container for first 4 sections */}
      <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
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
        {/* RSVP without snap - free scroll */}
        <div className="snap-start snap-always">
          <RSVPSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
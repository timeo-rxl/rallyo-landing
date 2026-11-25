import { useState } from "react";
import { I18nProvider, useI18n } from "./i18n";
import type { Sport } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Sports from "./components/Sports";
import Parks from "./components/Parks";
import WhyRallyo from "./components/WhyRallyo";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function LandingContent() {
  const { t } = useI18n();
  const [selectedSport, setSelectedSport] = useState<Sport | "all">("all");

  const handleSelectSportFromCards = (sport: Sport) => {
    setSelectedSport(sport);
    const parksEl = document.getElementById("parks");
    if (parksEl) {
      parksEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-court focus:text-white focus:px-4 focus:py-2.5 focus:rounded-btn focus:font-semibold focus:text-sm"
      >
        {t("a11y.skip")}
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Sports onSelectSport={handleSelectSportFromCards} />
        <Parks
          selectedSport={selectedSport}
          onSelectSport={setSelectedSport}
        />
        <WhyRallyo />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <LandingContent />
    </I18nProvider>
  );
}

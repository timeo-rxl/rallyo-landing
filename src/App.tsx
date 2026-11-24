import { I18nProvider } from "./i18n";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Sports from "./components/Sports";
import Parks from "./components/Parks";
import WhyRallyo from "./components/WhyRallyo";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <I18nProvider>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Sports />
        <Parks />
        <WhyRallyo />
        <CtaBanner />
      </main>
      <Footer />
    </I18nProvider>
  );
}

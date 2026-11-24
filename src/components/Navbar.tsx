import { useState } from "react";
import { useI18n } from "../i18n";
import { LINKS } from "../data";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-ink/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-extrabold tracking-tight text-navy">
          Rallyo
        </a>

        {/* Links — hidden on small mobile */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-ink/70">
          <a href="#sports" className="hover:text-ink transition-colors">
            {t("nav.sports")}
          </a>
          <a href="#how" className="hover:text-ink transition-colors">
            {t("nav.how")}
          </a>
          <a href="#parks" className="hover:text-ink transition-colors">
            {t("nav.parks")}
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            className="text-sm font-semibold text-ink/60 hover:text-ink border border-ink/15 rounded-btn px-3 py-1.5 transition-colors"
            aria-label={lang === "fr" ? "Switch to English" : "Passer en français"}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>

          {/* Demo CTA */}
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-4 py-2 rounded-btn transition-colors"
          >
            {t("nav.demo")}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 text-ink/60 hover:text-ink"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-ink/5 bg-cream/95 backdrop-blur-sm px-4 py-4 flex flex-col gap-3 text-sm font-medium text-ink/70">
          <a href="#sports" onClick={() => setMobileOpen(false)} className="hover:text-ink py-1">
            {t("nav.sports")}
          </a>
          <a href="#how" onClick={() => setMobileOpen(false)} className="hover:text-ink py-1">
            {t("nav.how")}
          </a>
          <a href="#parks" onClick={() => setMobileOpen(false)} className="hover:text-ink py-1">
            {t("nav.parks")}
          </a>
        </div>
      )}
    </nav>
  );
}

import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { LINKS } from "../data";
import { IconArrowUpRight, IconBrandMark } from "./Icons";

export default function Navbar() {
  const { lang, setLang, t } = useI18n();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/95 backdrop-blur-md border-b border-line">
      <nav
        aria-label="Primary"
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3"
      >
        {/* Brand */}
        <a
          href="#"
          className="inline-flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-ink cursor-pointer"
        >
          <IconBrandMark className="w-7 h-7 flex-shrink-0" />
          <span>Rallyo</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a
            href="#how"
            className="hover:text-ink transition-colors py-1 cursor-pointer"
          >
            {t("nav.how")}
          </a>
          <a
            href="#sports"
            className="hover:text-ink transition-colors py-1 cursor-pointer"
          >
            {t("nav.sports")}
          </a>
          <a
            href="#parks"
            className="hover:text-ink transition-colors py-1 cursor-pointer"
          >
            {t("nav.parks")}
          </a>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* FR / EN segmented switch */}
          <div
            role="group"
            aria-label="Language"
            className="inline-flex items-center rounded-btn border border-line bg-surface p-0.5"
          >
            <button
              type="button"
              onClick={() => setLang("fr")}
              aria-pressed={lang === "fr"}
              className={`px-2.5 py-1.5 text-xs font-mono font-semibold rounded-[7px] transition-colors cursor-pointer ${
                lang === "fr"
                  ? "bg-court text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`px-2.5 py-1.5 text-xs font-mono font-semibold rounded-[7px] transition-colors cursor-pointer ${
                lang === "en"
                  ? "bg-court text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              EN
            </button>
          </div>

          {/* Primary CTA (hidden on very narrow screens; shown in drawer on mobile) */}
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-court hover:bg-court-hover text-white text-sm font-semibold px-4 py-2 rounded-btn transition-colors cursor-pointer"
          >
            <span>{t("nav.demo")}</span>
            <IconArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile menu button — 44x44px target */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? t("a11y.menuClose") : t("a11y.menuOpen")}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-btn border border-line bg-surface text-ink hover:bg-subtle transition-colors cursor-pointer"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-line bg-canvas px-4 pt-3 pb-5"
        >
          <div className="flex flex-col divide-y divide-line text-base font-medium text-ink">
            <a
              href="#how"
              onClick={() => setMobileOpen(false)}
              className="py-3 hover:text-court transition-colors cursor-pointer"
            >
              {t("nav.how")}
            </a>
            <a
              href="#sports"
              onClick={() => setMobileOpen(false)}
              className="py-3 hover:text-court transition-colors cursor-pointer"
            >
              {t("nav.sports")}
            </a>
            <a
              href="#parks"
              onClick={() => setMobileOpen(false)}
              className="py-3 hover:text-court transition-colors cursor-pointer"
            >
              {t("nav.parks")}
            </a>
          </div>
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-court hover:bg-court-hover text-white text-sm font-semibold px-4 py-3 rounded-btn transition-colors cursor-pointer"
          >
            <span>{t("nav.demo")}</span>
            <IconArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}

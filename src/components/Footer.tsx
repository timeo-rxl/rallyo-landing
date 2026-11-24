import { useI18n } from "../i18n";
import { LINKS } from "../data";
import { IconGithub, IconLinkedIn } from "./Icons";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-navy/95 text-white/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-extrabold text-white tracking-tight">Rallyo</span>
            <p className="mt-1 text-sm">{t("footer.tagline")}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href={LINKS.demo} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {t("footer.demo")}
            </a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
              <IconGithub className="w-4 h-4" />
              GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
              <IconLinkedIn className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs">
          {t("footer.made")}
        </div>
      </div>
    </footer>
  );
}

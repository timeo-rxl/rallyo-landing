import { useI18n } from "../i18n";
import { LINKS } from "../data";
import { IconBrandMark, IconGithub, IconLinkedIn } from "./Icons";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-court-ink text-[#C8DBD0] py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2.5">
              <IconBrandMark className="w-6 h-6" />
              <span className="font-display text-lg font-extrabold text-white tracking-tight">
                Rallyo
              </span>
            </div>
            <p className="mt-2 text-sm text-[#C8DBD0]">{t("footer.tagline")}</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
            <a
              href={LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors cursor-pointer focus-visible:ring-white focus-visible:ring-offset-court-ink rounded"
            >
              {t("footer.demo")}
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-white focus-visible:ring-offset-court-ink rounded"
            >
              <IconGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer focus-visible:ring-white focus-visible:ring-offset-court-ink rounded"
            >
              <IconLinkedIn className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#A8C2B3]">
          <span>{t("footer.made")}</span>
          <span className="font-mono">{t("footer.stats")}</span>
        </div>
      </div>
    </footer>
  );
}

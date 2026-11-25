import { useI18n } from "../i18n";
import { LINKS } from "../data";
import { IconArrowUpRight, IconGithub } from "./Icons";

export default function CtaBanner() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-24 bg-court-deep court-grid-bg text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C7B6]">
          {t("cta.eyebrow")}
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          {t("cta.title")}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#D5E6DC] max-w-xl mx-auto leading-relaxed">
          {t("cta.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-canvas hover:bg-surface text-court-deep font-bold px-7 py-3.5 rounded-btn text-base transition-colors cursor-pointer focus-visible:ring-white focus-visible:ring-offset-court-deep"
          >
            <span>{t("cta.button")}</span>
            <IconArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-white/70 text-white font-semibold px-6 py-3.5 rounded-btn text-base transition-colors cursor-pointer focus-visible:ring-white focus-visible:ring-offset-court-deep"
          >
            <IconGithub className="w-5 h-5" />
            <span>{t("cta.secondary")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

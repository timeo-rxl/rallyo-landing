import { useI18n, type TranslationKey } from "../i18n";
import { LINKS } from "../data";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconGithub,
  IconTrophy,
} from "./Icons";

const facts: { valueKey: TranslationKey; labelKey: TranslationKey }[] = [
  { valueKey: "fact.students.value", labelKey: "fact.students.label" },
  { valueKey: "fact.parks.value", labelKey: "fact.parks.label" },
  { valueKey: "fact.sports.value", labelKey: "fact.sports.label" },
  { valueKey: "fact.competition.value", labelKey: "fact.competition.label" },
];

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative pt-24 pb-16 sm:pt-28 md:pt-32 md:pb-24 paper-court-lines">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial copy */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-court">
                {t("hero.eyebrow")}
              </span>
              <span className="text-line" aria-hidden="true">
                /
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-clay-soft text-clay-hover px-3 py-1 text-xs font-semibold">
                <IconTrophy className="w-3.5 h-3.5" />
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.04] tracking-[-0.03em] text-ink whitespace-pre-line">
              {t("hero.title")}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={LINKS.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-court hover:bg-court-hover text-white font-semibold px-6 py-3.5 rounded-btn text-base transition-colors cursor-pointer"
              >
                <span>{t("hero.cta.demo")}</span>
                <IconArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-surface border border-ink/20 hover:border-ink/45 text-ink font-semibold px-5 py-3.5 rounded-btn text-base transition-colors cursor-pointer"
              >
                <IconGithub className="w-5 h-5" />
                <span>{t("hero.cta.code")}</span>
              </a>
              <a
                href="#parks"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-clay hover:text-clay-hover px-2 py-2.5 underline-offset-4 hover:underline transition-colors cursor-pointer"
              >
                <span>{t("hero.cta.explore")}</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Framed editorial court visual */}
          <div className="lg:col-span-5">
            <figure className="bg-surface border border-line rounded-2xl p-2.5 sm:p-3">
              <div className="rounded-xl overflow-hidden bg-subtle aspect-[4/3]">
                <img
                  src="/images/hero-park.jpg"
                  alt={t("a11y.heroImg")}
                  width={1376}
                  height={768}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 px-1.5 pb-1 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-mono uppercase tracking-[0.12em] text-clay font-semibold">
                  {t("hero.caption.label")}
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-ink">
                  <span
                    className="w-2 h-2 rounded-full bg-court flex-shrink-0"
                    aria-hidden="true"
                  />
                  {t("hero.caption.value")}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Architectural facts strip */}
        <dl className="mt-14 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {facts.map(({ valueKey, labelKey }) => (
            <div key={valueKey} className="bg-surface px-5 py-4 sm:px-6 sm:py-5">
              <dt className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                {t(valueKey)}
              </dt>
              <dd className="mt-1 text-xs sm:text-sm text-muted leading-snug">
                {t(labelKey)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

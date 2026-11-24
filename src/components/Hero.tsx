import { useI18n } from "../i18n";
import { LINKS } from "../data";
import { IconGithub } from "./Icons";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-navy whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-ink/70 leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LINKS.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-btn text-base transition-colors"
              >
                {t("hero.cta.demo")}
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/15 text-navy font-semibold px-6 py-3 rounded-btn text-base hover:border-navy/30 transition-colors inline-flex items-center gap-2"
              >
                <IconGithub className="w-5 h-5" />
                {t("hero.cta.code")}
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <img
                src="/images/hero-park.jpg"
                alt="Students playing sports in a Montreal park"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Facts strip */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl">
          {(["fact.sports", "fact.parks", "fact.competition"] as const).map((key) => (
            <div key={key} className="flex sm:block items-center gap-2 sm:text-center md:text-left">
              <span className="text-lg sm:text-xl font-bold text-navy">{t(key).split(" ")[0]}</span>
              <span className="text-sm text-ink/60">{t(key).split(" ").slice(1).join(" ")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

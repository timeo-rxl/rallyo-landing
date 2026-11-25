import { useI18n, type TranslationKey } from "../i18n";
import { IconProfile, IconMatch, IconPlay } from "./Icons";

const steps: {
  num: string;
  icon: typeof IconProfile;
  titleKey: TranslationKey;
  descKey: TranslationKey;
}[] = [
  {
    num: "01",
    icon: IconProfile,
    titleKey: "how.step1.title",
    descKey: "how.step1.desc",
  },
  {
    num: "02",
    icon: IconMatch,
    titleKey: "how.step2.title",
    descKey: "how.step2.desc",
  },
  {
    num: "03",
    icon: IconPlay,
    titleKey: "how.step3.title",
    descKey: "how.step3.desc",
  },
];

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how" className="py-20 md:py-24 bg-surface border-y border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-clay">
              {t("how.eyebrow")}
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
              {t("how.title")}
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-muted leading-relaxed">
            {t("how.subtitle")}
          </p>
        </div>

        <ol className="mt-12 grid md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {steps.map(({ num, icon: Icon, titleKey, descKey }) => (
            <li
              key={num}
              className="bg-canvas p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold tracking-wider text-clay">
                  {num}
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-court-soft text-court">
                  <Icon className="w-5 h-5" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-ink tracking-tight">
                  {t(titleKey)}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-muted leading-relaxed">
                  {t(descKey)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

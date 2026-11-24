import { useI18n } from "../i18n";
import { LINKS } from "../data";

export default function CtaBanner() {
  const { t } = useI18n();

  return (
    <section className="py-20 md:py-28 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {t("cta.title")}
        </h2>
        <div className="mt-8">
          <a
            href={LINKS.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-btn text-lg transition-colors"
          >
            {t("cta.button")}
          </a>
        </div>
      </div>
    </section>
  );
}

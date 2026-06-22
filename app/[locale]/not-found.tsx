import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-heading text-4xl sm:text-6xl font-bold text-white">
        {t("title")}
      </h1>
      <Link
        href="/"
        className="font-heading font-semibold tracking-widest text-sm px-6 py-3 bg-frog-green text-frog-ink rounded hover:opacity-90 transition-opacity"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}

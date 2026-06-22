import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  function lh(path: string) {
    return locale === "pt" ? path : `/${locale}${path}`;
  }

  return (
    <footer className="bg-frog-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: logo + contato */}
          <div className="flex flex-col gap-6">
            <Link href={lh("/")} aria-label="Frog Surfboards — página inicial">
              <Image
                src="/Logo-Principal-Branco.png"
                alt="Frog Surfboards"
                width={120}
                height={120}
                className="h-24 w-auto object-contain"
              />
            </Link>

            <div>
              <p className="font-display font-semibold tracking-widest text-frog-green text-sm mb-3">
                {t("talkToShaper")} 🇧🇷
              </p>
              <a
                href="https://wa.me/5512997060472"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/80 hover:text-frog-green transition-colors mb-1"
              >
                +55 12 99706-0472
              </a>
              <a
                href="mailto:contato@frogsurfboards.com.br"
                className="block text-sm text-white/80 hover:text-frog-green transition-colors"
              >
                contato@frogsurfboards.com.br
              </a>
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              {t("address")}
            </p>
          </div>

          {/* Col 2: Navegue */}
          <div>
            <p className="font-display font-semibold tracking-widest text-sm text-white mb-4">
              {t("navigate")}
            </p>
            <ul className="flex flex-col gap-2">
              <li><Link href={lh("/pranchas")} className="text-sm text-white/70 hover:text-frog-green transition-colors">{t("links.pranchas")}</Link></li>
              <li><Link href={lh("/sobre")} className="text-sm text-white/70 hover:text-frog-green transition-colors">{t("links.sobre")}</Link></li>
              <li><Link href={lh("/duvidas")} className="text-sm text-white/70 hover:text-frog-green transition-colors">{t("links.duvidas")}</Link></li>
              <li><Link href={lh("/contato")} className="text-sm text-white/70 hover:text-frog-green transition-colors">{t("links.contato")}</Link></li>
            </ul>
          </div>

          {/* Col 3: Compras online */}
          <div>
            <p className="font-display font-semibold tracking-widest text-sm text-white mb-4">
              {t("onlineShopping")}
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={lh("/como-comprar")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("shoppingLinks.comoComprar")}
                </Link>
              </li>
              <li>
                <span className="text-sm text-white/40 cursor-default">{t("shoppingLinks.garantias")}</span>
              </li>
              <li>
                <span className="text-sm text-white/40 cursor-default">{t("shoppingLinks.trocas")}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes */}
          <div>
            <p className="font-display font-semibold tracking-widest text-sm text-white mb-4">
              REDES
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/frog.surfboards/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Frog Surfboards"
                className="text-white/70 hover:text-frog-green transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@frogsurfboards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Frog Surfboards"
                className="text-white/70 hover:text-frog-green transition-colors"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>{t("legal")}</span>
          <div className="flex gap-4">
            <Link href={lh("/politica-de-privacidade")} className="hover:text-frog-green transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href={lh("/politica-de-cookies")} className="hover:text-frog-green transition-colors">
              {t("cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

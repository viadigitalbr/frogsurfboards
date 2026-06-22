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
    <footer className="bg-frog-ink text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: logo + contato + endereço */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href={lh("/")} aria-label="Frog Surfboards — página inicial" className="inline-block">
              <Image
                src="/Logo-Principal-Branco.png"
                alt="Frog Surfboards"
                width={160}
                height={160}
                className="h-36 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-col gap-3">
              <p className="font-display text-sm tracking-widest text-frog-green uppercase">
                {t("talkToShaper")} 🇧🇷
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/5512997060472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-frog-green transition-colors"
                >
                  <WhatsAppIcon />
                  +55 12 99706-0472
                </a>
                <a
                  href="tel:+5512997060472"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-frog-green transition-colors"
                >
                  <PhoneIcon />
                  +55 12 99706-0472
                </a>
                <a
                  href="mailto:contato@frogsurfboards.com.br"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-frog-green transition-colors"
                >
                  <MailIcon />
                  contato@frogsurfboards.com.br
                </a>
              </div>

              <div className="text-sm text-white/60 leading-relaxed mt-1">
                <span className="font-semibold text-white/80">Endereço:</span>{" "}
                Rua Olímpio R. César, 404 —{" "}
                <span className="font-semibold text-white/80">Praia de Maresias</span> —
                São Sebastião – São Paulo – Brasil
              </div>
            </div>
          </div>

          {/* Col 2: NAVEGUE */}
          <div>
            <p className="font-display text-sm tracking-widest text-white uppercase mb-5">
              {t("navigate")}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={lh("/pranchas")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("links.pranchas")}
                </Link>
              </li>
              <li>
                <Link href={lh("/sobre")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("links.sobre")}
                </Link>
              </li>
              <li>
                <Link href={lh("/duvidas")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("links.duvidas")}
                </Link>
              </li>
              <li>
                <Link href={lh("/contato")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("links.contato")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: APOIO */}
          <div>
            <p className="font-display text-sm tracking-widest text-white uppercase mb-5">
              APOIO
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={lh("/como-comprar")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("shoppingLinks.comoComprar")}
                </Link>
              </li>
              <li>
                <Link href={lh("/politica-de-privacidade")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href={lh("/politica-de-cookies")} className="text-sm text-white/70 hover:text-frog-green transition-colors">
                  {t("cookiePolicy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: REDES */}
          <div>
            <p className="font-display text-sm tracking-widest text-white uppercase mb-5">
              REDES
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/frog.surfboards/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Frog Surfboards"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-frog-green transition-colors group"
              >
                <InstagramIcon />
                <span>@frog.surfboards</span>
              </a>
              <a
                href="https://www.youtube.com/@frogsurfboards"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Frog Surfboards"
                className="flex items-center gap-3 text-sm text-white/70 hover:text-frog-green transition-colors group"
              >
                <YouTubeIcon />
                <span>@frogsurfboards</span>
              </a>
            </div>
          </div>
        </div>

        {/* Linha legal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>{t("legal")}</span>
          <div className="flex gap-5">
            <Link href={lh("/politica-de-privacidade")} className="underline underline-offset-2 hover:text-white transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href={lh("/politica-de-cookies")} className="underline underline-offset-2 hover:text-white transition-colors">
              {t("cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.1 8.1 0 0 1-2.38-1.47 8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37S6 8.42 6 9.52c0 1.1.8 2.16.91 2.31s1.57 2.4 3.8 3.37a12.9 12.9 0 0 0 1.27.47c.53.17 1.02.15 1.4.09.43-.07 1.32-.54 1.51-1.06s.19-.97.13-1.06c-.05-.1-.2-.15-.5-.3zM12.05 2A9.93 9.93 0 0 0 2.1 11.95a9.87 9.87 0 0 0 1.33 4.96L2 22l5.25-1.38A9.94 9.94 0 1 0 12.05 2zm0 18.14a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.03-.2-.31a8.26 8.26 0 1 1 7 3.85z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.83a16 16 0 0 0 6.29 6.29l1.62-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { key: "pranchas" as const, href: "/pranchas" },
  { key: "sobre" as const, href: "/sobre" },
  { key: "contato" as const, href: "/contato" },
];

const LOCALES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function localizedHref(path: string) {
    return locale === "pt" ? path : `/${locale}${path}`;
  }

  function switchLocale(newLocale: string) {
    let bare = pathname;
    if (bare.startsWith("/en") || bare.startsWith("/es")) {
      bare = bare.slice(3) || "/";
    }
    const target = newLocale === "pt" ? bare : `/${newLocale}${bare}`;
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.push(target);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-frog-ink">
      <div className="mx-auto max-w-7xl px-10 lg:px-16 flex items-center py-5 gap-8">

        {/* Logo */}
        <Link
          href={localizedHref("/")}
          aria-label="Frog Surfboards — página inicial"
          className="flex-shrink-0"
        >
          <Image
            src="/Logo-Letter-Branco.png"
            alt="Frog Surfboards"
            width={120}
            height={44}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav — centro */}
        <nav
          className="hidden md:flex items-center flex-1 justify-center"
          style={{ gap: "2rem" }}
          aria-label="Navegação principal"
        >
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={localizedHref(href)}
              className="font-heading text-white hover:text-frog-green transition-colors uppercase"
              style={{ fontSize: "22px", fontWeight: 400, lineHeight: "10px" }}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Direita: redes + seletor idioma */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0 ml-auto">
          <a
            href="https://www.instagram.com/frog.surfboards/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Frog Surfboards"
            className="text-white hover:text-frog-green transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@frogsurfboards"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da Frog Surfboards"
            className="text-white hover:text-frog-green transition-colors"
          >
            <YouTubeIcon />
          </a>

          <div className="flex items-center gap-0.5 ml-1">
            {LOCALES.map(({ code, label }, i) => (
              <span key={code} className="flex items-center">
                <button
                  onClick={() => switchLocale(code)}
                  style={{ fontSize: "0.95rem" }}
                  className={`font-heading tracking-wider px-1 transition-colors ${
                    locale === code
                      ? "text-frog-green"
                      : "text-white/50 hover:text-white"
                  }`}
                  aria-label={`Mudar idioma para ${label}`}
                >
                  {label}
                </button>
                {i < LOCALES.length - 1 && (
                  <span className="text-white/20 text-xs select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Mobile: hamburger */}
        <button
          className="md:hidden ml-auto text-white p-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-frog-ink border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={localizedHref(href)}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-sm tracking-widest text-white hover:text-frog-green transition-colors uppercase"
            >
              {t(key)}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-3 border-t border-white/10">
            <a
              href="https://www.instagram.com/frog.surfboards/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-frog-green transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@frogsurfboards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/70 hover:text-frog-green transition-colors"
            >
              <YouTubeIcon />
            </a>

            <div className="flex items-center gap-0.5 ml-auto">
              {LOCALES.map(({ code, label }, i) => (
                <span key={code} className="flex items-center">
                  <button
                    onClick={() => { switchLocale(code); setMenuOpen(false); }}
                    style={{ fontSize: "0.95rem" }}
                  className={`font-heading tracking-wider px-1 transition-colors ${
                      locale === code
                        ? "text-frog-green"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                  {i < LOCALES.length - 1 && (
                    <span className="text-white/20 text-xs select-none">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const NAV_LINKS = [
  { key: "pranchas" as const, href: "/pranchas" },
  { key: "sobre" as const, href: "/sobre" },
  { key: "duvidas" as const, href: "/duvidas" },
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
    // Strip current locale prefix from pathname then rebuild
    let bare = pathname;
    if (bare.startsWith("/en") || bare.startsWith("/es")) {
      bare = bare.slice(3) || "/";
    }
    const target = newLocale === "pt" ? bare : `/${newLocale}${bare}`;
    // Set cookie so next-intl remembers the choice
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    router.push(target);
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-frog-ink border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={localizedHref("/")} aria-label="Frog Surfboards — página inicial">
          <Image
            src="/Logo-Letter-Branco.png"
            alt="Frog Surfboards"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={localizedHref(href)}
              className="font-display text-sm font-semibold tracking-widest text-white hover:text-frog-green transition-colors"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right: socials + lang switcher */}
        <div className="hidden md:flex items-center gap-4">
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

          {/* Lang switcher */}
          <div className="flex items-center gap-1 ml-2 border-l border-white/20 pl-4">
            {LOCALES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => switchLocale(code)}
                className={`font-display text-xs font-semibold tracking-wider px-1 py-0.5 rounded transition-colors ${
                  locale === code
                    ? "text-frog-green"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label={`Mudar idioma para ${label}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-frog-ink border-t border-white/10 px-4 pb-6 pt-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={localizedHref(href)}
              onClick={() => setMenuOpen(false)}
              className="font-display text-sm font-semibold tracking-widest text-white hover:text-frog-green transition-colors"
            >
              {t(key)}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <a
              href="https://www.instagram.com/frog.surfboards/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-frog-green transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@frogsurfboards"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-frog-green transition-colors"
            >
              <YouTubeIcon />
            </a>
          </div>

          <div className="flex items-center gap-2">
            {LOCALES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => { switchLocale(code); setMenuOpen(false); }}
                className={`font-display text-xs font-semibold tracking-wider px-2 py-1 rounded border transition-colors ${
                  locale === code
                    ? "border-frog-green text-frog-green"
                    : "border-white/30 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

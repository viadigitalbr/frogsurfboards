"use client";

import { useTranslations } from "next-intl";

export default function WhatsAppFloat() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href="https://wa.me/5512997060472"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("ariaLabel")}
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center overflow-hidden
        h-14 rounded-full bg-frog-green shadow-lg
        w-14 hover:w-56
        transition-all duration-300 ease-in-out
        group
      `}
    >
      {/* Ícone — sempre visível, tamanho fixo */}
      <span className="flex items-center justify-center flex-shrink-0 w-14 h-14">
        <WhatsAppIcon />
      </span>

      {/* Texto — aparece no hover */}
      <span
        className="font-heading text-sm tracking-widest text-frog-ink whitespace-nowrap pr-4
          opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100"
        aria-hidden="true"
      >
        FALE COM O SHAPER
      </span>
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#262626" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.1 8.1 0 0 1-2.38-1.47 8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37S6 8.42 6 9.52c0 1.1.8 2.16.91 2.31s1.57 2.4 3.8 3.37a12.9 12.9 0 0 0 1.27.47c.53.17 1.02.15 1.4.09.43-.07 1.32-.54 1.51-1.06s.19-.97.13-1.06c-.05-.1-.2-.15-.5-.3zM12.05 2A9.93 9.93 0 0 0 2.1 11.95a9.87 9.87 0 0 0 1.33 4.96L2 22l5.25-1.38A9.94 9.94 0 1 0 12.05 2zm0 18.14a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.03-.2-.31a8.26 8.26 0 1 1 7 3.85z" />
    </svg>
  );
}

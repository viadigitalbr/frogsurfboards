"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const COOKIE_KEY = "frog_cookie_consent";

function getConsent(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setConsentCookie(value: "all" | "essential") {
  document.cookie = `${COOKIE_KEY}=${value};path=/;max-age=31536000;SameSite=Lax`;
}

function injectAnalytics(gaId: string, gtag: string) {
  if (document.getElementById("ga-script")) return;

  const script1 = document.createElement("script");
  script1.id = "ga-script";
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.id = "ga-inline";
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
    gtag('config', '${gtag}');
  `;
  document.head.appendChild(script2);
}

export default function CookieConsent() {
  const t = useTranslations("cookies");
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "";
  const gtag = process.env.NEXT_PUBLIC_GOOGLE_TAG ?? "";

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setVisible(true);
    } else if (consent === "all" && gaId) {
      injectAnalytics(gaId, gtag);
    }
  }, [gaId, gtag]);

  function accept() {
    setConsentCookie("all");
    if (gaId) injectAnalytics(gaId, gtag);
    setVisible(false);
  }

  function essentialOnly() {
    setConsentCookie("essential");
    setVisible(false);
  }

  if (!visible) return null;

  const policyHref = locale === "pt" ? "/politica-de-cookies" : `/${locale}/politica-de-cookies`;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-frog-navy/95 backdrop-blur border-t border-white/10 px-4 py-4 sm:py-5"
    >
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/80 flex-1">
          {t("message")}{" "}
          <Link href={policyHref} className="underline text-frog-green hover:text-white transition-colors">
            {t("policyLink")}
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={essentialOnly}
            className="px-4 py-2 text-xs font-display font-semibold tracking-wider border border-white/30 text-white/70 rounded hover:border-white hover:text-white transition-colors"
          >
            {t("essentialOnly")}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-display font-semibold tracking-wider bg-frog-green text-frog-ink rounded hover:opacity-90 transition-opacity"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}

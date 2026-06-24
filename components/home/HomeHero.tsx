"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useReducedMotion } from "framer-motion";

type Props = {
  desktopSrc: string;
  mobileSrc: string;
  poster: string;
};

export default function HomeHero({ desktopSrc, mobileSrc, poster }: Props) {
  const locale = useLocale();
  const prefersReduced = useReducedMotion();
  const href = locale === "pt" ? "/sobre" : `/${locale}/sobre`;

  return (
    <section className="relative w-full h-screen min-h-[560px] flex items-center justify-center overflow-hidden">
      {/* Video / Fallback */}
      {prefersReduced ? (
        /* Fallback estático para prefers-reduced-motion */
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          aria-hidden="true"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={desktopSrc}
          poster={poster}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] text-white uppercase tracking-wider leading-tight mb-5">
          A prancha certa pode transformar seu surf
        </h1>
        <p className="font-sans text-white/85 mb-10 max-w-xl mx-auto" style={{ fontSize: "1rem" }}>
          A gente sabe disso porque vive isso, dentro e fora d&apos;água.
        </p>
        <Link
          href={href}
          className="inline-block transition-colors duration-200"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            textTransform: "uppercase",
            lineHeight: "19px",
            letterSpacing: "0px",
            wordSpacing: "1px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            borderRadius: "4px",
            backgroundColor: "rgba(255,255,255,0.07)",
            color: "#FFFFFF",
            padding: "12px 36px",
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.22)")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.07)")}
        >
          CONHEÇA A FROG
        </Link>
      </div>
    </section>
  );
}

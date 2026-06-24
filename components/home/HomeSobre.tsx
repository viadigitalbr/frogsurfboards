"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";

export default function HomeSobre() {
  const locale = useLocale();
  const prefersReduced = useReducedMotion();
  const href = locale === "pt" ? "/sobre" : `/${locale}/sobre`;

  return (
    <section
      className="py-20 px-6 overflow-hidden"
      style={{ background: "linear-gradient(to right, #75aa5e, #456f33)" }}
    >
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        initial={prefersReduced ? false : { y: 30 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {/* Coluna esquerda — texto escuro */}
        <div className="flex flex-col gap-5">
          <p
            className="uppercase text-frog-ink/70"
            style={{ fontFamily: "var(--font-display), 'Bebas Neue', sans-serif", fontSize: "17px", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            SOBRE A FROG
          </p>

          <h2
            className="font-heading text-frog-ink uppercase tracking-wide leading-tight"
            style={{ fontSize: "2.4rem" }}
          >
            NOSSA MISSÃO É FAZER VOCÊ SURFAR MELHOR
          </h2>

          <p className="font-sans text-frog-ink/80 text-base leading-relaxed max-w-md">
            25 anos produzindo pranchas que carregam história, precisão e amor pelo trabalho.
          </p>

          <div className="mt-2">
            <Link
              href={href}
              className="inline-block font-sans text-white text-sm uppercase tracking-wider px-7 py-3 transition-colors duration-200"
              style={{ backgroundColor: "#292929", borderRadius: "4px" }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1a1a1a")}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#292929")}
            >
              CONHEÇA A FROG SURFBOARDS
            </Link>
          </div>
        </div>

        {/* Coluna direita — imagem única a-frog.png */}
        <div className="relative w-full h-72 sm:h-96 lg:h-[420px]">
          <Image
            src="/images/sobre/a-frog.png"
            alt="Frog Surfboards — ateliê e pranchas"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

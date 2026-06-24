"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { pranchas } from "@/data/pranchas";

export default function HomePranchas() {
  const locale = useLocale();
  const prefersReduced = useReducedMotion();

  function href(slug: string) {
    const base = `/pranchas/${slug}`;
    return locale === "pt" ? base : `/${locale}${base}`;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.07, duration: 0.4 },
    }),
  };

  return (
    <section className="bg-frog-ink py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-heading text-frog-green uppercase tracking-widest text-sm mb-3">
            MODELOS
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wide leading-tight">
            PRANCHAS DE SURF QUE ENTREGAM EVOLUÇÃO
          </h2>
          <p className="font-sans text-white/65 mt-4 text-lg max-w-xl mx-auto">
            Aqui você encontra o modelo que se encaixa no seu surf e no seu momento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pranchas.map((modelo, i) => (
            <motion.div
              key={modelo.slug}
              custom={i}
              initial={prefersReduced ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={prefersReduced ? {} : cardVariants}
            >
              <Link
                href={href(modelo.slug)}
                className="group relative flex flex-col bg-white/5 border border-white/10 hover:border-white/25 transition-colors duration-300 overflow-hidden h-full"
                aria-label={`Conheça a ${modelo.nome}`}
              >
                {/* Badge em-validação */}
                {modelo.statusConteudo === "em-validacao" && (
                  <span className="absolute top-3 right-3 z-10 bg-frog-yellow/20 text-frog-yellow font-sans text-xs px-2.5 py-1 rounded-full border border-frog-yellow/30">
                    Em validação
                  </span>
                )}

                {/* Mockup */}
                <div className="relative w-full aspect-[3/4] bg-white/5">
                  <Image
                    src={modelo.mockupFront}
                    alt={`Mockup ${modelo.nome}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  {/* Logo do modelo */}
                  <div className="relative h-10 w-full">
                    <Image
                      src={modelo.logo}
                      alt={`Logo ${modelo.nome}`}
                      fill
                      sizes="200px"
                      className="object-contain object-left"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>

                  <p className="font-sans text-white/70 text-sm leading-snug flex-1">
                    {modelo.descricaoCurta}
                  </p>

                  {/* CTA na cor do modelo */}
                  <span
                    className="inline-block mt-2 font-heading uppercase tracking-widest text-sm px-5 py-2.5 text-center transition-opacity duration-200 group-hover:opacity-80"
                    style={{ backgroundColor: modelo.acento, color: "#FFFFFF" }}
                  >
                    CONHEÇA A {modelo.nome}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

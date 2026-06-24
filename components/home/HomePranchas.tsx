"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLocale } from "next-intl";
import { motion, useMotionValue, useAnimation, useReducedMotion } from "framer-motion";
import { pranchas } from "@/data/pranchas";

const AUTO_INTERVAL = 4000;
const SLIDE_DURATION = 0.65;

export default function HomePranchas() {
  const locale = useLocale();
  const prefersReduced = useReducedMotion();

  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const total = pranchas.length;

  /* Itens duplicados para loop infinito: [...pranchas, ...pranchas, ...pranchas] */
  const items = [...pranchas, ...pranchas, ...pranchas];
  const offset = total; // começa no bloco do meio

  /* Calcula largura do card e quantos visíveis */
  useEffect(() => {
    function measure() {
      const w = window.innerWidth;
      const count = w >= 1024 ? 3 : w >= 640 ? 2 : 1;
      setVisibleCount(count);
      if (trackRef.current) {
        setCardWidth(trackRef.current.offsetWidth / count);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Converte índice lógico → posição X no track */
  const indexToX = useCallback(
    (i: number) => -((offset + i) * cardWidth),
    [offset, cardWidth]
  );

  /* Posiciona sem animação na montagem */
  useEffect(() => {
    if (!cardWidth) return;
    x.set(indexToX(activeIndex));
  }, [cardWidth]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Anima para o índice */
  const goTo = useCallback(
    async (targetIndex: number, animate = true) => {
      if (!cardWidth) return;
      const newIndex = ((targetIndex % total) + total) % total;

      if (animate && !prefersReduced) {
        await controls.start({
          x: indexToX(newIndex),
          transition: { duration: SLIDE_DURATION, ease: [0.25, 0.46, 0.45, 0.94] },
        });
      } else {
        x.set(indexToX(newIndex));
      }
      setActiveIndex(newIndex);
    },
    [cardWidth, total, indexToX, controls, x, prefersReduced]
  );

  /* Auto-avanço */
  useEffect(() => {
    if (isPaused || !cardWidth) return;
    const timer = setInterval(() => {
      goTo(activeIndex + 1);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, cardWidth, activeIndex, goTo]);

  function prev() { goTo(activeIndex - 1); }
  function next() { goTo(activeIndex + 1); }

  function modelHref(slug: string) {
    return locale === "pt" ? `/pranchas/${slug}` : `/${locale}/pranchas/${slug}`;
  }

  return (
    /*
     * -mt-20 puxa a seção para cima, sobrepondo ao Hero.
     * pt-8 garante espaço acima do título.
     * z-10 fica acima do Hero (que tem z-10 no conteúdo, mas o vídeo é z-0).
     */
    <section
      className="relative bg-frog-ink -mt-20 pt-8 pb-16 overflow-hidden"
      style={{ zIndex: 1 }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cabeçalho */}
      <div className="px-6 max-w-7xl mx-auto mb-10 text-center">
        <p className="font-heading text-frog-green uppercase tracking-widest text-sm mb-3">
          MODELOS
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-white uppercase tracking-wide leading-tight">
          PRANCHAS DE SURF QUE ENTREGAM EVOLUÇÃO
        </h2>
        <p className="font-sans text-white/60 mt-4 text-base max-w-xl mx-auto">
          Aqui você encontra o modelo que se encaixa no seu surf e no seu momento.
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative flex items-center">
        {/* Seta esquerda */}
        <button
          onClick={prev}
          aria-label="Modelo anterior"
          className="absolute left-2 sm:left-4 z-20 text-white/40 hover:text-frog-green transition-colors duration-200"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronLeft />
        </button>

        {/* Track com overflow hidden */}
        <div ref={trackRef} className="w-full overflow-hidden">
          <motion.div
            className="flex will-change-transform"
            style={{ x }}
            animate={controls}
          >
            {items.map((modelo, i) => {
              const logicalIndex = (i - offset + total * 10) % total;
              const isActive = logicalIndex === activeIndex;
              return (
                <div
                  key={`${modelo.slug}-${i}`}
                  className="flex-shrink-0 flex flex-row items-center gap-4 lg:gap-8 px-4 sm:px-6 lg:px-10"
                  style={{ width: cardWidth || `${100 / visibleCount}%` }}
                >
                  {/* Prancha + refleto */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    {/* Wrapper com zoom no hover */}
                    <div
                      className="relative overflow-hidden"
                      style={{
                        width: visibleCount === 1 ? 140 : visibleCount === 2 ? 130 : 120,
                      }}
                    >
                      <motion.div
                        className="relative"
                        style={{ height: visibleCount === 1 ? 320 : 360 }}
                        whileHover={prefersReduced ? {} : { scale: 1.06 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <Image
                          src={modelo.mockupFront}
                          alt={`Prancha ${modelo.nome}`}
                          fill
                          sizes="(max-width: 640px) 140px, (max-width: 1024px) 130px, 120px"
                          className="object-contain"
                          priority={isActive}
                        />
                      </motion.div>

                      {/* Refleto */}
                      <div
                        className="relative overflow-hidden"
                        aria-hidden="true"
                        style={{ height: 64 }}
                      >
                        <Image
                          src={modelo.mockupFront}
                          alt=""
                          fill
                          sizes="120px"
                          className="object-contain object-top"
                          style={{ transform: "scaleY(-1)", transformOrigin: "top" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-frog-ink/80 to-frog-ink" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col gap-3 min-w-0 flex-1">
                    {/* Logo */}
                    <div
                      className="relative"
                      style={{ height: 64, maxWidth: 160 }}
                    >
                      <Image
                        src={modelo.logo}
                        alt={`Logo ${modelo.nome}`}
                        fill
                        sizes="160px"
                        className="object-contain object-left"
                      />
                    </div>

                    {/* Badge */}
                    {modelo.statusConteudo === "em-validacao" && (
                      <span className="font-sans text-xs text-frog-yellow/80 border border-frog-yellow/30 px-2 py-0.5 rounded-full w-fit">
                        Em breve
                      </span>
                    )}

                    {/* Headline */}
                    <p className="font-heading text-white uppercase tracking-wide text-sm sm:text-base leading-snug">
                      {modelo.descricaoCurta}
                    </p>

                    {/* CTA */}
                    <Link
                      href={modelHref(modelo.slug)}
                      className="inline-block w-fit font-sans text-white text-xs uppercase tracking-wider px-4 py-2.5 hover:opacity-80 transition-opacity duration-200"
                      style={{ backgroundColor: modelo.acento, borderRadius: "4px" }}
                    >
                      CONHEÇA A {modelo.nome.toUpperCase()}
                    </Link>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Seta direita */}
        <button
          onClick={next}
          aria-label="Próximo modelo"
          className="absolute right-2 sm:right-4 z-20 text-white/40 hover:text-frog-green transition-colors duration-200"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {pranchas.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ver modelo ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === activeIndex ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: i === activeIndex ? "#39F604" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

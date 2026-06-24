"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { depoimentos } from "@/data/depoimentos";

export default function HomeDepoimentos() {
  const [current, setCurrent] = useState(0);
  const prefersReduced = useReducedMotion();
  const total = depoimentos.length;

  function prev() { setCurrent((c) => (c - 1 + total) % total); }
  function next() { setCurrent((c) => (c + 1) % total); }

  const dep = depoimentos[current];

  return (
    <section
      className="py-20 px-6"
      style={{ background: "linear-gradient(to right, #262626, #424141)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <p className="font-sans font-semibold text-frog-green uppercase tracking-widest text-xs mb-4">
            DEPOIMENTOS
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
            QUEM SURFA UMA FROG, SEMPRE SURFARÁ UMA FROG
          </h2>
        </div>

        {/* Carrossel: seta esq | conteúdo | seta dir */}
        <div className="flex items-center gap-4 sm:gap-8">
          {/* Seta esquerda */}
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            className="flex-shrink-0 text-white/50 hover:text-frog-green transition-colors"
          >
            <ChevronLeft />
          </button>

          {/* Conteúdo central */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={prefersReduced ? false : { opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReduced ? {} : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center text-center gap-6"
              >
                {/* Foto quadrada */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 overflow-hidden rounded-lg flex-shrink-0">
                  <Image
                    src={dep.foto}
                    alt={dep.nome}
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>

                {/* Texto do depoimento */}
                <blockquote className="font-sans text-white/75 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{dep.texto}&rdquo;
                </blockquote>

                {/* Nome e @handle */}
                <div className="flex flex-col items-center gap-0.5">
                  <p className="font-sans font-bold text-white text-sm uppercase tracking-widest">
                    {dep.nome}
                  </p>
                  <a
                    href={dep.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-frog-green text-xs uppercase tracking-widest hover:underline"
                  >
                    {dep.handle}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Seta direita */}
          <button
            onClick={next}
            aria-label="Próximo depoimento"
            className="flex-shrink-0 text-white/50 hover:text-frog-green transition-colors"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-2 mt-8">
          {depoimentos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                i === current ? "bg-frog-green" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

// TODO: substituir por feed dinâmico via Instagram Graph API quando o token de longa duração
// estiver configurado (ver PENDENCIAS.md). Requer conta Business + Página do Facebook vinculada.

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type InstagramImage = {
  src: string;
  alt: string;
  href: string;
};

type Props = {
  images: InstagramImage[];
};

const INSTAGRAM_URL = "https://www.instagram.com/frog.surfboards/";

export default function HomeInstagramGallery({ images }: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-frog-ink py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-heading text-frog-green uppercase tracking-widest text-sm mb-2">
              INSTAGRAM
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-white uppercase tracking-wide leading-tight">
              FROG NO INSTAGRAM
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-heading uppercase tracking-widest text-sm px-7 py-3 hover:bg-white hover:text-frog-ink transition-colors duration-200 flex-shrink-0"
          >
            <InstagramIcon />
            SIGA A FROG
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-1.5 sm:gap-2">
          {images.map((img, i) => (
            <motion.a
              key={img.src}
              href={img.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver no Instagram: ${img.alt}`}
              className="block relative aspect-square overflow-hidden group"
              initial={prefersReduced ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ASSUNTOS = [
  "Já sei o modelo e as medidas da minha nova prancha",
  "Já sei o modelo, tenho dúvida com as medidas",
  "Preciso de ajuda para definir o modelo ideal para mim",
] as const;

type Assunto = (typeof ASSUNTOS)[number];

export default function HomeContatoRapido() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState<Assunto | null>(null);
  const [erro, setErro] = useState("");
  const prefersReduced = useReducedMotion();

  function handleEnviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !assunto) {
      setErro("Por favor, preencha seu nome e escolha um assunto antes de continuar.");
      return;
    }
    setErro("");
    const mensagem = `Olá! Meu nome é ${nome.trim()}. ${assunto}.`;
    const url = `https://wa.me/5512997060472?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-frog-cream py-20 px-6">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={prefersReduced ? false : { y: 24 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <div className="text-center mb-10">
          <p className="font-heading text-frog-ink/50 uppercase tracking-widest text-sm mb-3">
            CONTATO DIRETO
          </p>
          {/* [PROPOSTA] título da seção */}
          <h2 className="font-heading text-4xl sm:text-5xl text-frog-ink uppercase tracking-wide leading-tight">
            FALE COM O SHAPER
          </h2>
          <p className="font-sans text-frog-ink/70 mt-4 text-base max-w-md mx-auto">
            Conta pra gente onde você está no surf — o Sergio responde pelo WhatsApp e te ajuda a escolher a prancha certa.
          </p>
        </div>

        <form onSubmit={handleEnviar} noValidate className="flex flex-col gap-6">
          {/* Campo Nome */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome-shaper" className="font-heading uppercase tracking-wider text-frog-ink text-sm">
              Seu nome
            </label>
            <input
              id="nome-shaper"
              type="text"
              value={nome}
              onChange={(e) => { setNome(e.target.value); setErro(""); }}
              placeholder="Como você se chama?"
              className="w-full bg-white border-2 border-frog-ink/15 focus:border-frog-green outline-none px-4 py-3 font-sans text-frog-ink placeholder:text-frog-ink/35 transition-colors duration-200"
              autoComplete="given-name"
            />
          </div>

          {/* Seleção de assunto */}
          <fieldset>
            <legend className="font-heading uppercase tracking-wider text-frog-ink text-sm mb-3">
              O que você precisa?
            </legend>
            <div className="flex flex-col gap-3">
              {ASSUNTOS.map((op) => {
                const selecionado = assunto === op;
                return (
                  <button
                    key={op}
                    type="button"
                    onClick={() => { setAssunto(op); setErro(""); }}
                    className={`text-left px-5 py-4 font-sans text-sm border-2 transition-all duration-200 ${
                      selecionado
                        ? "border-frog-green bg-frog-green/10 text-frog-ink font-semibold"
                        : "border-frog-ink/20 bg-white text-frog-ink/70 hover:border-frog-green/50 hover:text-frog-ink"
                    }`}
                    aria-pressed={selecionado}
                  >
                    {selecionado && (
                      <span className="inline-block w-2 h-2 rounded-full bg-frog-green mr-2 align-middle" aria-hidden="true" />
                    )}
                    {op}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Mensagem de erro inline */}
          {erro && (
            <p role="alert" className="font-sans text-sm text-red-600">
              {erro}
            </p>
          )}

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-frog-green text-frog-ink font-heading uppercase tracking-widest text-base py-4 hover:bg-frog-green/90 transition-colors duration-200 flex items-center justify-center gap-3"
          >
            <WhatsAppIcon />
            FALAR COM O SHAPER
          </button>
        </form>
      </motion.div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

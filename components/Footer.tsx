import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  function lh(path: string) {
    return locale === "pt" ? path : `/${locale}${path}`;
  }

  return (
    <footer className="bg-frog-ink text-white">
      <div className="mx-auto max-w-7xl px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Col 1: Logo grande + redes sociais */}
          <div className="flex flex-col items-center gap-8">
            <Link href={lh("/")} aria-label="Frog Surfboards — página inicial">
              <Image
                src="/Logo-Principal-Branco.png"
                alt="Frog Surfboards"
                width={220}
                height={260}
                className="w-48 lg:w-56 h-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-5">
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
            </div>
          </div>

          {/* Col 2: FALE COM O SHAPER + contatos + endereço */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-3xl text-white uppercase tracking-wide leading-none mb-3">
                FALE COM O SHAPER
              </h2>
              <Image
                src="/flag-brazil.webp"
                alt="Bandeira do Brasil"
                width={36}
                height={24}
                className="w-9 h-auto"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <a
                href="https://wa.me/5512997060472"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/85 hover:text-frog-green transition-colors"
              >
                <WhatsAppIcon />
                <span className="text-base">+55 12 99706-0472</span>
              </a>
              <a
                href="tel:+5512997060472"
                className="flex items-center gap-3 text-white/85 hover:text-frog-green transition-colors"
              >
                <PhoneIcon />
                <span className="text-base">+55 12 99706-0472</span>
              </a>
              <a
                href="mailto:contato@frogsurfboards.com.br"
                className="flex items-center gap-3 text-white/85 hover:text-frog-green transition-colors"
              >
                <MailIcon />
                <span className="text-base uppercase tracking-wide">
                  contato@frogsurfboards.com.br
                </span>
              </a>
            </div>

            <div className="text-base text-white/80 leading-relaxed pt-2">
              <p>
                <strong className="text-white">Endereço:</strong>
              </p>
              <p>Rua Olímpio R. César, 404</p>
              <p><strong className="text-white">Praia de Maresias</strong></p>
              <p>São Sebastião – São Paulo – Brasil</p>
            </div>
          </div>

          {/* Col 3: NAVEGUE */}
          <div>
            <h2 className="font-heading text-3xl text-white uppercase tracking-wide leading-none mb-8">
              NAVEGUE
            </h2>
            <nav aria-label="Links do rodapé">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href={lh("/pranchas")} className="text-base text-white/80 hover:text-frog-green transition-colors">
                    Pranchas
                  </Link>
                </li>
                <li>
                  <Link href={lh("/sobre")} className="text-base text-white/80 hover:text-frog-green transition-colors">
                    Sobre a Frog
                  </Link>
                </li>
                <li>
                  <Link href={lh("/contato")} className="text-base text-white/80 hover:text-frog-green transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-2 mt-5">
                <li>
                  <Link href={lh("/duvidas")} className="text-base text-white/80 hover:text-frog-green transition-colors">
                    Dúvidas
                  </Link>
                </li>
                <li>
                  <Link href={lh("/como-comprar")} className="text-base text-white/80 hover:text-frog-green transition-colors">
                    Como Comprar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Linha legal */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/55">
          <span>© 2026. Frog Surfboards. Todos os direitos reservados.</span>
          <span>
            <Link href={lh("/politica-de-privacidade")} className="underline underline-offset-2 hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            {" "}e{" "}
            <Link href={lh("/politica-de-cookies")} className="underline underline-offset-2 hover:text-white transition-colors">
              Políticas de Cookies.
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" className="flex-shrink-0 opacity-80">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="flex-shrink-0 opacity-80">
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" className="flex-shrink-0 opacity-80">
      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  );
}

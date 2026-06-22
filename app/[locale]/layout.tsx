import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";

/*
 * Bebas Neue (local .otf) — fonte de títulos atual da marca.
 *
 * Para adicionar pesos extras (Light/Regular/Book) quando a Viviana fornecer os arquivos,
 * inclua entradas em `src` aqui e ajuste os pesos.
 *
 * Para trocar para Bebas Neue Pro via Adobe Fonts Web Project no futuro:
 *   1. Remova este bloco localFont.
 *   2. Adicione o <link> do kit Adobe Fonts no <head>.
 *   3. Mude `variable: "--font-display"` para a var desejada — ou mantenha --font-display
 *      apontando para o font-family do kit Adobe. O resto do código não muda.
 */
const bebas = localFont({
  src: "../fonts/BebasNeue-Bold.otf",
  variable: "--font-display",
  weight: "700",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
});

const locales = ["pt", "en", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://frogsurfboards.com.br"),
  title: {
    template: "%s · Frog Surfboards",
    default: "Frog Surfboards",
  },
  description:
    "Pranchas de surf artesanais com mais de 25 anos de técnica, conexão e amor pelo surf. Conheça os modelos Frog Surfboards.",
  openGraph: {
    siteName: "Frog Surfboards",
    images: [{ url: "/Favico.png", width: 512, height: 512 }],
  },
  icons: {
    icon: "/Favico.png",
    apple: "/Favico.png",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${bebas.variable} ${openSans.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

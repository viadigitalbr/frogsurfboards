import type { Metadata } from "next";
import { Oswald, Open_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CookieConsent from "@/components/CookieConsent";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
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
      className={`${oswald.variable} ${openSans.variable}`}
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

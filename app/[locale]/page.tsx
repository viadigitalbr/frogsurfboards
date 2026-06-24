import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomePranchas from "@/components/home/HomePranchas";
import HomeSobre from "@/components/home/HomeSobre";
import HomeDepoimentos from "@/components/home/HomeDepoimentos";
import HomeContatoRapido from "@/components/home/HomeContatoRapido";
import HomeInstagramGallery, {
  type InstagramImage,
} from "@/components/home/HomeInstagramGallery";

export const metadata: Metadata = {
  title: "Frog Surfboards — Pranchas Artesanais com 25 Anos de Mar",
  description:
    "Pranchas de surf sob medida criadas por Sergio Frog — 25 anos de técnica, escuta ativa e amor pelo surf. Conheça os modelos e fale direto com o shaper.",
  openGraph: {
    title: "Frog Surfboards",
    description:
      "A prancha certa pode transformar seu surf. Conheça os modelos Frog Surfboards.",
    images: [{ url: "/images/hero-poster.jpg", width: 1200, height: 800 }],
  },
};

// Galeria estática do Instagram — imagens de ../Midias/Instagram (12 = mais recente → 1 = mais antiga).
// Substituir por dados reais da Graph API quando o token estiver pronto (ver PENDENCIAS.md).
// 15 imagens = 3 linhas × 5 colunas no desktop (múltiplo de 5). Mais recentes primeiro.
const instagramImages: InstagramImage[] = [
  { src: "/images/instagram/12.jpg",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DZIOcf4CCWf/" },
  { src: "/images/instagram/11.webp", alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DZIH8AFEc6N/?img_index=1" },
  { src: "/images/instagram/10.webp", alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DXcYCiEkU_6/?img_index=1" },
  { src: "/images/instagram/9.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DUJl5XnkcF5/?img_index=1" },
  { src: "/images/instagram/8.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DSTP9FpkQTT/?img_index=1" },
  { src: "/images/instagram/7.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DQcmdDkkkrM/?img_index=1" },
  { src: "/images/instagram/6.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DQK72a8jGo0/?img_index=1" },
  { src: "/images/instagram/5.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DPO4WkdET3m/?img_index=1" },
  { src: "/images/instagram/4.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DO82J51kTBs/?img_index=1" },
  { src: "/images/instagram/3.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DOZchqHkdkz/?img_index=5" },
  { src: "/images/instagram/2.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DN3jvKH4kIi/?img_index=5" },
  { src: "/images/instagram/1.webp",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DNRXA17JUJR/?img_index=5" },
  { src: "/images/instagram/-1.jpg",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DLDQTdWp77p/?img_index=1" },
  { src: "/images/instagram/-2.png",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DH9T2CJpIPe/?img_index=1" },
  { src: "/images/instagram/-3.jpg",  alt: "Frog Surfboards no Instagram", href: "https://www.instagram.com/p/DBZrZIspoXk/?img_index=1" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero
        desktopSrc="/videos/hero.mp4"
        mobileSrc="/videos/hero.mp4"
        poster="/images/hero-poster.jpg"
      />
      <HomePranchas />
      <HomeSobre />
      <HomeDepoimentos />
      <HomeContatoRapido />
      <HomeInstagramGallery images={instagramImages} />
    </>
  );
}

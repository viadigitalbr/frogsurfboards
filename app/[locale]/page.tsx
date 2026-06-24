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

// Fotos escolhidas para a galeria estática do Instagram.
// Critério: alto contraste, cenas de surf/ateliê/mar — todas de ../Midias/Imagens.
// Substituir por dados reais da Graph API quando o token estiver pronto (ver PENDENCIAS.md).
const instagramImages: InstagramImage[] = [
  { src: "/images/instagram/ig-01.jpg", alt: "Surf em Maresias" },
  { src: "/images/instagram/ig-02.jpg", alt: "Surfista em ação" },
  { src: "/images/instagram/ig-03.jpg", alt: "Frog Surfboards em Maresias — sessão com Jo Paiva" },
  { src: "/images/instagram/ig-04.jpg", alt: "Frog Surfboards em Maresias — sessão com Jo Paiva" },
  { src: "/images/instagram/ig-05.jpg", alt: "Prancha Frog no mar" },
  { src: "/images/instagram/ig-06.jpg", alt: "Ateliê Frog Surfboards" },
  { src: "/images/instagram/ig-07.jpg", alt: "Sessão de surf Frog" },
  { src: "/images/instagram/ig-08.jpg", alt: "Shape Frog Surfboards" },
  { src: "/images/instagram/ig-09.jpg", alt: "Frog Surfboards" },
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

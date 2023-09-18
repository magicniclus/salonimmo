import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoBanner from "../components/VideoBanner";
import LeftTextSection from "../components/LeftTextSection";
import RightTextSection from "../components/RightTextSection";
import Comments from "../components/Comments";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Cookies from "../components/Cookies";
import BrochureBanner from "../components/BrochureBanner";
import Galerie from "../components/Galerie";
import React, { useEffect } from "react";
import Router from "next/router";
import TwoImagesBanner from "../components/TwoImagesBanner";
import FourImagesBanner from "../components/FourImagesBanner";
import JeuxConcour from "../components/JeuxConcour";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Salon de l'Immobilier Bordeaux | Découvrez nos programme immobiliers
          en bord de mer
        </title>
        <meta
          name="description"
          content="Salon de l'Immobilier Bordeaux | Découvrez nos programme immobiliers en bord de mer | Signature Promotion"
        />
        <link
          rel="icon"
          href="https://www.signature-promotion.fr/wp-content/themes/signature/images/favicon.ico"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <TwoImagesBanner />
        <VideoBanner />
        <FourImagesBanner />
        <Banner />
        <JeuxConcour />
        <Comments />
      </main>
      <Footer />
      <Cookies />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MerciContainer from "../../components/MerciContainer";

const index = () => {
  useEffect(() => {
    setTimeout(() => {
      const link = document.getElementById("hiddenDownloadLink");
      link.click();
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>CAMBIUM | Merci</title>
        <meta
          name="description"
          content="Cambium, la nouvelle résidence disponible à BREUILLET. Maison neuve à partir de 250000€. Contactez-nous pour plus d'informations."
        />
        <link
          rel="icon"
          href="https://www.signature-promotion.fr/wp-content/themes/signature/images/favicon.ico"
        />
      </Head>
      <Header />
      <main className="flex flex-col z-50">
        <MerciContainer />
      </main>
      <Footer />
      <a
        href="https://firebasestorage.googleapis.com/v0/b/breuillet-47fdc.appspot.com/o/INVITATION-EXPOSANT-2023-SIGNATURE-PROMOTION-standA13.pdf?alt=media&token=5a7627a6-e3f9-4bd2-b2be-6f550a9c1b24"
        download
        target="_blank"
        id="hiddenDownloadLink"
        style={{ display: "none" }}
      >
        Download
      </a>
    </>
  );
};

export default index;

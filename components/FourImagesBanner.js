import React from "react";

const FourImagesBanner = () => {
  return (
    <div className="lg:mt-14 w-full mx-auto max-w-7xl flex flex-col justify-between items-center z-10 overflow-hidden lg:py-10">
      <div className="flex lg:flex-row flex-col justify-between w-full relative lg:px-4">
        {/* <img
          className="lg:w-[24%] h-[600px] w-full object-cover lg:block hidden"
          src="/IMG/atlantique-breuillet-cambium.jpg"
          alt="résidence"
        />
        <img
          className="lg:w-[24%] h-[600px] w-full object-cover lg:block hidden "
          src="/IMG/atlantique-gujan-lestran.jpg"
          alt="résidence"
        />
        <img
          className="lg:w-[24%] h-[600px] w-full object-cover lg:block hidden"
          src="/IMG/atlantique-lacanau-ocean-swell.jpg"
          alt="résidence"
        />
        <img
          className="lg:w-[24%] h-[600px] w-full object-cover lg:block hidden"
          src="/IMG/atlantique-lacanau-ville-collection.jpg"
          alt="résidence"
        /> */}
        <img
          className="lg:w-full h-[600px] w-full object-cover lg:block hidden"
          src="/IMG/bandeau-img.jpg"
          alt="résidence"
        />
        <img
          className="lg:w-[24%] h-[600px] w-full object-cover lg:hidden block"
          src="/IMG/progr-cote-atlantique.jpg"
          alt="résidence"
        />
      </div>
      <div className="w-full bg-green py-10  px-3 lg:px-10 relative">
        <h2 className="text-blue text-xl lg:text-4xl font-vidaloka">
          JETEZ-VOUS À L’EAU CÔTÉ ATLANTIQUE
        </h2>
        <p className="text-white text-xl lg:text-2xl font-bold">
          plages de sable fin, espaces naturels exceptionnels, centres-villes
          vivants toute l’année...
        </p>
        <div className="lg:absolute right-10 flex flex-row lg:flex-col lg:top-36 lg:transform lg:-translate-y-1/2 lg:mt-0 mt-5">
          <img src="/IMG/PTZ-BLEU.png" alt="logo" className="lg:w-24 w-16 " />
        </div>
        <h3 className=" text-xl lg:text-2xl text-blue mt-10 font-bold">
          LACANAU, CARCANS, GUJAN-MESTRAS, LÈGE CAP-FERRET, ROYAN ATLANTIQUE
        </h3>
        <ul className="text-blue">
          <li>▶ Maison ou appartement, 2 à 5 pièces, faites votre choix.</li>
          <li>▶ Plages à 10 min.</li>
          <li>▶ Commerces et services accessibles à pied ou à vélo.</li>
          <li>▶ Au cœur d’environnements naturels exceptionels</li>
        </ul>
        <div className="w-full flex justify-center">
          <a
            href="#form"
            className={`rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-7 font-raleway bg-blue hover:scale-105 transform transition-all duration-300 ease-in-out`}
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};

export default FourImagesBanner;

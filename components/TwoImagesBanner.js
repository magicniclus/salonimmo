import React from "react";

const TwoImagesBanner = () => {
  return (
    <div className="lg:mt-14 w-full mx-auto max-w-7xl flex flex-col justify-between items-center z-10 overflow-hidden lg:py-10">
      <div className="flex lg:flex-row flex-col justify-between w-full relative lg:px-4">
        <div className="flex flex-col lg:w-auto w-full lg:absolute top-14 lg:top-24 left-5 bg-blue lg:max-w-[90%] lg:bg-opacity-0 lg:px-2 lg:py-0 py-10">
          <div className="bg-blue w-content px-1 lg:w-auto w-[100%] font-bold">
            <h2 className="text-white text-xl lg:text-4xl">
              Devenir propriétaire à Bordeaux, c’est possible !
            </h2>
          </div>
          <div className="bg-blue w-content lg:w-max px-1 w-[90%] lg:mt-0 mt-7 font-bold">
            <h2 className="text-white text-2xl lg:text-4xl">
              OPTEZ POUR UN LOGEMENT NEUF À PRIX MAÎTRISÉ
            </h2>
          </div>
        </div>
        <img
          className="lg:w-[48%] w-full object-cover h-[600px] lg:h-auto"
          src="/IMG/img-bdx-responsive.jpg"
          alt="résidence"
        />
        <img
          className="lg:w-[48%] w-full object-cover lg:block hidden"
          src="/IMG/immeuble.png"
          alt="résidence"
        />
      </div>
      <div className="w-full bg-green py-10  px-3 lg:px-10 relative">
        <div className="absolute right-10 hidden lg:flex flex-col top-36 transform -translate-y-1/2">
          <img src="/IMG/PTZ-BLEU.png" alt="logo" className="lg:w-24 w-16 " />
          <img
            src="/IMG/TVA-REDUITE-BLEU.png"
            alt="logo"
            className="lg:w-24 w-16 mt-4"
          />
        </div>
        <h2 className="text-blue text-xl lg:text-4xl  font-vidaloka">
          DES ADRESSES BORDEAUX MÉTROPOLE
        </h2>
        <p className="text-white text-xl lg:text-2xl font-bold">
          éligibles aux aides financières pour devenir propriétaire et emménager
          dès 2024
        </p>
        <h3 className=" text-xl lg:text-2xl text-blue mt-10 font-bold">
          BORDEAUX PARC D’ARMAGNAC & FLOIRAC CENTRE-VILLE
        </h3>
        <ul className="text-blue">
          <li>▶ Tous les services et commerces accessibles à pied</li>
          <li>▶ Direction Bordeaux centre en tramway ou à vélo</li>
          <li>▶ Grandes terrasses avec vue sur parc de verdure</li>
          <li>▶ Large choix de configurations entre 2 et 5 pièces</li>
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

export default TwoImagesBanner;

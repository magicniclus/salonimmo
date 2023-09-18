import React from "react";

const JeuxConcour = () => {
  return (
    <section className="mt-10 w-full mx-auto max-w-7xl flex sm:flex-row flex-col bg-blue-200 justify-between items-center z-10 bg-blue px-7 py-14">
      <div className="lg:w-1/2 w-full">
        <h2 className="text-green text-4xl lg:text-6xl">JEU-CONCOURS</h2>
        <h3 className="text-white text-2xl lg:text-4xl mt-12 w-6/12 leading-loose">
          Planche de surf à gagner !
        </h3>
        <p className="text-white mt-12 w-6/12 lg:text-xl text-lg leading-loose">
          Venez compléter votre bulletin de participation pendant le Salon de
          l’Immo, stand A13
        </p>
        <div className="mt-12">
          <a
            href="#form"
            className={`rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 font-raleway bg-green hover:scale-105 transform transition-all duration-300 ease-in-out w-full text-center max-w-[80%]`}
          >
            Télécharger votre invitation
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center lg:mt-0 mt-20">
        <img src="/IMG/bendeau.png" className="w-96 h-auto" />
      </div>
    </section>
  );
};

export default JeuxConcour;

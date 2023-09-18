import React from "react";

const BrochureBanner = () => {
  return (
    <section className="mt-14 w-full mx-auto max-w-7xl flex sm:flex-row flex-col bg-blue-200 justify-between items-center z-10 bg-blue lg:max-h-[450px] overflow-hidden py-10">
      <div className="px-3 lg:px-7 py-10 lg:py-0 w-full flex lg:flex-row flex-col justify-between items-start lg:items-center">
        <h2 className="text-3xl font-bold font-raleway text-white">
          Décrouvrir les maisons <span className="text-or">CAMBIUM</span>
        </h2>
        <a
          href="#form"
          className={`h-max lg:mt-0 mt-5 rounded-md text-xl px-4 py-3 font-extrabold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-or font-raleway`}
        >
          Demander la brochure
        </a>
      </div>
    </section>
  );
};

export default BrochureBanner;

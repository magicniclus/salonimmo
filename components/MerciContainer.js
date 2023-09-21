import React from "react";

const MerciContainer = () => {
  const handleDownload = () => {
    const link = document.getElementById("hiddenDownloadLink");
    link.click();
  };

  return (
    <section
      className="min-h-[calc(100vh-150px)] w-full mx-auto max-w-7xl mt-10 lg:mt-0 p-0 sm:p-10 flex justify-center items-center"
      style={{ zIndex: "60" }}
    >
      <div className="min-h-[calc(100vh-150px)] w-full bg-green flex justify-center items-center">
        <div className="p-10 bg-green text-center">
          <h1 className="text-white text-4xl font-light text-center font-vidaloka">
            Merci,
          </h1>
          <div className="flex flex-col items-center">
            <button
              onClick={handleDownload}
              className="py-5 px-5 bg-blue text-white rounded-full z-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out mt-5 w-max"
            >
              Télécharger votre invitation
            </button>
            <a
              href="https://www.signature-promotion.fr/"
              className="text-white text-2xl font-raleway mt-5 inline-block"
            >
              Pour retourner à l'accueil,{" "}
              <span className="text-or font-vidaloka">cliquez ici</span>.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerciContainer;

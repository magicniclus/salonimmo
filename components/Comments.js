import { PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

const Comments = () => {
  return (
    <section className="mt-24 w-full mx-auto max-w-7xl flex lg:flex-row flex-col bg-blue-200 justify-between items-center z-10">
      <div className=" w-full flex flex-col mx-auto justify-center items-center">
        <h2 className="text-blue text-4xl text-center mt-5 lg:mt-0 mx-5 font-raleway font-bold">
          C’est nos clients qui en parlent le mieux !
        </h2>
        <div className="flex items-center">
          <img
            src="/images/logos/immodvisor.png"
            alt="immodvisor"
            className="w-14 mr-5"
          />
          <h3 className="text-blue font-raleway">
            Tous nos commentaires sont certifiés Immodvisor
          </h3>
        </div>
        <div className="w-full mt-10">
          <img
            src="/images/comments/avis1.png"
            alt="commantaire client"
            className="lg:w-7/12 w-full lg:mt-0 mt-10"
          />
          <div className="flex lg:justify-end">
            <img
              src="/images/comments/avis2.png"
              alt="commantaire client"
              className="lg:w-7/12 w-full lg:mt-0 mt-10"
            />
          </div>
          <img
            src="/images/comments/avis3.png"
            alt="commantaire client"
            className="lg:w-7/12 w-full lg:mt-0 mt-10"
          />
          <div className="lg:flex hidden lg:justify-end items-center mt-10">
            <img
              src="/images/comments/avis4.png"
              alt="commantaire client"
              className="lg:w-7/12 w-full"
            />
          </div>
          <div className="bg-blue mt-10 mb-10">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:py-24 lg:flex lg:items-center lg:justify-between lg:px-8 flex-col">
              <div className="flex justify-between lg:flex-row flex-col  w-full">
                <h2 className=" text-2xl tracking-tight text-or font-raleway text-green">
                  Vous avez un projet d'investissement immobilier ? <br />
                  Nous sommes là pour vous accompagner.
                  <br />
                  <span className="text-white font-bold mt-3 inline-block">
                    CONTACTEZ-NOUS !
                  </span>
                </h2>
                <div className="mt-10 flex flex-col gap-x-6 lg:mt-0 lg:flex-shrink-0">
                  <a
                    href="#form"
                    className="rounded-md text-xl px-4 py-3 font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mt-7 bg-or max-w-[250px] font-raleway bg-green"
                  >
                    Prendre rendez-vous !
                  </a>
                  <a
                    href="tel:0556367038"
                    className="text-xl leading-6 text-white flex mt-4 font-semibold font-lato"
                  >
                    <PhoneIcon className="h-6 w-auto mr-3 text-white" />
                    05 56 36 70 38
                  </a>
                </div>
              </div>
              <div className="mt-8 text-white text-xs">
                <p>
                  TVA réduite à 5,5% : taux de TVA réduit à 5.5% au lieu de 20%
                  appliqué sur le prix de vente d’un logement neuf, réservé à
                  certains biens immobiliers résidentiels et sous conditions
                  d’éligibilité, précisions auprès de nos conseillers. Il est à
                  noter que vous pouvez cumuler les avantages de la TVA réduite
                  à ceux du PTZ 2023.
                </p>
                <p>
                  PTZ : dispositif d’aide à l’accession à la propriété
                  permettant de bénéficier d’un prêt sans intérêt d’emprunt et
                  sans frais de dossier, attribué sous conditions de ressources
                  aux personnes n’ayant pas été propriétaires depuis au moins
                  deux ans. Voir conditions détaillées auprès de nos
                  conseillers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;

import { getDatabase, ref, set } from "firebase/database";
import { database } from "./firebase.config";
import axios from "axios";

export function writeUserData(userId, nom, prenom, email, telephone, civilite) {
  const dateEtHeure = new Date().toISOString();
  return new Promise((resolve, reject) => {
    set(ref(database, "contactsSalon2k23/" + userId), {
      nom,
      prenom,
      email,
      telephone,
      civilite,
      dateEtHeure,
    })
      .then(() => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function writeCRMUserData(nom, prenom, email, telephone, civilite) {
  const dateEtHeure = new Date().toISOString();

  // Structure des données pour l'API
  const contactData = {
    nom: nom,
    prenom: prenom,
    email: email,
    telephone_mobile: telephone,
    civilite: civilite,
    code_postal: "33000",
    demande: {
      date: dateEtHeure,
      // id_programme: 27,
      id_provenance: 22,
      id_provenance_precision: 152,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post("https://api.leizee.com/contacts", contactData, {
        auth: {
          username: "signaturepromotion-castera",
          password: "o53ifo07ox56511qv1m2473jijcg8d",
        },
      })
      .then((success) => {
        console.log(success);
        resolve("success");
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

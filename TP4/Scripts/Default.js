window.onload = function() {
    // Empêcher la soumission du formulaire en utilisant l'objet event (event object)
    var formulaire = document.getElementById("formulaire");
    formulaire.addEventListener("submit", function(e) {
        e.preventDefault();  // prevent default behaviour (submit)
    });

    // Création de la liste des voitures
    creerListeVoitures();

    // Bouton pour remplir et vider le formulaire automatiquement (pour le test)
    var btnModifieForm = document.getElementById("btnModifieForm");
    btnModifieForm.addEventListener("click", function(e) {
        if(e.target.innerText == "Remplir formulaire")
        {
            remplirFormulaire();
        }
        else
        {
            viderFormulaire();
        }
    });

    // Bouton de soumission du formulaire
    var btnSoumettre = document.getElementById("btnSoumettre");
    btnSoumettre.addEventListener("click", validerFormulaire);
 
    // Faciliter l'expérience de l'utilisateur (sans qu'il soit obligé de cliquer sur le 1er champ qui est le nom)
    document.getElementById("nom").focus();
}

// Créer la liste des marques
function creerListeVoitures() {
    var voitures, selectMarqueBlock, voitureChoisie, spanDistanceEstimee;

    voitures = Object.values(dictVoitures);
    selectMarqueBlock = document.getElementById("marque");
    
    voitures.forEach(voiture => {
        // voiture.info est le getter de la classe voiture
        selectMarqueBlock.innerHTML += "<option value=" + voiture.id + ">" + voiture.info + "</option>";
    });

    // On change, afficher les informations correspondantes ainsi que la ditance limite de la voiture (marque) choisie
    selectMarqueBlock.addEventListener("change", function() {
        voitureChoisie = dictVoitures[selectMarqueBlock.value];
        spanDistanceEstimee = document.getElementById("distanceEstimee");
        if(voitureChoisie != undefined) // au cas où l'utilisateur a choisi de nouveau la valeur 'Choisir une marque' 
                                        // cette condition évite le 'Uncaught TypeError' dans le console
        {
            spanDistanceEstimee.innerText = "La distance limite de circulation est de " + voitureChoisie.distanceLimitee + "km par jour";
            afficherInfoVoiture(voitureChoisie.marque, voitureChoisie.model, voitureChoisie.anneeConstruction, voitureChoisie.paysConstruction);
        }
        else // cacher les infos de la dernière voiture choisie au cas où l'utilisateur a choisi de nouveau 'Choisir une marque'
        {
            spanDistanceEstimee.innerText = "";
            document.getElementById("infosVoiture").innerHTML = "";
        }
    });
}

// Afficher l'information de la voiture choisie dans le select
function afficherInfoVoiture(marque, model, anneeConstruction, paysConstruction) {
    var blockInfosVoiture = document.getElementById("infosVoiture");
    blockInfosVoiture.innerHTML = "";
    blockInfosVoiture.innerHTML += "<ul>";
    blockInfosVoiture.innerHTML += "<li>Marque : " + marque + "</li>";
    blockInfosVoiture.innerHTML += "<li>Model : " + model + "</li>";
    blockInfosVoiture.innerHTML += "<li>Année de construction : " + anneeConstruction + "</li>";
    blockInfosVoiture.innerHTML += "<li>Pays de construction : " + paysConstruction + "</li>";
    blockInfosVoiture.innerHTML += "</ul>";
}

/* VALIDATIONS */

// Valider tous les champs dans le formulaire
function validerFormulaire() {
    var validerNom, validerPrenom, validerNumTel, validerDateNaissance, validerMarque, validerDistance;

    validerNom = validerNomClient();
    validerPrenom = validerPrenomClient();
    validerNumTel = validerNumTelClient();
    validerDateNaissance = validerDateNaissanceClient();
    validerMarque = validerMarqueVoiture();
    validerDistance = validerDistanceEstimee();

    if(validerNom && validerPrenom && validerNumTel && 
        validerDateNaissance && validerMarque && validerDistance)
    {
        desactiverChamps();
        reinitialiserFormulaire();
        
        // Afficher les infos de la voiture choisie 
        idVoitureChoisie = document.getElementById("marque").value;
        afficherInfosVoitureChoisie(idVoitureChoisie);

        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }
}

/* Section des informations personelles */

// Valider le nom
function validerNomClient() {
    var inputNom = document.getElementById("nom");
    var texteSaisie = inputNom.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputNom, "Le nom est obligatoire", "errNom");
        return false;
    }

    cacherMessageErreurs(inputNom, "errNom");
    return true;
}

// Valider le prénom
function validerPrenomClient() {
    var inputPrenom = document.getElementById("prenom");
    var texteSaisie = inputPrenom.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputPrenom, "Le prénom est obligatoire", "errPrenom");
        return false;
    }

    cacherMessageErreurs(inputPrenom, "errPrenom");
    return true;
}

// Valider le numéro de téléphone
function validerNumTelClient() {
   const pattern = /^\d{10}$/;
    var inputTelephone = document.getElementById("numTel");
    var texteSaisie = inputTelephone.value;

    if (!texteSaisie)
    {
        afficherMessageErreurs(inputTelephone, "Le champ numéro de téléphone est obligatoire", "errNumTel");
        return false;
    }

    if(!pattern.test(texteSaisie.replaceAll(" ", "")))
    {
        afficherMessageErreurs(inputTelephone, "Le champ numéro de téléphone doit contenir exactement 10 chiffres", "errNumTel");
        return false;
    }
    
    cacherMessageErreurs(inputTelephone, "errNumTel");
    return true; 
}

// Valider la date de naissance
function validerDateNaissanceClient() {
    // Day (DD) part => (0?[1-9]|1\d|2[0-9]|3(0|1)) : 1-31, en considérant que le zéro est optionnel si le jour tombre entre 1 et 9 (inclusive)
    // Month (MM) part => (0?[1-9]|1[0-2]) : 1-12
    // Year (YYYY) part => (19[0-9][0-9]|200[0-4]) : 1900-2004
    
    // Confirmed using https://regex101.com/
    const pattern = /^((0?[1-9]|1\d|2[0-9]|3(0|1))\-(0?[1-9]|1[0-2])\-(19[0-9][0-9]|200[0-4]))$/;

    var inputDateNaissance = document.getElementById("dateNaissance");
    var texteSaisie = inputDateNaissance.value;
    
    if(!texteSaisie)
    {
        afficherMessageErreurs(inputDateNaissance, "La date de naissance est obligatoire", "errDateNaissance");
        return false;
    }

    if(!pattern.test(texteSaisie))
    {
        afficherMessageErreurs(inputDateNaissance, "Svp entrer une date de naissance valide (âge : 18+)", "errDateNaissance");
        return false;
    }

    cacherMessageErreurs(inputDateNaissance, "errDateNaissance");
    return true;
}

/* Section des caractéristiques de la voiture */

// Valider la marque
function validerMarqueVoiture() {
    var marqueVoiture = document.getElementById("marque");
    if(marqueVoiture.value == "") {
        afficherMessageErreurs(marqueVoiture, "La marque est obligatoire", "errMarque");
        return false;
    }

    cacherMessageErreurs(marqueVoiture, "errMarque");
    return true;
}

// Valider la distance estimée
function validerDistanceEstimee() {
    const pattern = /^\d+$/;
    var blockSelectVoiture = document.getElementById("marque");
    var distanceEstimee = document.getElementById("distance");
    texteSaisie = distanceEstimee.value;
    
    if(!texteSaisie) {
        afficherMessageErreurs(distanceEstimee, "La distance est obligatoire", "errDistance");
        return false;
    }
    
    if(!pattern.test(texteSaisie.replaceAll(" ", ""))) // Enlever les espaces pour faciliter la saisie de l'utilisateur
    {
        afficherMessageErreurs(distanceEstimee, "La distance doit contenir juste des chiffres", "errDistance");
        return false;
    }

    if(dictVoitures[blockSelectVoiture.value] != undefined) // évite le 'Uncaught TypeError' au cas où l'utilisateur a choisi de nouveau 'Choisir une marque'
    {
        var distanceLimiteVoitureChoisie = dictVoitures[blockSelectVoiture.value].distanceLimitee;
        if(distanceLimiteVoitureChoisie < texteSaisie)
        {
            afficherMessageErreurs(distanceEstimee, "La distance estimée doit être inférieure à la distance limitée", "errDistance");
            return false;
        }
    }

    cacherMessageErreurs(distanceEstimee, "errDistance");
    return true;
}

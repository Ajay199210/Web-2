var caracteresInvalides = ['\'', '"', '<', '>', '/', '\\', ';'];

window.onload = function() {
    // Empêcher la soumission du formulaire en utilisant l'objet event (event object)
    var formulaire = document.getElementById("formulaire");
    formulaire.addEventListener("submit", function(e) {
        e.preventDefault();  // prevent default behaviour (submit)
    })

    // Bouton pour remplir le formulaire automatiquement
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

    // Bouton de l'ajout d'une adresse
    var btnAjouterAdresse = document.getElementById("btnAjouterAdresse");
    btnAjouterAdresse.addEventListener("click", AjouterAdresse);
    
    // Bouton de soumission du formulaire
    var btnSoumettre = document.getElementById("btnSoumettre");
    btnSoumettre.addEventListener("click", validerFormulaire);
 
    // Faciliter l'expérience de l'utilisateur (sans qu'il soit obligé de cliquer sur le 1er champ qui est le nom)
    document.getElementById("nom").focus();
}

// Remplir le formulaire automatiquement (pour le test)
function remplirFormulaire() {
    document.getElementById("nom").value = "Jhon";
    document.getElementById("prenom").value = "Doe";
    document.getElementById("codeEtudiant").value = "123456";
    document.getElementById("programmeEtude").value = "DAS";
    document.getElementById("tel").value = "418 123 4567";
    document.getElementById("courriel").value = "j.doe@exemple.com";
    document.getElementById("adresse").value = "100 Blossom St.";
    document.getElementById("raisonAbsence").value = "La raison était...";
    btnModifieForm.innerText = "Vider formulaire";
}

// Vider le formulaire
function viderFormulaire() {
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("codeEtudiant").value = "";
    document.getElementById("programmeEtude").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("courriel").value = "";
    document.getElementById("adresse").value = "";
    document.getElementById("raisonAbsence").value = "";
    btnModifieForm.innerText = "Remplir formulaire";
}

// Ajouter une nouvelle adresse
function AjouterAdresse() {
    var inputNouvelleAdresse = document.createElement("input");
    inputNouvelleAdresse.type = "text";
    inputNouvelleAdresse.className = "adresse"; // sert à valider tous les champs de l'adresse

    var inputAdresseActuel = btnAjouterAdresse.previousElementSibling;
    inputAdresseActuel.insertAdjacentElement('afterend', inputNouvelleAdresse); 

    inputNouvelleAdresse.focus(); 
}

// Valider que la saisie ne contient pas des caractères invalides
function validerCaracteresInvalides(texte)
{
    for(var caract of caracteresInvalides)
    {
        if(texte.includes(caract))
        {
            return false;
        }
    }
    return true;
}

/* VALIDATIONS */
/*
    • Nom ne doit pas être vide et ne doit pas dépasser 50 caractères
    • Prénom ne doit pas être vide et ne doit pas dépasser 50 caractères
    • Code étudiant ne doit pas être vide et doit contenir juste des chiffres. Le code est de 6 chiffres et ne doit pas commencer par 0
    • Programme d’étude ne doit pas être vide et ne doit pas dépasser 50 caractères
    • Téléphone doit être exactement 10 chiffres et formé seulement de chiffres 
    • Adresse courriel ne doit pas être vide et ne doit pas dépasser 50 caractères (pas besoin de valider le format de l’adresse courriel)
    • Adresse, la concaténation des valeurs dans les différents champs doit être non vide et ne doit pas dépasser 100 caractères
    • Raison ne doit pas être vide et ne doit pas dépasser 150 caractères.

    En plus de ces validations, les champs Adresse et Raison de doivent pas contenir les caractères suivants : ' " < > / \
*/

// Valider tous les champs dans le formulaire
function validerFormulaire() {
    var validerNom, validerPrenom, validerProgramme, validerTel, validerCourriel, validerAdresse, validerRaisonAbs;

    validerNom = validerNomEtudiant();
    validerPrenom = validerPrenomEtudiant();
    validerCode = validerCodeEtudiant();
    validerProgramme = validerProgrammeEtudiant();
    validerTel = validerTelEtudiant();
    validerCourriel = validerCourrielEtudiant();
    validerAdresse = validerAdresseEtudiant();
    validerRaisonAbs = validerRaisonAbsence();

    if(validerNom && validerPrenom && validerCode && validerProgramme && 
        validerTel && validerCourriel && validerAdresse && validerRaisonAbs)
    {
        var spnSuccess = document.getElementById("success");
        spnSuccess.innerText = "Le formulaire a été envoyé en succès !";

        // Désactiver tous les textboxs et textarea
        var inputs = document.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++)
        {
            inputs[i].classList.add("disable");
            inputs[i].setAttribute("disabled", "");
        }

        var textArea = document.getElementById("raisonAbsence");
        textArea.classList.add("disable");
        textArea.setAttribute("disabled", "");

        // Cacher les boutons 'Ajouter adresse', 'Soumettre' et le bouton de modification
        btnAjouterAdresse.classList.add("hidden");
        btnSoumettre.classList.add("hidden");
        btnModifieForm.classList.add("hidden");

        // Afficher le message (lien) pour envoyer un nouveau formulaire
        var lienNouvForm = document.getElementById("nouvForm");
        lienNouvForm.href = window.location.origin;
        lienNouvForm.classList.replace('hidden', 'block');
    }

    // Défilez automatiquement vers le haut de la page pour voir les résultats de la soumission du formulaire
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
}

// Afficher les messages d'erreurs s'il y en a
function afficherMessageErreurs(controle, msgErr, idSpanErr) {
    var spanMsgErr = document.getElementById(idSpanErr);
    spanMsgErr.innerText = msgErr;
    controle.classList.add("erreur");
}

// Cacher les messages d'erreurs correspondantes s'il y en a
function cacherMessageErreurs(controle, idSpanErr) {
    var spanMsgErr = document.getElementById(idSpanErr);
    spanMsgErr.innerText = "";
    controle.classList.remove("erreur");
}

// Valider le nom
function validerNomEtudiant() {
    var inputNom = document.getElementById("nom");
    var texteSaisie = inputNom.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputNom, "Le champ 'Nom' est obligatoire.", "errNom");
        return false;
    }

    if(texteSaisie.length > 50)
    {
        afficherMessageErreurs(inputNom, "Le texte saisi dans le champ ne doit pas dépasser les 50 caractères.", "errNom");
        return false;
    }

    cacherMessageErreurs(inputNom, "errNom");
    return true;
}

// Valider le prénom
function validerPrenomEtudiant() {
    var inputPrenom = document.getElementById("prenom");
    var texteSaisie = inputPrenom.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputPrenom, "Le champ 'Prénom' est obligatoire.", "errPrenom");
        return false;
    }

    if(texteSaisie.length > 50)
    {
        afficherMessageErreurs(inputPrenom, "Le texte saisi dans le champ ne doit pas dépasser les 50 caractères.", "errPrenom");
        return false;
    }

    cacherMessageErreurs(inputPrenom, "errPrenom");
    return true;
}

// Valider le code de l'étudiant
function validerCodeEtudiant() {
    var inputCode = document.getElementById("codeEtudiant");
    var texteSaisie = inputCode.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputCode, "Le champ 'Code étudiant' est obligatoire.", "errCode");
        return false;
    }

    if(texteSaisie.length != 6)
    {
        afficherMessageErreurs(inputCode, "Le champ 'Code étudiant' doit contenir exactement 6 chiffres.", "errCode");
        return false;
    }

    for(var caract of texteSaisie) {
        if(caract < "0" || caract > "9")
        {
            afficherMessageErreurs(inputCode, "Le champ 'Code étudiant' doit contenir seulement des chiffres.", "errCode");
            return false;
        }
    }

    if(texteSaisie.startsWith(0))
    {
        afficherMessageErreurs(inputCode, "Le champ 'Code étudiant' ne doit pas commencer par 0.", "errCode");
        return false;
    }
    
    cacherMessageErreurs(inputCode, "errCode");
    return true;
}

// Valider le programme d'étude
function validerProgrammeEtudiant() {
    var inputProgrammeEtude = document.getElementById("programmeEtude");
    var texteSaisie = inputProgrammeEtude.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputProgrammeEtude, "Le champ 'Programme d'étude' est obligatoire.", "errProgrammeEtude");
        return false;
    }

    if(texteSaisie.length > 50)
    {
        afficherMessageErreurs(inputProgrammeEtude, "Le texte saisi dans le champs ne doit pas dépasser 50 caractères.", "errProgrammeEtude");
        return false;
    }

    cacherMessageErreurs(inputProgrammeEtude, "errProgrammeEtude");
    return true;
}

// Valider le téléphone
function validerTelEtudiant() {
    const pattern = /^\d{10}$/;
    var inputTelephone = document.getElementById("tel");
    var texteSaisie = inputTelephone.value;

    if (!texteSaisie)
    {
        afficherMessageErreurs(inputTelephone, "Le champ 'Téléphone' est obligatoire.", "errTel");
        return false;
    }

    if(!pattern.test(texteSaisie.replaceAll(" ", "")))
    {
        afficherMessageErreurs(inputTelephone, "Le champ 'Téléphone' doit contenir exactement 10 chiffres (pas de caractères).", "errTel");
        return false;
    }
    
    cacherMessageErreurs(inputTelephone, "errTel");
    return true;
}

// Valider l'adresse courriel
function validerCourrielEtudiant() {
    var inputCourriel = document.getElementById("courriel");
    var texteSaisie = inputCourriel.value;
    
    if(!texteSaisie)
    {
        afficherMessageErreurs(inputCourriel, "Le champ 'Adresse Courriel' est obligatoire.", "errCourriel");
        return false;
    }

    if(texteSaisie.length > 50)
    {
        afficherMessageErreurs(inputCourriel, "Le champ 'Adresse Courriel' ne doit pas dépasser les 50 caractères.", "errCourriel");
        return false;
    }

    cacherMessageErreurs(inputCourriel, "errCourriel");
    return true;
}

// Valider l'adresse (habitat)
function validerAdresseEtudiant() {
    var inputAdresse = document.getElementById("adresse"); // 1er champ (placeholder for the error message if any)
    var inputsAdresse = document.getElementsByClassName("adresse"); // autres champs optionnels

    // Helper function to add red style to every additional address input in case there's an error
    function afficherStyleErreur()
    {
        for(var inputAdresseActuel of inputsAdresse)
        {
            inputAdresseActuel.classList.add("erreur");
        }
    }

    // Helper function to remove red style to every additional address input style
    function cacherStyleErreur()
    {
        for(var inputAdresseActuel of inputsAdresse) 
        {
            inputAdresseActuel.classList.remove("erreur");
        }
    }

    var texteSaisie = "";
    for(var i = 0; i < inputsAdresse.length; i++)
    {
        texteSaisie += inputsAdresse[i].value;
    }

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputAdresse, "Le champ 'Adresse' est obligatoire.", "errAdresse");
        afficherStyleErreur();
        return false;
    }

    if(texteSaisie.length > 100)
    {
        afficherMessageErreurs(inputAdresse, "Le champ 'Adresse' ne doit pas dépasser 100 caractères.", "errAdresse");
        afficherStyleErreur();
        return false;
    }

    if(!validerCaracteresInvalides(texteSaisie))
    {
        const pattern = /['"<>/\\]/; // il suffit d'avoir au moin un seul caractère qui rend le champ invalide

        afficherMessageErreurs(inputAdresse, "Le champ 'Adresse' contient des caractères illégales !", "errAdresse");

        // La boucle facilite l'expérience de l'utilisateur pour lui montrer...
        // ...dans quel champ(s) il a entré des caractères illégales
        for (var i = 0; i < inputsAdresse.length; i++) {
            if(pattern.test(inputsAdresse[i].value))
            {
                inputsAdresse[i].classList.add("erreur");
            }
            else
            {
                inputsAdresse[i].classList.remove("erreur");
            }
        }
        return false;
    }

        cacherMessageErreurs(inputAdresse, "errAdresse");
        cacherStyleErreur();
        return true;
}

// Valider la raison d'absence
function validerRaisonAbsence() {
    var inputRaisonAbsence = document.getElementById("raisonAbsence");
    var texteSaisie = inputRaisonAbsence.value;

    if(!texteSaisie)
    {
        afficherMessageErreurs(inputRaisonAbsence, "Le champ 'Raison de l'absence' est obligatoire.", "errRaisonAbsence");
        return false;
    }

    if(texteSaisie.length > 150)
    {
        afficherMessageErreurs(inputRaisonAbsence, "Le champ 'Raison de l'absence' ne doit pas dépasser 150 caractères.", "errRaisonAbsence");
        return false;
    }

    if(!validerCaracteresInvalides(texteSaisie))
    {
        afficherMessageErreurs(inputRaisonAbsence, "Le champ 'Raison de l'absence' contient des caractères illégales !", "errRaisonAbsence");
        return false;
    }

    cacherMessageErreurs(inputRaisonAbsence, "errRaisonAbsence");
    return true;
}
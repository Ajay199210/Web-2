// Remplir le formulaire (pour le test)
function remplirFormulaire() {
    document.getElementById("nom").value = "Jhon";
    document.getElementById("prenom").value = "Doe";
    document.getElementById("numTel").value = "418 123 4567";
    document.getElementById("dateNaissance").value = "01-01-1992";
    document.getElementById("marque").value = 7; // Toyota Corolla 
    document.getElementById("distance").value = 150;
    document.getElementById("marque").dispatchEvent(new Event("change")); // Afin d'afficher les infos correspondantes de la voiture 
    btnModifieForm.innerText = "Vider formulaire";
}

// Vider le formulaire
function viderFormulaire() {
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("numTel").value = "";
    document.getElementById("dateNaissance").value = "";
    document.getElementById("marque").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("marque").dispatchEvent(new Event("change")); // cacher les infos correspondantes de la voiture 
    btnModifieForm.innerText = "Remplir formulaire";
}

// Désactiver tous les champs après une validatoin correcte
function desactiverChamps() {
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i < inputs.length; i++)
    {
        inputs[i].classList.add("disable");
        inputs[i].setAttribute("disabled", "");
    }

    document.getElementById("marque").classList.add("disable");
    document.getElementById("marque").setAttribute("disabled", "");

    // Cacher tous les boutons
    btnSoumettre.classList.add("hidden");
    btnModifieForm.classList.add("hidden");
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

// Afficher les informations de la voiture choisie selon l'id
function afficherInfosVoitureChoisie(id) {
    alert("Le formulaire est soumis avec succès !\nLa voiture choisie est : " + dictVoitures[id].info);
}

// Envoie un nouveau formulaire
function reinitialiserFormulaire() {
    var lienNouvForm = document.getElementById("nouvForm");
    // lienNouvForm.href = window.location.origin; // utile pour Live Server
    lienNouvForm.classList.replace("hidden", "block"); 
}

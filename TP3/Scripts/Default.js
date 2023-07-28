window.addEventListener("load", function() {
    creerListeCours();
    afficherEtudiants(listeEtudiants);
    this.document.getElementById("btnRecherche").addEventListener(
        "click", 
        rechercherEtudiants,
        false
    );
}, false);

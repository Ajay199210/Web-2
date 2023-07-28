class Etudiant {
    constructor(nom, prenom, formation, cours) {
        this.nom = nom; // string
        this.prenom = prenom; // string
        this.formation = formation; // string
        this.cours = cours; // dictionnaire puisqu'un cours est identifié par son nom (clé)
    }
}
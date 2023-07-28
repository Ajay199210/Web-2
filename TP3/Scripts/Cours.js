class Cours {
    constructor(nom, dateDebut, dateFin) {
        this.nom = nom; // string
        this.dateDebut = dateDebut; // string
        this.dateFin = dateFin; // string
    }

    get getCours() {
        return this.nom + "[" + this.dateDebut + " - " + this.dateFin + "]";
    }
}

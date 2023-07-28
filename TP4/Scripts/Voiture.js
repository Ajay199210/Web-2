class Voiture {
    constructor(id, marque, model, anneeConstruction, paysConstruction, distanceLimitee) {
        this.id = id; // nombre entier
        this.marque = marque; // string
        this.model = model; // string
        this.anneeConstruction = anneeConstruction; // nombre entier
        this.paysConstruction = paysConstruction; // string
        this.distanceLimitee = distanceLimitee; // nombre
    }

    get info() {
        return this.marque + " " + this.model + " - " + this.anneeConstruction;
    }
}

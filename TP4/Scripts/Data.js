// Liste des voitures
var dictVoitures = Object.fromEntries
(
    [
        new Voiture(1, "Mitsubishi", "Outlander", 2014, "Japon", 500),
        new Voiture(2, "SEAT", "Cordoba", 2017, "Espagne", 450),
        new Voiture(3, "SEAT", "Leon", 2011, "Espagne", 410),
        new Voiture(4, "VW", "Golf", 2015, "Allemagne", 725),
        new Voiture(5, "Peugot", "504", 2010, "France", 600),
        new Voiture(6, "Ford", "Focus", 2018, "États-Unis", 550),
        new Voiture(7, "Toyota", "Corolla", 2020, "Japon", 500),
        new Voiture(8, "Tesla", "Model 3", 2021, "États-Unis", 660),
        new Voiture(9, "Mazda", "CX-3", 2014, "Japon", 500),
        new Voiture(10, "Volvo", "S60", 2009, "Suède", 400)
    ].map(v => [v.id, v]) // Une voiture est identifiée par son id
); 

// Liste des cours
var web1 = new Cours("WebI", "2022-10-03", "2023-02-03");
var web2 = new Cours("WebII", "2023-02-05", "2023-05-03");
var bd1 = new Cours("BDI", "2022-10-03", "2023-02-03");
var bd2 = new Cours("BDII", "2023-02-05", "2023-05-03");
var poo1 = new Cours("POOI", "2022-10-03", "2023-02-03");
var poo2 = new Cours("POOII", "2023-02-05", "2023-05-03");

var listeCours = [web1, bd1, poo1, web2, bd2, poo2];
var listeCoursDict = Object.fromEntries(listeCours.map(c => [c.nom, c])); // un cours est identifié par son nom

// Liste des étudiants
var etudiant1 = new Etudiant("Robert", "Moor", "continue", [listeCoursDict["BDI"], listeCoursDict["POOI"]]);
var etudiant2 = new Etudiant("Aline", "Summer", "continue", [listeCoursDict["BDI"], listeCoursDict["WebII"], listeCoursDict["BDII"]]);
var etudiant3 = new Etudiant("Julie", "Darham", "normale", [listeCoursDict["WebI"], listeCoursDict["BDI"], listeCoursDict["POOI"]]);
var etudiant4 = new Etudiant("Charles", "Sun", "normale", [listeCoursDict["WebII"], listeCoursDict["BDII"]]);
var etudiant5 = new Etudiant("Emilie", "Brown", "normale", [listeCoursDict["WebI"]]);
var etudiant6 = new Etudiant("John", "Miller", "continue", [listeCoursDict["BDI"], listeCoursDict["POOI"]]);
var etudiant7 = new Etudiant("Thomas", "Wilson", "continue", [listeCoursDict["WebII"]]);
var etudiant8 = new Etudiant("Ronald", "Lee", "normale", [listeCoursDict["POOI"], listeCoursDict["BDII"]]);

var listeEtudiants = [etudiant1, etudiant2, etudiant3, etudiant4, etudiant5, etudiant6, etudiant7, etudiant8];

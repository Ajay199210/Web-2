// Créer le block des checkboxes pour les cours 
function creerListeCours() {
    var listeCoursBlock = document.getElementById("listeCours");
    listeCoursBlock.innerHTML +=  "<label for='listeCours'>Cours</label>";
    for(var i = 0; i < listeCours.length; i++) 
    {
        // Initialiser les attributs pour chaque input
        var inputID = 'checkFltrCours' + listeCours[i].nom;
        var inputValue = listeCours[i].nom;
        var inputName = inputID; // la valeur de l'attribut name est identique à celle de l'id
        var inputClassName = 'coursCheckbox';
        var inputCheckbox = "<input type='checkbox' id=" + "'"  + inputID + "'" + " value=" + "'" + inputValue + "'";
        inputCheckbox +=  " name=" + "'" + inputName + "'" + " class=" + "'" + inputClassName + "'" + ">";

        // Initialiser le label pour l'input (checkbox) correspondant
        var inputLabel = "<label for=" + "'" + inputName + "'" + "class = 'checkboxLabel'" + ">" + listeCours[i].nom + "</label>";

        // Afficher dynamiquement la liste des checkboxes pour tous les cours
        listeCoursBlock.innerHTML += inputCheckbox + inputLabel + "<br />";
    }
}

// Rendre la première lettre d'un mot en majuscule
function capitalize(word)
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Afficher la liste des étudiants dynamiquement
function afficherEtudiants(listeEtudiants) {
    var tableEtudiants = document.getElementById("tableEtudiants");
    tableEtudiants.innerHTML = "";
    var tableContents = "";
    var nomEtudiant, prenomEtudiant, formationEtudiant, coursEtudiant, infoEtudiant;

    // Table header
    tableContents += "<thead> <tr> <th>Nom</th> <th>Prénom</th> <th>Formation</th> <th>Cours</th> </tr> </thead>";

    // Table Body Start
    tableContents += "<tbody>";

    // Table contents (rows)
    for(var i = 0; i < listeEtudiants.length; i++)
    {
        nomEtudiant = listeEtudiants[i].nom;
        prenomEtudiant = listeEtudiants[i].prenom;
        formationEtudiant = listeEtudiants[i].formation;
        formationEtudiant = capitalize(formationEtudiant); // Afficher la première lettre de la formation en majuscule
        coursEtudiant = "";
        listeEtudiants[i].cours.forEach(cours => {
            coursEtudiant += cours.getCours + ", ";
        });

        // Afficher la table dynamiquement
        infoEtudiant = "<tr>";
        infoEtudiant += "<td>" + nomEtudiant + "</td>";
        infoEtudiant += "<td>" + prenomEtudiant + "</td>";
        infoEtudiant += "<td>" + formationEtudiant + "</td>";
        infoEtudiant += "<td>" + coursEtudiant + "</td>";
        infoEtudiant += "</tr>";
        tableContents += infoEtudiant;
    }

    // Table Body End
    tableContents += "</body>";

    // Afficher le contenu de la table (render the HTML)
    tableEtudiants.innerHTML += tableContents;
}

// Filtrer par nom
function filtrerParNom() {
    var etudiantsFiltresParNom = []; 
    var nomSaisi = document.getElementById("nom").value.toLowerCase().trim();
    if(nomSaisi)
    {
        for(var i = 0; i < listeEtudiants.length; i++)
        {
            var nomEtudiant = listeEtudiants[i].nom.toLowerCase();
            if(nomEtudiant.includes(nomSaisi))
            {
                etudiantsFiltresParNom.push(listeEtudiants[i])
            }
        }
        return etudiantsFiltresParNom;
    }
    return listeEtudiants;
}

// Filtrer par prénom
function filtrerParPrenom() {
    var etudiantsFiltresParPrenom = [];
    var prenomSaisi = document.getElementById("prenom").value.toLowerCase().trim();
    if(prenomSaisi)
    {
        for(var i = 0; i < listeEtudiants.length; i++)
        {
            var prenomEtudiant = listeEtudiants[i].prenom.toLowerCase();
            if(prenomEtudiant.includes(prenomSaisi))
            {
                etudiantsFiltresParPrenom.push(listeEtudiants[i]);
            }
        }
        return etudiantsFiltresParPrenom;
    }
    return listeEtudiants;
}

// Filtrer par formation
function filtrerParFormation() {
    var etudiantsFiltresParFormation = [];
    var formationSaisie = document.getElementById("formations").value;
    if(formationSaisie != "formations") // équivalent à "Toutes les formations"
    {
        for(var i = 0; i < listeEtudiants.length; i++)
        {
            if(listeEtudiants[i].formation == formationSaisie)
            {
                etudiantsFiltresParFormation.push(listeEtudiants[i]);
            }
        }
        return etudiantsFiltresParFormation;
    }
    return listeEtudiants;
}

// Filtrer par cours
function filtrerParCours() {
    var etudiantsFiltrersParCours = [];
    var checkedCours = [];
    var checkboxes = Array.from(document.getElementsByClassName("coursCheckbox"));

    // Vérifier d'abord quels sont les checkboxes qui sont cliqués (checked)
    checkboxes.forEach(checkbox => {
        if(checkbox.checked)
        {
            checkedCours.push(checkbox.value);
        }
    });

    // S'il y en a, on filtre les étudiants concernés
    if(checkedCours.length > 0)
    {
        for(var i = 0; i < listeEtudiants.length; i++)
        {
            for(var j = 0; j < listeEtudiants[i].cours.length; j++)
            {
               if(checkedCours.includes(listeEtudiants[i].cours[j].nom))
               {
                    etudiantsFiltrersParCours.push(listeEtudiants[i]);
               } 
            }
        }
        return etudiantsFiltrersParCours;
    }
    return listeEtudiants;
}

// La combinaison entre tous les critères de recherches
function rechercherEtudiants() {
    var etudiantsFiltres = []; // liste contenant tous les étudiants qui remplir la combinaison de tous les critères
    var criteresNom = filtrerParNom();
    var criteresPrenom = filtrerParPrenom();
    var criteresFormation =  filtrerParFormation();
    var criteresCours = filtrerParCours();

    for(var i = 0; i < listeEtudiants.length; i++)
    {
        if( criteresNom.includes(listeEtudiants[i]) 
            && criteresPrenom.includes(listeEtudiants[i]) 
            && criteresFormation.includes(listeEtudiants[i])
            && criteresCours.includes(listeEtudiants[i]) )
        {
            etudiantsFiltres.push(listeEtudiants[i]);
        }
    }
    afficherEtudiants(etudiantsFiltres);
}

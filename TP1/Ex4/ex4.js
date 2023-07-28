
// Exercice 4 : Compteur de catégories d’âge

// Créer une fonction qui reçoit en ensembleAges de nombres comme paramètre.
//  Ces nombres représentent l’âge des personnes qui veulent s’inscrire dans un club sportif.
//  Les personnes sont classées par catégories selon leurs âges :

// Les personnes de 11 ans et moins sont classés dans la catégorie ‘Enfants’
// Les personnes entre 12 et 17 ans sont classés dans la catégorie ‘Junior’
// Les personnes entre 18 et 45 ans sont classés dans la catégorie ‘Adultes’
// Les personnes en dessus de 46 ans sont classés dans la catégorie ‘Seniors’

// Voici les étapes nécessaires :
//     • Créez un ensembleAges qui contient des nombres (minimum 10 éléments)
//     • Affichez la valeur de l’ensembleAges dans la console du navigateur
//     • Créez une fonction qui reçoit un ensembleAges de nombres comme paramètre
//     • Dans la fonction créez un compteur pour chaque catégorie d’âge
//     • Ajoutez le code nécessaire pour vérifier chaque élément de l’ensembleAges passé en paramètre
//       et le classer dans la bonne catégorie (incrémenter le compteur de la catégorie d’âge convenable)
//     • La fonction doit à la fin afficher dans la console les nombre de personne 
//       dans chaque catégorie d’âge
//     • Appelez la fonction en lui passant l’ensembleAges crée dans le premier point comme paramètre

//**********************************************************************

// ensemble contenant différents âges
var ages = [13, 20, 18, 15, 37, 10, 8, 27, 65, 44, 30, 35, 60, -1, 0, 51, 52, 64];  // -1 et 0 sont dans la liste tester la fonction

// Fonction pour compter les catégories d'âges 
function compterCategoriesAges(ensembleAges)
{
    console.log(ensembleAges);
    var enfants = 0;
    var junior = 0;
    var adultes = 0;
    var seniors = 0;

    for(var i = 0; i < ensembleAges.length; i++)
    {
        var age = ensembleAges[i];
        if(age > 0 && age <= 11)
        {
            enfants++;
        }
        else if(age >=12 && age <= 17)
        {
            junior++;
        }
        else if(age >=18 && age <= 45)
        {
            adultes++;
        }
        else if (age >= 46)
        {
            seniors++;
        }
        else 
        {
            continue;
        }
    }
    console.log("Nombre de personnes dans la catégorie 'enfants' : " + enfants);
    console.log("Nombre de personnes dans la catégorie 'junior' : " + junior);
    console.log("Nombre de personnes dans la catégorie 'adultes' : " + adultes);
    console.log("Nombre de personnes dans la catégorie 'seniors' : " + seniors);
}

// Tester la fonction
compterCategoriesAges(ages);
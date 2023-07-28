
// Exercice 2 : Les majuscules et les minuscules

// Créez une liste de caractères qui contient des lettres en majuscules,
// des lettres en minuscule et des chiffres (pour faciliter l’exercice,
// nous n’allons pas considérer les caractères spéciaux). 

// Il faut créer une fonction pour calculer le nombre des lettres majuscules,
//  des lettre minuscules et des chiffres dans un ensembleCaracteres,
//  puis afficher le résultat dans la console du navigateur.

// Les étapes à faire :
//     • Créez un ensembleCaracteres de caractères qui contient des lettres majuscules,
//          des lettres minuscules et des chiffres (environs 10 éléments)
//     • Créez une fonction et appelez-là en lui passant l’ensemble créé dans l’étape précédente
//     • Créez dans la fonction une boucle qui traverse tous les éléments de l’ensemble et 
//          compte le totale des lettres minuscules, des lettres majuscules et des chiffres
//     • Afficher les résultats dans la console du navigateur.

//**********************************************************************

// Les ensembles contenant les nombres/caractères aléatoires
var ensemble1 = ["S", 4, "m", "i", "S", 1, "m", 0, "n", 1];
var ensemble2 = ["a", "B", "c", "D", "e", "F", -1, 0, 1];
var ensemble3 = [7, 5, 3, 1, 0];

// Fonction pour calculer le nombre des caractères dans chaque catégorie (majuscules, minuscules, chiffres)
function calculerMajMinChiffres(ensembleCaracteres)
{
    console.log(ensembleCaracteres);

    var nbMajuscules = 0;
    var nbMinuscules = 0;
    var nbChiffres = 0;

    for (var i in ensembleCaracteres) 
    {
        character = ensembleCaracteres[i];
        switch (character)
        {
            case Number(character):
                nbChiffres++;
                break;
            case character.toLowerCase():
                nbMinuscules++
                break;
            case character.toUpperCase():
                nbMajuscules++ 
                break;
        }
    }

    console.log("Nombre de majuscules : " + nbMajuscules);
    console.log("Nombre de minuscules : " + nbMinuscules);
    console.log("Nombre de chiffres : " + nbChiffres);
}

// Tester la fonction
calculerMajMinChiffres(ensemble1);
calculerMajMinChiffres(ensemble2);
calculerMajMinChiffres(ensemble3);
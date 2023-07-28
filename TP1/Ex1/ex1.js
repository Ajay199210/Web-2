
// Exercice 1 : Ensemble trié ou non trié

// Créez une fonction qui reçoit en paramètre un ensemble contenant des nombres.
// La fonction doit valider si les éléments de l’ensemble sont triés par ordre croissant ou décroissant ou non triés.
// NB : Le but n’est pas de trier l’ensemble mais simplement de faire la validation.

// Voici les étapes nécessaires :
//     • Créez un ensemble qui contient des nombres aléatoires
//     • Affichez la valeur de l’ensemble
//     • Créez la fonction qui fait la validation et qui affiche le message à l’utilisateur
//          si les éléments de l’ensemble sont triés par ordre croissant ou décroissant ou non triés.
//     • Appelez la méthode en lui passant comme paramètre l’ensemble créé dans le premier point

//**********************************************************************

// Les ensembles contenant les nombres aléatoires
var ensemble1 = [2, -34, 5, 53, 71, 17];
var ensemble2 = [1, 2, 3, 4, 5];
var ensemble3 = [13, 11, 10, 5];
var ensemble4 = [-1, 500, 750, 11300];
var ensemble5 = [120, 80, 75, 44, 12, 0, -1, -3];
var ensemble6 = [41, 22, 15, 710];

// Fonction de validation : ordre croissant, décroissant, non-trié
function checkIfSorted(ensembleNumerique)
{
    console.log(ensembleNumerique);

    var ordreCroissant = true;
    var ordreDecroissant = true;

    for(var i = 0; i < ensembleNumerique.length - 1; i++)
    {
        if(ensembleNumerique[i] < ensembleNumerique[i+1])
        {
            ordreDecroissant = false;
        }
        else if (ensembleNumerique[i] > ensembleNumerique[i+1])
        {
            ordreCroissant = false;
        }
    }
    
    if (ordreCroissant)
    {
        console.log("L'ensemble est triée par ordre croissant");
    } 
    else if (ordreDecroissant)
    {
        console.log("L'ensemble est triée par ordre décroissant");
    }
    else {
        console.log("L'ensemble n'est pas triée");
    }
}

// Tester la fonction
checkIfSorted(ensemble1);
checkIfSorted(ensemble2);
checkIfSorted(ensemble3);
checkIfSorted(ensemble4);
checkIfSorted(ensemble5);
checkIfSorted(ensemble6);
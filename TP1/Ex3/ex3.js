
// Exercice 3 : Validation d’une adresse IP

// Créer une fonction qui reçoit une chaîne de caractères comme paramètre
//  et qui valide si la chaine est une adresse IP correcte qui respecte les règles suivantes :
//     • Être formée exactement de quatre nombres séparés par un point
//     • Ces nombres doivent être entre 0 et 255

// Pour faciliter l’exercice, nous n’allons pas prendre en considération les caractères spéciaux,
//  de plus une fois qu’une validation échoue le traitement doit s’arrêter 

// Voici les étapes nécessaires :
//     • Créez une variable qui contient le une chaîne de caractères
//     • Affichez la valeur de la chaîne
//     • Créez une fonction qui reçoit une chaîne de caractères comme paramètre et
//      qui fait les différentes validations sur la chaîne pour vérifier 
//      si elle est une adresse IP correcte ou non 
//     • La fonction doit afficher le message si la chaîne est en bon format, sinon c’est quoi la raison
//     • Appelez la fonction en lui passant la chaîne crée dans le premier point comme paramètre

//**********************************************************************

// Déclaration des variables
var ip1 = "192.168.0.134";
var ip2 = "168.0.134";
var ip3 = "1192.168.0.134";
var ip4 = "1192.168.0.134";
var ip5 = "1192.168.0.1234";
var ip6 = "192.168.a.123b";
var ip7 = "127.0.0.1";

// Fonction pour valider le format d'un IPv4
function validerIP(ip) 
{
    console.log("IPv4 : " + ip);
    
    var adresseValide = false;
    var octets = ip.split(".");
    
    if (octets.length != 4)
    {
        console.log("[-] Une adresse IPv4 doit contenir 4 nombres (octets) exactement !");
    }
    else
    {
        for(var i = 0; i < 4; i++) // on est sûr qu'un IPv4 contient 4 nombres seulement
        {
            if(!isNaN(Number(octets[i])))
            {
                if(octets[i] < 0 || octets[i] > 255) // conversion implicite de string en entier
                {
                    console.log("[-] Un octet dans une adresse IPv4 doit contenir un nombre entre 0 et 255 !");
                    break;
                }
            }
            else
            {
                console.log("[-] Un octet dans une adresse IPv4 ne doit pas contenir des caractères !");
                break;
            }

            // On a validé le dernier octet, donc l'adresse IP est en bon format
            if(i == 3) 
            {
                adresseValide = true;
            }
        }

        if(adresseValide)
        {
            console.log("[+] " + ip + " est une adresse valide");
        }
    }
}

// Tester la fonction
validerIP(ip1); // adresse valide
validerIP(ip2); // doit contenir 4 octets exactement
validerIP(ip3); // doit contenir 4 octets exactement
validerIP(ip4); // octet entre 0 & 255
validerIP(ip5); // octet entre 0 & 255
validerIP(ip6); // contient des caractères
validerIP(ip7); // adresse valide
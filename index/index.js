var largeur = 30;
var longeur = 40;
var hauteur = 50;

var volume = 0;

var volume = largeur * longeur * hauteur;
console.log(volume);

let age = 2;
// si age est strictement inferieur a 5 afficher le mot bébé
// si age est compris entre 5 et 10 afficher le mot enfant
// si age est compris entre 11 et 18 afficher le mot ado
// si age est superieur a 18 afficher le mot vieux

if (age < 5) {
  console.log("bébé");
}

if (age > 5 && age < 10) {
  console.log("enfant");
}
if (age > 11 && age < 18) {
  console.log("age");
}
if (age > 18) {
  console.log("vieux");
}

// en utilisant la structure conditionnelle switch
// ecrire un programme afficher le jour de la semain en fonction d'un nombre donné
// si un nombre =0 afficher dimanche

// en utilisanr la ternaire ecrire un programme qui affiche adulte si l'age est superieur ou a 18 et mineur si age est inferieur a 18
// une
let nombre = 0;
switch (nombre) {
  case 0:
    console.log("dimanche");
    break;
  case "cas2":
    // code a executer
    break;
  default:
  // code a executer
}

// // exemple du break=> arreter l'execution de la boucle si la variable i egale 4
// for( let i = 0 <10; i++)
// {
//   console.log(i); //affiche i
//   if ( i== 4){// si i = 4
//     break; //sortie de la boucle
//   }
// }

// //exemple du continue => on souhaite afficher que les nombres paire entre 0 et 10
// for( let i = 0; i<= 10; i++){
//   if( i%2 !==0){
//     console.log(i);
//   }
// }

// let tab = ["alin" , 45];// [ "alin", 45]
// tab[3] ="2rue de l'amour"//["alin", 45, "", "2 rue de l'amour"]
// // vue que le tableau n'a pas d'indice 2 et 3 met l'indice 2 a vide et l'indince 3 avec la valeur
// console.log(tab);
// tab.push("0678458555")
// //"06784585"]
// console.log(tab);
// tab.unshift("johanne")

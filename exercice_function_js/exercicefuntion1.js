// Write a maxmin function which takes three parameters
// The first two are numbers (a and b)
// The third a Boolean (C)
// DEFAULT THE THIRD PARAMETER (C = True)
// If the parameter C = True the function returns the maximum between A and B
// If the parameter C = False the function returns the minimum between A and B
//example
// maxmin (2, 5, true) => 5
// maxmin (2, 5, false) => 2

// // Exo 1
// functionmaxMin(a, b, c=true) {​​​​​​​​
// if (c==true) {​​​​​​​​ // si c == true
// if (a>b) {​​​​​​​​ // si a plus grand que b
// returna; // on retourne a
//  }​​​​​​​​ else {​​​​​​​​ // sinon
// returnb; // on retourne b
//  }​​​​​​​​
//  }​​​​​​​​
// else {​​​​​​​​ // si c = false
// if (a<b) {​​​​​​​​ // si a est plus petit que b
// returna; // on retourne a
//  }​​​​​​​​ else {​​​​​​​​ // sinon
// returnb; // on retourne b
//  }​​​​​​​​
//  }​​​​​​​​
// }​​​​​​​​
// letresultat=maxMin(3, 8, true);
// console.log(resultat);

// // on retourne a si (c = true et a > b) ou (c = false et a < b)
// // on retourne b si (c = true et a < b) ou (c = false et a > b)
// functionmaxMin(a, b, c=true) {​​​​​​​​
// if (((c==true) && (a>b)) || ((c==false) && (a<b))) {​​​​​​​​
// returna;
//  }​​​​​​​​ elseif (((c==true) && (a<b)) || ((c==false) && (a>b))) {​​​​​​​​
// returnb;
//  }​​​​​​​​
// }​​​​​​​​

letresult = maxMin(3, 8, false);
console.log(result);

function sommeTab(tableau) {
  let somme = 0;

  let i = 0;
  while (i < tableau.length) {
    somme = somme + tableau[i];
    i++;
  }
  return somme;
}

function maxTab(tableau) {
  let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
  for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    if (max < tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      max = tableau[i];
    }
  }
  return max; // retourner max
}

let tab1 = [5, 8, 3, 0];
let resultat3 = maxTab(tab1);
console.log(resultat3); // affiche => 8

function maxMinTab(tableau, c) {
  if (c == true) {
    return maXtab(tableau);
  }
}

function maxTab(tableau) {
  let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
  for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    if (max < tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      max = tableau[i];
    }
  }
  return max; // retourner max
}

function minTab(tableau) {
  let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
  for (let i = 0; i < tableau.length; i++) {
    // pour i allant de 0 a la taille du tableau
    // comparer max de la valeur a la position i du tableau
    if (min > tableau[i]) {
      // si max est plus petit
      // on remplace la valeur de max par la valeur de la position i du tableau
      min = tableau[i];
    }
  }
  return min; // retourner max
}

function maxMinTab(tableau, c) {
  if (c == true) {
    return maxTab(tableau);
  } else {
    return minTab(tableau);
  }
}

//tableau.sort il trie et mit il met du plus petit au plus grand

function reverseWord(str) {
  let tab = str.split(""); // conversion de la chaine
  tab.reverse(); //inverser le tableau
  let chaine = tab.join(""); // convertir le tableau en chaine de caractere
  return chaine;
}

console.log(reverseWord("hello world"));

// soit la variabl note
//en utilisant la structure conditionnelle ternaire
//ecrire un code qui permet d'afficher le message bien si note est superieur ou egal a 15
// mauvais si note est strictement inferieur a 15

function notation(nb) {
  nb >= 15 ? console.log("tres bien") : console.log("mauvais");
}
notation(11)
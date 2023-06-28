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
 
letresult=maxMin(3, 8, false);
console.log(result);

function sommeTab[1, 2, 3, 4, 5,]{
    

}
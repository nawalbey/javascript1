// exercie
//soit le tableau ["banane", "pomme", "mangue",]
//ajouter une fraise entre pomme et mangue
//supprimer la banane
//remplacer fraise et mangue par goyave

let table = ["banane", "pomme", "mangue"];
table.splice(2, 0, "fraise");
console.log(table);
table.shift();
console.log(table);
table.fill("goyave");
console.log(table);

//splice c'est pour ajouter
//shift c'est pour supprimer
//fill c'est pour remplacer
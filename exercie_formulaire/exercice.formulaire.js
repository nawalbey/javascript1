let batman = document.getElementById("batman");
let harleyquin = document.getElementById("harley_quin");
let je_suis_le_batman = document.getElementById("je_suis_le_batman");

let proposition = document.getElementById("proposition");
let n_essai = document.getElementById("n_essai");
let message = document.getElementById("message");
let reponse = document.getElementById("reponse");

// le nombre aleatoireb doit etre entre 0 et 50
var aleatoire = aleatoireNumber();
var nombre_essai = 0;

function aleatoireNumber() {
  // on utilise math.random et math.floor pour avoir notre nombre aleatoire entre 0 et 50
  var nombre = Math.floor(Math.random() * 51);
  return nombre;
}

// affiche le nombre aleatoire dans message
harleyquin.addEventListener("click", () => {
  message.value = "le nombre aleatoire est : " + aleatoire;
});

// demarrer un nouveau jeu
batman.addEventListener("click", () => {
  aleatoire = aleatoireNumber();
  nombre_essai = 0;
});

je_suis_le_batman.addEventListener("click", () => {
  if (nombre_essai < 7) {
    nombre_essai++;
    n_essai.value = nombre_essai;
    if (aleatoire == proposition.value) {
      message.value = "Tres bien vous avez devinez le bon nombre ";
    } else if (aleatoire > proposition.value) {
      message.value = "Votre nombre est trop petit";
    } else {
      message.value = "Votre nombre est trop grand";
    }
  }
});

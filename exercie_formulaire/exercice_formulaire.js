let nom = document.getElementById("nom");
let email = document.getElementById("email");
let telephone = document.getElementById("telephone");
let choisirunplat = document.getElementById("choisir_un_plat");
let choisirundessert = document.getElementById("choisir_un_dessert");
let total_HT = document.getElementById("total_HT");
let total_TTC = document.getElementById("total_TTC");
let envoyer = document.getElementById("envoyer");
let condition = document.getElementById("condition");
let cdg = document.getElementById("cdg");

choisirunplat.addEventListener("change", function () {
  var valPlat = this.value;
  var valdessert = choisirundessert.value;
  let totalHt = Number(valPlat) + Number(valdessert);
  total_HT.value = totalHt;
  var ttc = Math.round(totalHt * 1.2 * 100) / 100;
  total_TTC.value = ttc;
});

choisirundessert.addEventListener("change", function () {
  var valdessert = this.value;
  var valPlat = choisirundessert.value;
  var totalHt = Number(valdessert) + Number(valPlat);
  total_HT.value = totalHt;
  var ttc = Math.round(totalHt * 1.2 * 100) / 100;
  total_TTC.value = ttc;
});

envoyer.addEventListener("click", (event) => {
  event.preventDefault();
  if (nom.value == "") {
    nom.style.borderBlockColor = "red";
  }
  if (!condition.checked) {
    cdg.style.color = "red";
  }
});

let adition = document.getElementById("plus");
let soustraction = document.getElementById("moins");
let multiplication = document.getElementById("mult");
let division = document.getElementById("div");
let egal = document.getElementById("egal");

let operation = "+";

adition.addEventListener("click", () => {
  operation = "+";
});

soustraction.addEventListener("click", () => {
  operation = "-";
});

multiplication.addEventListener("click", () => {
  operation = "*";
});

division.addEventListener("click", () => {
  operation = "/";
});

egal.addEventListener("click", () => {
  let nombre1 = document.getElementById("nombre1").value;
  let nombre2 = document.getElementById("nombre2").value;
  if (operation == "+") {
    document.getElementById("result").value = Number(nombre1) + Number(nombre2);
  }
  if (operation == "-") {
    document.getElementById("result").value = Number(nombre1) - Number(nombre2);
  }

  if (operation == "*") {
    document.getElementById("result").value = Number(nombre1) * Number(nombre2);
  }

  if (operation == "/") {
    document.getElementById("result").value = Number(nombre1) / Number(nombre2);
  }
});

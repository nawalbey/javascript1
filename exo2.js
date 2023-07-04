$("#dropdown").on("change", () => {
  if ($("#dropdown").val() == "bruce wayne") {
    $("#message").text("Je suis " + $("#dropdown").val());
  } else if ($("#dropdown").val() == "batman") {
    $("#message").text("Je suis " + $("#dropdown").val());
  } else {
    $("#message").text("Je suis catwoman");
  }
});

//version intermedaire

$("#dropdown").on("change", () => {
  $("#message").text("vous avez choisi l'option" + $("#dropdow").val());
});

//version avec javascript

document.getElementById("dropdow").addEventListener("change", () => {
  document.getElementById("message").textContent =
    "vous choisi l'option" + document.getElementById("dropdow").value;
});

$("loginFrom").submit((e) => {
  var surname = $("username").val();
  var password = $("password").val();

  if (surname === "" || password === "") {
    $("errorMessage").text("veuillez remplir tous les champs.");
    e.preventDeFault(); // empeche la soumission du formulaire
  }
});

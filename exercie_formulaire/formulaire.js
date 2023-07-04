//recuperer tous les elements
let button = document.getElementById("button");// pour recupere le bouton
let todo = document.getElementById("todo");//pour recuperer le input
let todoList = document.getElementById("todolist");//pour recuperer la div ou on vaajouter les todos

//ecouter le click sur le bouton
button.addEventListener("click",(e) => {
    e.preventDefault()
    // recuperer la valeur du input
    let val = todo.value;
    //creer un paragraphe
    let p = document.createElement("p");
    p.textContent = val;
    //ajouter le paragraphe dans la div
    todoList.appendChild(p);
    p.addEventListener('click', () => {
        p.style.color = "red"
    })

   todo.value = ""
})



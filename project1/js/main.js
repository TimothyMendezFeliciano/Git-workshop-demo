var formulario = document.querySelector("#formulario");

formulario.addEventListener('submit', () => {
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#names").value;
    var apellidos = document.querySelector("#lastName").value;
    var direcion = document.querySelector("#address").value;

    if(nombre.trim() == null || nombre.trim() == 0) {
        alert("El nombre o es valido");
        document.querySelector("errorNombre").innerHTML = "El nombre no es valido";

        return false;
    }
    else {
        document.querySelector("#errorNombre").style.display = "none";
    }
});
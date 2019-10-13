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

    if(apellidos.tim() == null || apellidos.tim() == 0) {
        alert("El apellido no es valido");

        return false;
    }
    else if(direcion.tim() == null || direcion.tim() == 0) {
        alert("La direcion no es valia");
        
        return false;
    }

    console.log(nombre);
    console.log(apellidos);
    console.log(direcion);
});
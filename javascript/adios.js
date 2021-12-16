
// Verificar si el DOM esta listo
$(document).ready (function() {
    console.log (" Esperemos se comporte como es debido...")
});

let botonEmpezar = document.getElementById("empezar");
let botonNoVuelvas = document.getElementById("adios_btn");
function cambiarBienvenida(){
    document.getElementsByClassName("bienvenida")[0].innerHTML = "RETIRESE DE INMEDIATO...";
}
function cambiarLetraF(){
    document.getElementById("letraF").innerHTML = "V";
}
function cambiarLetraR(){
    document.getElementById("letraR").innerHTML = "A";
}
function cambiarLetraI(){
    document.getElementById("letraI").innerHTML = "Y";
}
function cambiarLetraE(){
    document.getElementById("letraE").innerHTML = "A";
}
function cambiarLetraN(){
    document.getElementById("letraN").innerHTML = "S";
}
function cambiarLetraD(){
    document.getElementById("letraD").innerHTML = "E";
}
function cambiarLetraS(){
    document.getElementById("letraS").innerHTML = "!";
}
function cambiarEmpezar(){
    document.getElementById("empezar").innerHTML = "No disponible";
}
function cambiarMsjAdios(){
    document.getElementsByClassName("vete_text")[0].innerHTML = "No tenía que hacer eso";
}

function cambiarAdios(){
    document.getElementById("adios_btn").innerHTML = "Ups...";
}
function cambiarEmpezarHard(){
    document.getElementById("empezarHard").innerHTML = "Debería darle Verguenza";
}

botonNoVuelvas.onclick = function(){
    botonEmpezar.disabled =true;
    alert ("O M G !! \n Usted ya no es bienvenido, vayase ahora mismo");
    cambiarBienvenida();
    cambiarLetraF();
    cambiarLetraR();
    cambiarLetraI();
    cambiarLetraE();
    cambiarLetraN();
    cambiarLetraD();
    cambiarLetraS();
    cambiarEmpezar();
    cambiarMsjAdios()
    cambiarAdios()
    cambiarEmpezarHard()
}
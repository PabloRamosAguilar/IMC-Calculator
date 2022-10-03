const pNode = document.getElementById("tituloAutor")

var autor = {
    nombre: "Nombre: Manuel Pablo",
    correo: "Email:  pabloramosaguilar11@hotmail.com"
};

const fechaescribir = document.getElementById("fecha");
pNode.innerText += "¡Saludos!";
const nombre1 = document.getElementById("nombre");
const correo1 = document.getElementById("correo");
nombre1.innerText += autor.nombre;
correo1.innerText += autor.correo;

let links = document.querySelectorAll("#fotoA");
links.forEach(function (link) {

    link.setAttribute("src", "tortuga.jpg");

});

/* Otra forma sería usar:
var img = document.createElement("img");
img.src = "autorOsuna.jpg";
var src = document.getElementById("fotoA");
src.appendChild(img);*/

let fecha = new Date();

let fechahoy = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear();

fechaescribir.innerText += fechahoy;

function calcularIMC() {
    var imc
    var peso
    var estatura
    var texto = document.getElementById("IMC");
    var articulo = document.getElementById("articulo");

    alert("¿Quieres saber tu masa corporal?");

    peso = prompt("¿Cuál es tu peso? formato: Peso = kg (ej: 80)");
    peso = parseInt(peso);
    estatura = prompt("¿Cuál es tu estatura? altura = M (ej: 1.60) usa . como coma y no ,");

    var mult = (estatura * estatura);
    imc = peso / mult;

    alert("Tu índice de masa corporal es:" + imc);

    var valor
    valor = imc;

    if (valor < 16.00) {
        texto.innerText = "Peso bajo necesitas Valorar signos de desnutricion";
    }
    else if (valor < 17) {
        texto.innerText = "Delgadez Moderada";
    }
    else if (valor < 18.50) {
        texto.innerText = "Delgadez Aceptable";
    }
    else if (valor < 25) {
        texto.innerText = "Peso Normal";
    }
    else if (valor < 30) {
        texto.innerText = "Tienes OBESIDAD GRADO I. Riesgo alto para desarrollar enfermedades cardiovasculares";
    }
    else if (valor < 35) {
        texto.innerText = "Tienes OBESIDAD GRADO II. Riesgo alto para desarrollar enfermedades cardiovasculares";
    }
    else if (valor <= 40.00) {
        texto.innerText = "Tienes OBESIDAD GRADO III. Riesgo muy alto para desarrollar enfermedades cardiovasculares";
    }
    else {
        texto.innerText = "No existe clasificación";
    }

    articulo.style.visibility = "visible";

}

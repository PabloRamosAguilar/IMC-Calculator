const pNode = document.getElementById("tituloAutor")

var autor = {
    nombre: "Nombre: Manuel Pablo",
    edad: "Edad : 21",
    correo: "Email:  pabloramosaguilar11@hotmail.com"
};

const fechaescribir = document.getElementById("fecha");
pNode.innerText += "¡Saludos!";
const nombre1 = document.getElementById("nombre");
const edad1 = document.getElementById("edad");
const correo1 = document.getElementById("correo");
nombre1.innerText += autor.nombre;
edad1.innerText += autor.edad;
correo1.innerText += autor.correo;

let links = document.querySelectorAll("#fotoA");
links.forEach(function (link) {

    link.setAttribute("src", "tortuga.jpg");

});

/* Otra forma sería usar:
var img = document.createElement("img");
img.src = "autorOsuna.jpg";
var src = document.getElementById("fotoAlcalde");
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

    peso = prompt("¿cual es tu peso?");
    peso = parseInt(peso);
    estatura = prompt("¿cual es tu estatura?");
    var mult = (estatura * estatura);
    imc = peso / mult;

    alert("Tu indice de masa corporal es:" + imc);

    var valor
    valor = imc;

    if (valor < 16.00) {
        texto.innerText = "Peso bajo necesitas Valorar signos de desnutricion";
    }
    else if (valor <= 16.00 || valor <= 16.99) {
        texto.innerText = "Delgadez Moderada";
    }
    else if (valor <= 17.00 || valor < 18.49) {
        texto.innerText = "Delgadez Aceptable";
    }
    else if (valor <= 18.50 || valor <= 24.99) {
        texto.innerText = "Peso Normal";
    }
    else if (valor <= 25.00 || valor <= 29.99) {
        texto.innerText = "Tienes OBESIDAD GRADA I. Riesgo alto para desarrollar enfermedades cardiovasculares";
    }
    else if (valor <= 30.00 || valor <= 34.99) {
        texto.innerText = "Tienes OBESIDAD GRADA II. Riesgo alto para desarrollar enfermedades cardiovasculares";
    }
    else if (valor <= 35.00 || valor <= 40.00) {
        texto.innerText = "Tienes OBESIDAD GRADO III. Riesgo muy alto para desarrollar enfermedades cardiovasculares";
    }
    else {
        texto.innerText = "No existe clasificacion";
    }

    articulo.style.visibility = "visible";

}

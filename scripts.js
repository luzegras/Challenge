// variables
let encryptTextarea = document.getElementById("encrypt-input");
let decryptTextarea = document.getElementById("decrypt-input");
let resultadoTextarea = document.getElementById("resultado");
let imageContainer = document.querySelector('.image-container');

//encriptar
function encriptar() {
    let texto = encryptTextarea.value;
    let resultado = texto.replace(/e/g, "enter")
        .replace(/o/g, "ober")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/u/g, "ufat");
    decryptTextarea.value = resultado;
    ocultarMensaje();
}

//desencriptar
function desencriptar() {
    let texto = encryptTextarea.value;
    let resultado = texto.replace(/enter/g, "e")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    decryptTextarea.value = resultado;
    ocultarMensaje(); 
} 

//ocultar mensaje e imagen
function ocultarMensaje() {
    let textoEncrypt = encryptTextarea.value.trim();

    if (textoEncrypt === "") {
        imageContainer.style.display = 'block';
        resultadoTextarea.textContent = "Ningún mensaje fue encontrado.";
    } else {
        imageContainer.style.display = 'none';
    }
}

//copiar texto
function copy() {
    let texto = decryptTextarea.value.trim();

    if (texto === "") {
        imageContainer.style.display = 'block';
        resultadoTextarea.textContent = "No hay texto para copiar.";
        return;
    }

    navigator.clipboard.writeText(texto)
        .then(() => {
            resultadoTextarea.textContent = "¡Texto copiado al portapapeles!";
        })
        .catch(err => console.error('Error al copiar: ', err));

    imageContainer.style.display = 'block';
}

// detectar borrar en  campos 
encryptTextarea.addEventListener("input", function () {
   
    if (this.value.trim() === "") {
       
        limpiarTextarea();
    }
});

// limpiar los  campos al  borrar
function limpiarTextarea() {
    let textareas = document.querySelectorAll("textarea");
    textareas.forEach(function (textarea) {
        textarea.value = ""; 
    });
}

//cargar el  autor desde las  etiquetas  meta
document.addEventListener('DOMContentLoaded', function() {
    var autor = document.querySelector('meta[name="author"]').getAttribute('content');
    var ano = document.querySelector('meta[name="creation_year"]').getAttribute('content');
    document.getElementById('pie-pagina').innerText = autor + ' - ' + ano;
});
let botonEncriptar = document.querySelector("#btn-encriptar");
let cajaTextoEntrada = document.querySelector("#input-texto");
let cajaTextoSalida = document.querySelector("#msg");

function encriptar() {
    let textoOriginal = cajaTextoEntrada.value; 
    
    let textoCifrado = textoOriginal.replace(/e/g, "enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g, "ober")
                                    .replace(/u/g, "ufat");
    
    cajaTextoSalida.value = textoCifrado;
    cajaTextoEntrada.value = ""; 
}

botonEncriptar.addEventListener('click', (e) => {
    e.preventDefault();
    encriptar();   
});
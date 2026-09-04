let botonDesencriptar = document.querySelector("#btn-desencriptar");
let entradaParaDescifrar = document.querySelector("#input-texto");
let salidaDescifrada = document.querySelector("#msg");

function desencriptar() {
    let textoCifrado = entradaParaDescifrar.value; 
    
    let textoNormal = textoCifrado.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    
    salidaDescifrada.value = textoNormal;
    entradaParaDescifrar.value = ""; 
}

botonDesencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    desencriptar();   
});
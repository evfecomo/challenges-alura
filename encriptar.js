var buttonEncriptar = document.querySelector("#btn-encriptar");
var imput = document.querySelector("#input-texto");
var textoInput = document.querySelector("#msg");

function encriptar () {
    var texto = imput.value;
    textoEncrirtar = texto.replace(/[e]/g, "enter")
                            .replace(/[i]/g, "imes")
                            .replace(/[a]/g, "ai")
                            .replace(/[o]/g, "ober") 
                            .replace(/[u]/g, "ufat");
    textoInput.value = textoEncrirtar;
    imput.value = "";
}
buttonEncriptar.addEventListener('click', (e)=>{
e.preventDefault();
encriptar()   
});

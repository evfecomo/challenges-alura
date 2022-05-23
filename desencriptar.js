var buttonDesencriptar = document.querySelector("#btn-desencriptar");
var imput = document.querySelector("#input-texto");
var textoInput = document.querySelector("#msg");

	function desencriptar () {
		var texto = imput.value;
		textoDesencrirtar = texto.replace(/\enter/g, "e")
									.replace(/\imes/g, "i")
									.replace(/\ai/g, "a")
									.replace(/\ober/g, "o")
									.replace(/\ufat/g, "u");
		textoInput.value = textoDesencrirtar;
		imput.value = "";
}
buttonDesencriptar.addEventListener('click', (e)=>{
e.preventDefault();
desencriptar()   
});

let botonCopiarMensaje = document.querySelector("#btn-copy");
let cuadroTextoCopiado = document.querySelector("#msg");

function copiarTexto() {
    let contenidoACopiar = cuadroTextoCopiado.value;

    navigator.clipboard.writeText(contenidoACopiar);

    cuadroTextoCopiado.value = "";
}

botonCopiarMensaje.addEventListener('click', (e) => {
    e.preventDefault();
    copiarTexto();
});

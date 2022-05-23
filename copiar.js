var buttonCopy = document.querySelector("#btn-copy"); 
                              
function copiar() {

    var content = textoInput;
    
    content.select(); 
    document.execCommand("copy"); 

}

buttonCopy.addEventListener('click', (e)=>{
e.preventDefault();
copiar()   
});
   
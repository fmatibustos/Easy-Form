const form = document.getElementById("user-form");
/* console.log(form); */

const submitButton = document.getElementById("submit-btn");

// Escribo un bucle para iterar, para poder ir agregando eventlisteners.

// Seleccionamos con un querySelectorAll cada form box que existen en el form y por cada uno de ellos  tendremos un box y haremos lo siguiente en la funcion: 
document.querySelectorAll(".form-box").forEach((box)=>{
    const boxInput = box.querySelector("input");


    boxInput.addEventListener("keydown", (e)=>{
        console.log(`input ${boxInput.name} value:`, boxInput.value);
    });
});
const form = document.getElementById("user-form");
/* console.log(form); */
const submitButton = document.getElementById("submit-btn");

let timeout= null; 

// Escribo un bucle para iterar, para poder ir agregando eventlisteners.

// Seleccionamos con un querySelectorAll cada form box que existen en el form y por cada uno de ellos  tendremos un box y haremos lo siguiente en la funcion: 
document.querySelectorAll('.form-box').forEach((box)=>{
    const boxInput = box.querySelector("input");


boxInput.addEventListener("keydown", (e)=>{
        clearTimeout(timeout);
        timeout= setTimeout(() => {
            console.log(`input ${boxInput.name} value:`, boxInput.value);

            validation(box, boxInput)

        }, 300); 
    });
});

validation = ( box, boxInput) => {
    if (boxInput.name == 'nickName') {
        console.log('validacion para nombre');
        if (boxInput.value == '') {
            showError (true, box);
        } else  {
            showError (false, box);
        }
    }
}

showError = (check, box) => {
    if (check) {
        box.classList.remove('form-success');
        box.classList.add('form-error');
    } else {
        box.classList.remove ('form-error');
        box.classList.add('form-success');
    }
};
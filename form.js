const form = document.getElementById("user-form");
/* console.log(form); */
const submitButton = document.getElementById("submit-btn");

let timeout= null; 
let errors = {
    nickName: true,
}
// Escribo un bucle para iterar, para poder ir agregando eventlisteners.

// Seleccionamos con un querySelectorAll cada form box que existen en el form y por cada uno de ellos  tendremos un box y haremos lo siguiente en la funcion: 
document.querySelectorAll('.form-box').forEach((box)=>{
    const boxInput = box.querySelector("input");


boxInput.addEventListener("keydown", (event)=>{
        clearTimeout(timeout);
        timeout= setTimeout(() => {
            console.log(`input ${boxInput.name} value:`, boxInput.value);

            validation(box, boxInput)

        }, 300); 
    });
});

validation = ( box, boxInput) => {
    if (boxInput.name == 'nickName') {
        if (boxInput.value == '') {
            showError (true, box, boxInput);
        } else  {
            showError (false, box, boxInput);
        }
    }
    submitController();
};

showError = (check, box, boxInput) => {
    if (check) {
        box.classList.remove('form-success');
        box.classList.add('form-error');
        errors [boxInput.name] = true;
    } else {
        box.classList.remove ('form-error');
        box.classList.add('form-success');
        errors [boxInput.name] = false;
    }
};

submitController = () => {
    console.log(errors);
    if (errors.nickName){
        submitButton.toggleAttribute("disabled", true)
    } else 
    {
        submitButton.toggleAttribute("disabled", false)
    }
}

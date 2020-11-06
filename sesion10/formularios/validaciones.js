//correo01
function validar01(){
    alert("inicio de la funcion validar01");
    return false;
    /*
    const email = document.getElementById("correo");

    email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Se requiere una direccion de correo institucional valida");
    } else {
        email.setCustomValidity("");
    }
    });*/
    
}//fin de validar correo01.html


//correo02
function validar02(){
    const email = document.getElementById('correo');

    email.addEventListener('input', function (event) {


    if (email.validity.valid) {
        emailError.innerHTML = ''; 
        emailError.className = 'error'; 
    } else {
        showError();
    }
    });

    form.addEventListener('submit', function (event) {

    if(!email.validity.valid) {
        showError();
        event.preventDefault();
    }
    });
}//fin de validar02


function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Se requiere una direccion de correo que no este en blanco';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Se requiere una direccion de correo valida.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `El correo debe tener al menos  ${ email.minLength } caracteres y ud digito ${ email.value.length }.`;
  }

  emailError.className = 'error';
}

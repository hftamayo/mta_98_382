function mostrarMensaje1(usuario, texto) { 
  alert(usuario + ': ' + texto);
}
/*
mostrarMensaje1('Carlos', 'Hola, como estas'); // Carlos: Hola... (*)
mostrarMensaje1('Maria', "estoy bien, descansando"); // Maria: estoy.. (**)
*/

function mostrarMensaje2(usuario, texto) {

  usuario = '*' + usuario + '*'; 

  alert( usuario + ': ' + texto );
}

/*
let usuario = "Karla";
showMessage(usuario, "saludos"); // *Karla*: saludos
// esta vez, existe una copia local de la variable usuario
alert( usuario ); // Karla
*/

function mostrarMensaje3(usuario, texto = "texto no especificado") { 
  alert(usuario + ': ' + texto);
}
/*
mostrarMensaje3('Carlos'); // Carlos: texto no especificado
*/

function mostrarMensaje4(usuario, texto = definirTexto()) { 
  alert(usuario + ': ' + texto);
}
/*
mostrarMensaje4('Carlos'); // Carlos: ...
*/


  function rellenarValores() {
    document.getElementById('txtnombres').value = "Herbert Fernandez Tamayo";
    document.getElementById('txtresidencia').value = "occidente";
 
    var radioElements = document.getElementsByName("txtturno");

    for (var i=0; i<radioElements.length; i++) {
      if (radioElements[i].getAttribute('value') == 'matutino') {
        radioElements[i].checked = true;
      }
    }
  }


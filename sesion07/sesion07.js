

function anioNacimiento(){
    try { 
        // solicitar el dato de entrada 
        var n = prompt("Digite su edad actual", ""); 
        /* entradas que generan excepciones:
        numeros negativos, en blanco, alfanumerico
        */
        var fechaNacimiento = 2020 - n; 
        // generar salida de datos
        alert("año de nacimiento: " + fechaNacimiento); 
    } catch (ex) { 
        //si se obtuvo algun error en la linea 7 se obtendra una excepcion
        alert('Hubo un problema en la operacion'); 
    } 
}//fin de edad


function factorial(){
    try { 
        // solicitar el dato de entrada 
        var n = prompt("Digite un numero positivo", ""); 
        /* entradas que generan excepciones:
        numeros negativos, en blanco, alfanumerico
        */
        var factorial = factorial(n); 
        // generar salida de datos
        alert("el factorial de " + n + " es: " + factorial); 
    } catch (ex) { 
        //si se obtuvo algun error en la linea 7 se obtendra una excepcion
        alert(ex); 
    } 
}

function sumatoria(){
    //{2, "hola", 12, true, "lunes", "", 25, {}, "ok"}

    var i = 0, total = 0; 
    while(i < arreglo.length) { 
        try { 
            if ((typeof arreglo[i] != "number") || isNaN(arreglo[i])) // si no es un numero 
                continue; // continuar con la siguiente operacion
            total += a[i]; // caso contrario se hace la sumatoria. 
            } 
            //catch
        finally { 
            i++; // siempre se va a incrementar i aun cuando continue se haya ejecutado. 
        } 
    }
}

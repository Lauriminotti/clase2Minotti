/*Pido un numero mediante propmt que sea menor que 90, de ser asi lo muestro mediante alert,
de lo contrario se muestra por consola*/

let numero = parseInt(prompt("Escribe un número"));
if (numero < 90) {
    alert(numero);
} else {
    console.log(numero);
}

/*Pido un texto mediante prompt, si es igual a "Hola" mostrar una alerta por consola*/

let nombre = prompt("Escribe tu nombre");
if (nombre !== "Hola") {
    alert(nombre);
} else {
    console.log(nombre);
}

/*Pido un número mediante prompt y evaluo si esta entre 10 y 90. De ser asi muestro un alert. */

let numeros = parseInt(prompt("Escribe un número"));
if (numeros > 10 || numeros < 90) {
    alert(numeros);
} else {
    console.log(numeros);
}

/* Se recibe un numero en donde se va a devolver una cadena de texto que indica si el numero es positivo
o negativo. En caso de ser 0 se muestra por consola. */

let negativoYpositivo = parseInt(prompt("Escribe un número"));
if (negativoYpositivo === 0) {
    console.log(negativoYpositivo);
} else if (negativoYpositivo > 0) {
    alert("Es positivo");
} else {
    alert("Es negativo");
}

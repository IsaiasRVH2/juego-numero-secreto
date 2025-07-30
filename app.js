let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

// Asignación de un texto a un elemento HTML
function asignarTextoElemento(nombreElemento, texto) {
    let elemento = document.querySelector(nombreElemento);
    // Establece el texto del elemento
    elemento.textContent = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "intento" : "intentos"}.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número es menor");
        }
        else {
            asignarTextoElemento("p", "El número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
}


// Genera un número secreto entre 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.');
        document.getElementById("intentar").setAttribute("disabled", "true");
    } else {
        // Verifica que el número no se haya sorteado antes
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Llama recursivamente si el número ya fue sorteado
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
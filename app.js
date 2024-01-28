let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroSecreto();



 function asignarTextoElemento(elemento, texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
 }

 function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
      asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
      //El usuario no acerto
      if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
      }
      else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
      }
      intentos++;
      limpiarCaja();
    }
    return;
 }

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  //Si se sortearon todos los numeros
  if (listaNumerosSorteados == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
  }
  else{
    //Si el numero generado esta en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }
    else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoElemento('h1', 'Juego del numero secreto');
  asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
  //generar numero aleatorio
  numeroSecreto = generarNumeroSecreto();
  //Inicializar el numero de intentos
  intentos = 1;
}

function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  condicionesIniciales();
  //Deshabilitar el boton de juego nuevo
  document.getElementById('reiniciar').setAttribute('disabled','true');    
}

condicionesIniciales();


 //Desafios
 /*
let conteo = 0;
let suma = 0;

 function helloWorld(){
  console.log('¡Hola, mundo!');
 }

 function helloName(){
  let name = prompt('¿Cuál es tu nombre?');
  console.log(`Hola, ${name}`);
 }

 function doubleNumber(){
  let numberUser = parseInt(prompt('Dame un numero: '));
  let result = numberUser * 2;
  console.log(result);
 }

 function promedioTresNumeros(){
    while (conteo < 3){
      conteo++;
      suma = suma + parseInt(prompt('Dame un numero: '));
    }
    console.log(suma/3);
 }

 function moreThan(){
  let number1 = parseInt(prompt('Dame el primer numero: '));
  let number2 = parseInt(prompt('Dame el segundo numero: '));
  if (number1 > number2){
    console.log(`Es mayor ${number1}`);
  }
  else{
    console.log(`Es mayor ${number2}`);
  }
 }


 helloWorld();
 helloName();
 doubleNumber();
 promedioTresNumeros();
 moreThan();

 */

 //Desafios Arrays

 /*
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
let listNumbers = [5,8,5,7];
let lengthArray = 0;
let counter = 0;
let sum = 0;
let minor = 0;
let major = 0;

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');


function showArray(){
  console.log(lenguajesDeProgramacion);
}

function calculateProm(){
  lengthArray = listNumbers.length;
  while (counter < lengthArray){
    sum = sum + listNumbers[counter];
    counter++;
  }
  console.log(sum/lengthArray);
}

function minorAndMajor(){
  minor = Math.min.apply(Math, listNumbers);
  major = Math.max.apply(Math, listNumbers);
  console.log(`Los numeros menor y mayor son ${minor} y ${major}`);
}

showArray();
calculateProm();
minorAndMajor();
*/


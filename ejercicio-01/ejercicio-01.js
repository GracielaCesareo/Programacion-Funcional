function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    escribirNumero();
    datoDiferente();
    comprobarCantidadNumeros();
    verificar();
}

function escribirNumero(creditCardNumber) {
  if (creditCardNumber == undefined) {
    return("Ingresa un numero");
  }

function datoDiferente(creditCardNumber) {
  if(typeof creditCardNumber != "number") {
    return("Error de dato");
  }
}

function comprobarCantidadNumeros(creditCardNumber) {
  var numeros = creditCardNumber.toString();
  if (numeros.length != 16) {
    return("Faltan numeros");
  }
}

function verificar(creditCardNumber) {
 var arregloNumeros = (creditCardNumber.toString()).split("");
 var numeros = arregloNumeros.map(convertirNumeros);

 var numerosPar = numeros.map(multiplicarNumPar);
 var pares = numerosPar.map(resultadoPares);

 var sumNumero = pares.reduce(sumaFinal);

   if(sumaNumeros%10 === 0){
     return true;
   } else {
     return false;
   }

 function convertirNumeros(numero){
   return parseInt(numero);
  }

  function multiplicarNumPar(elemento,i){
   if(i % 2 == 0){
     return elemento * 2;
   } else {
     return elemento;
   }
  }

  function resultadoPares(num){
   if(num > 9){
     return num-9;
   } else {
     return num;
   }
 }

 function sumaFinal(suma,numero){
  return suma + numero;
}
}
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}

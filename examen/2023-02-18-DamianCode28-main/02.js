/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function masFrecuente(array) {
  // La funcion llamada 'masFrecuente' recibe como argumento un array de numeros enteros
  // y debe devolver el número entero que mas veces aparece (el más frecuente).
  // ej:
  // masFrecuente([1,1,2,3,4]) => 1
  // masFrecuente([3,2,3,2,3,3]) => 3
  // Nota: Los numeros pueden NO estar ordenados

  // Tu código aca:
  (function() {
    array = [1, 1, 2, 4, 2, 1, 4, 4, 1, 1];
    contadorInterno = 0;
    contadorMasRepetido = 0;
    variable = "";
  
    array.map(x => {
      contadorInterno = 0;
      array.map(y => {
        if (x === y) {
          contadorInterno++;
        }
      })
  
      if (contadorInterno > contadorMasRepetido) {
        contadorMasRepetido = contadorInterno;
        variable = x;
      }
    });
    console.log(`valor mas repetido:${variable}, numero de veces contada: ${contadorMasRepetido}`)
  })();
    
  };


// No modifiques nada debajo de esta linea //

module.exports = masFrecuente
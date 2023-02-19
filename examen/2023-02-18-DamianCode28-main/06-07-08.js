/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function crearClaseProfesor() {
  // Crear una clase para construir objeto de tipo Profesor.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , cursos (array de strings) , certificados (array de objetos)
  // Esta funcion debe retonar la clase Profesor.

  class Profesor {
    constructor(nombre,edad,cursos,certificados) {
      this.nombre= nombre;
      this.edad= edad;
      this.cursos= cursos;
      this.certificados= certificados;
    }
  
    addCertificado() {
      // el metodo addCertificado recibe un string nombre, un string entidad y  un entero anio y debe agregar un objeto:
      // { nombre: nombre, entidad: entidad, anio: anio} al arreglo de certificados del profesor.
      // no debe retornar nada.
    
    
    }

    addCurso(curso) {
      // este método debe agregar un Curso (curso) al arreglo de Cursos del profesor.
      // no debe retornar nada.

      this.cursos.push(curso);


    }

    getCursos() {
      // Escribe una función que retorne un arreglo con los cursos del profesor
      // Ej:
      // persona.getCursos() // retorna ['javascript 1', 'javascript 2'];


    }

    getCertificados() {
      // Escribe una función que retorne la cantidad de certificados que tiene un profesor
      // Ej:
      // persona.getCertificados() // retorna 3
      
     
    

    }

    getUltimoCertificado() {
      // Escribe una función que retorne el ultimo certificado de un profesor (anio mas alto)
      // ej, si la persona tuviera estos certificados:
      // {
        //certificados: [{
         // const certs =[{
         // nombre: 'Ingenieria',
         //  anio: 2004,
         //  entidad: 'UNT',
        //}, {
        //   nombre: 'Master en Datos',
         //  anio: 2012,
         // entidad: 'UBA'
        // }];
       
      // persona.getUltimoCertificado() // retorna { nombre: 'Master en Datos', anio: 2012', entidad: 'UBA'};
  
      const certs = [{
        nombre: 'Ingenieria',
        anio: 2004,
        entidad: 'UNT',
    }, {
        nombre: 'Master en Datos',
        anio: 2012,
        entidad: 'UBA'
    
    }];
    
    const lastOfYears = Math.max(...certs.map(it => it.anio));
    const lastCerts = certs.filter(cert => cert.anio === lastOfYears); // array of certs in 2012
    const lastCertificateObtained = lastCerts[lastCerts.length - 1];
    
    console.log('Last certificate obtained: ', lastCertificateObtained);



    }

  };

  return Profesor;
}
// No modifiques nada debajo de esta linea //

module.exports = crearClaseProfesor
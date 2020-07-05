
// import apenas a classe Usuario renomeando-a para ClasseUsuario e chame a função info();
import ClasseUsuario from './function';

ClasseUsuario.info();






//importe a variável de idade e exiba a mesma em tela;
import { idade } from './function';
console.log(idade);






//Em seu arquivo principal importe tanto a classe quanto a variável idade e 
//renomeie a variável idade para IdadeUsuario.
//SOLUÇÂO
/*
import Usuario, { idade as IdadeUsuario } from './function';

console.log(Usuario.info());
console.log(IdadeUsuario);
*/



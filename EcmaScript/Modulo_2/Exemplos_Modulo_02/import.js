//import { soma } from './funcoes'; //export
//import pessoa, { soma, sub } from './funcoes';

import pessoa from './funcoes';   //export default (pode alterar o nome: import newPessoa)
import * as funcao from './funcoes'; // importa todas as funcoes exeto as default

console.log(funcao.soma(10,5));//15
console.log(funcao.sub(20,10));//10
console.log(pessoa('paulo', 22));//{ nome: 'paulo', idade: 22 }
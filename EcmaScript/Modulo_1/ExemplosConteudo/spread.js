//Spread: repassa as informaçoes pra outra estrutura de dados

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [ ...arr1, ...arr2];
//ou
const arr4 = arr1.concat(arr2);
console.log(arr3, arr4); 

//====EX2 com Obj

const pessoa1 = {
    nome: 'paulo',
    idade: 22,
    cidade: 'Altos'
}
const pessoa2 = { ...pessoa1, nome: 'felipe'};
console.log(pessoa1);
console.log(pessoa2);


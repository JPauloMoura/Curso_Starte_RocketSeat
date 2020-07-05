
//========Funçoes anonimas exemplos

const array = [10, 20, 30, 40];

const lista1 = array.map(function(item){
    return item+1;
});
console.log(lista1);

//====EX2 sem o 'function' ====

const lista2 = array.map((item)=>{
    return item+2;
});
console.log(lista2);

//=====EX3 caso receba apenas 1 parametro pode remover o '()' ====

const lista3 = array.map(item =>{
    return item+3;
});
console.log(lista3);

//=====EX4 caso a funçao nao tenha um copo grande, apenas um retono ====

const lista4 = array.map(item => item+4 );
console.log(lista4);

// =========== PODEMOS USA CONSTANTE PARA ARMAZENA FUNÇÕES ==============

//====EX1

const numero = () => 2020;
console.log(numero());

//====EX2

const vetor = () => ['boi', 'pato', 'gato'];
console.log(vetor());

//====EX3

const texto = () => 'Hello World';
console.log(texto());

//====Ex4

const obj = () => ({ nome: 'paulo', idade: 22});
console.log(obj());

//============== DEFININDO VALORES PADRAO NOS PARAMETROS DA FUNÇÃO=======

const soma = (a =10, b = 5) => a+b;

console.log(soma(2,2));// return 4
console.log(soma(5));// return 10
console.log(soma());// return 15
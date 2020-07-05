/*
Utilizando o operador de rest/spread (...) realize as seguintes operações:

-Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe
a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
            --------------------------------
            console.log(x); // 1
            console.log(y); // [2, 3, 4, 5, 6]
            --------------------------------

Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

// function soma...
            ------------------------------------------
            console.log(soma(1, 2, 3, 4, 5, 6)); // 21
            console.log(soma(1, 2)); // 3
            ------------------------------------------
*/
const arr = [1, 2, 3, 4, 5, 6];
const [index0, ...resto] = arr;

const x = index0;
const y = resto;
console.log(x);
console.log(y);

const soma = (...parms)=>{
    return parms.reduce((item, proximo)=> item+proximo,0);
}
console.log(soma(5,5,5,5,5,5));









/*
Spread
A partir do objeto e utilizando o operador spread:
            ------------------------------
            const usuario = {
                nome: 'Diego',
                idade: 23,
                endereco: {
                    cidade: 'Rio do Sul',
                    uf: 'SC',
                    pais: 'Brasil',
                }
            };
            ------------------------------
Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel.
Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras.
*/
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco:{...usuario.endereco, cidade:'Lontras'} };

console.log(usuario2);
console.log(usuario3);
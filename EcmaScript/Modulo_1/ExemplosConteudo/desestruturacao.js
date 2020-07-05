//=======DESESTRUTURAÇÃO DE UM OBJETO ========
const pessoa = {
    nome:'paulo',
    idade: '20',
    email: 'joao@gmail.com',
    endereco: {
        rua: 'violeta',
        numero: 1857,
        cidade: 'Altos',
        estado: 'PI'
    }
}
console.log(pessoa.idade);
console.log(pessoa.endereco);
console.log(pessoa.endereco.cidade);
console.log(pessoa.endereco.estado);
//=====================================
console.log('=====como fica usando a desestruturaçao ============');

const { nome, idade, endereco, endereco: {rua , cidade} }= pessoa;
console.log(nome);
console.log(idade); 
console.log(endereco);
console.log(rua);

//====EX2 usando em uma função
console.log('====EXEMPLO 2====');

const animal = {
    nome: 'tobi',
    tipo: 'cao',
    raca: 'poodle',
    donos: {
        pai: 'jp',
        mae: 'vick'
    }
};

function nomeDosDonos({ donos: { pai, mae }}){
    return pai+ ' e ' +mae;
}
console.log(nomeDosDonos(animal)); 



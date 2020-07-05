//Rest(...): serve para pega o resto das propriedades
const usuario = {
    nome: 'paulo',
    idade: 22,
    email: 'paulo@paulo.com' 
};

const { nome, ...resto } = usuario;
console.log(resto, nome);//{ idade: 22, email: 'paulo@paulo.com' } paulo

// ==== Ex2 com vetor
const vet = [1,2,3,4];
const [a, b, ...outros] = vet;
console.log(a,b, outros); //1 2 [ 3, 4 ]

// ==== Ex3 com funcoes
function arr (...paramentros){
    return(paramentros)
}
console.log(arr(10,20,30, 40, 50));//[ 10, 20, 30, 40, 50 ]

// ==== Ex4 com funcoes
function soma(...paramentros){
    return paramentros.reduce((item, total) => item + total);
}
console.log(soma(10,20,30));//60




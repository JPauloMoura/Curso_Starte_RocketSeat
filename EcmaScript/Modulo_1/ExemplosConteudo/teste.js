function teste(pessoa){
    return this.nome;
}
var pessoa= {
    nome: 'joao',
    idade: 22
}
console.log(teste.call(pessoa));
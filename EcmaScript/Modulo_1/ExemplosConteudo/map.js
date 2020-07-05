//Map: nao altera meu objeto
//vai retorna um novo objeto Respeitando o tamanho original
// desse objeto.


console.log('//--------EXEMPLO 01) quantos anos cada passageiro tem?----------')
const passengers = [
    { name: "Ademar", birthYear: 1975 },
    { name: "Tiago", birthYear: 1997 },
    { name: "Tiago", birthYear: 2000 },
    { name: "Eduarda", birthYear: 2004 },
    { name: "Jessica", birthYear: 1984 },
    { name: "Enzo", birthYear: 2015 },
    { name: "Natan", birthYear: 2001 },
    { name: "Ana", birthYear: 1995 }
];

const passengerAge = passengers.map(passenger => {
    return `${passenger.name} tem ${2020-passenger.birthYear} anos` 
});
console.table(passengerAge);





console.log('//--------EXEMPLO 02) encontre o palimedro--------------------')

const palimedro = passengers.map(passenger=> {
    var reverso = passenger.name.split('').reverse().join('').toLowerCase();
    
    if(reverso === passenger.name.toLowerCase()){
        return `${passenger.name.toLowerCase()}|${reverso}=>` + true;
    }
    
    return `${passenger.name.toLowerCase()}|${reverso} =>` + false;
});
console.table(palimedro);





console.log('//--------EXEMPLO 03) encontre o palimedro com maps--------')

const found = passengers.map(passenger=> {
    const reverseName = [].map.call(passenger.name, letter => letter).reverse().join('');

    if(reverseName.toLowerCase() === passenger.name.toLowerCase()){
        return `É um palíndromo: ${passenger.name}`
    }else{
        return `Não é palíndromo: ${passenger.name}`
    }
});

console.table(found);

//========Exemplo call()=======
function teste(pessoa){
    return this.nome;
}
var pessoa= {
    nome: 'joao',
    idade: 22
}
console.log(teste.call(pessoa));
// ========= FIND: verifica se um elemento existe e retorna
// o primeiro que encontrar.
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

//EXEMPLO 01) encontre  o passageiro de nome 'Tiago'

console.table( passengers.find(
    passenger => passenger.name === "Tiago"
));
//ou
console.table( passengers.find(
    passenger => passenger.name.toLowerCase() === "tiago"
));

console.table( passengers.find(
    passenger => passenger.name === "Tiago" && passenger.birthYear === 2000
))
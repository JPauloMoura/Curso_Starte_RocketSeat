// ForEach: modifica o  elemento que foi passado

//EXEMPLO 01) adicione a idade(age) para cada pessoa
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

passengers.forEach( passenger =>
     passenger.age = 2020-passenger.birthYear
);
console.table(passengers);
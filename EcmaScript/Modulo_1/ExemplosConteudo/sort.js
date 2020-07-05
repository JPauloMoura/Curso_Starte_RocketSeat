//Sort
// ordenar elementos
// ordenação segue a regra do unicode ASCII 
//(Ana, Pedro, ana, 1, 2, 22, 4)
//EX: [2,1,3].sort((a,b)=> a-b) // [1,2,3]
//EX: [2,1,3].sort((a,b)=> b-a) // [3,2,1]

console.log('// EX 01) Organize o carrinho pelo número de produtos-------');

const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
];

console.table(shopCart);//original
shopCart.sort((a, b)=> a.quantity - b.quantity);
console.table(shopCart);//Crescente 
shopCart.sort((a, b)=> b.quantity - a.quantity);
console.table(shopCart);//Decresente






console.log('// EX 02) Organize os passageiros por nome ---------');
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

console.table(passengers);

passengers.sort((passenger_A, passenger_B)=>{
    if(passenger_A.name.toLowerCase() < passenger_B.name.toLowerCase()) return -1;
    if(passenger_A.name.toLowerCase() > passenger_B.name.toLowerCase()) return 1;
    return 0;
});

console.table(passengers);
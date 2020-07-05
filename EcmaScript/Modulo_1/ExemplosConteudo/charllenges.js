//01) Adicione o ano de nascimento das crianças para cada elemento do array
const childrenAge= [2, 0, 5, 8, 12, 17, 13, 7, 10];

const children = childrenAge.map(idade=>{
    return{
        Idade: idade,
        Nascimento: 2020-idade
    }
})

console.table(children)






//02) Crie um array somente com os domínios da lista de email
const mailList= [
    "robson@rocketseat.com",
    "fulano@gmail.com",
    "cleiton@rocketseat.com",
    "diego@rocketseat.com",
    "eu@adonis.com",
    "aloha@hawaii.com",
    "outro@emailqualquer.com"
];
//Solução 1
const dominios1 = mailList.map(email=>{
   return email.slice(email.search('@')+1, email.length);
});
console.log(dominios1);


//Solução 2
const dominios2 = mailList.map(email=>{
    const arr = email.split('@');//split() trasforma uma string em matriz
    return arr[1];
});
console.log(dominios2);




//03) Encontre o maior preço dos produtos abaixo de 100 reais
const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
];

const maiorPreco = shopCart
    .filter(product=> product.unitPrice < 100)
    .sort((a,b)=> b.unitPrice - a.unitPrice)[0];

console.table(maiorPreco);
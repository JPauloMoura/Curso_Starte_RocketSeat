//Reduce
// Reduz um obj a um valor único, é imutavel
//EX: arr.reduce((accumulator,currentValue,index,array)=> {} initialValue)

console.log('//====EX 01) Qual o valor total desse carinho de compras');

const shopCart = [
    { product: "sapato", quantity: 2, unitPrice: 118 },
    { product: "tenis", quantity: 3, unitPrice: 89 },
    { product: "bermuda", quantity: 1, unitPrice: 48 },
    { product: "camiseta", quantity: 2, unitPrice: 25 }
];

const totalValue = shopCart.reduce((totalAcumulado, item)=> 
totalAcumulado + item.quantity * item.unitPrice
, 0);
console.log(totalValue);



console.log('//====EX 02) Quantidade total de produtos no carrinho');

const totalProduct = shopCart.reduce((totalItems, item)=>
    totalItems + item.quantity
,0);
console.log(totalProduct);
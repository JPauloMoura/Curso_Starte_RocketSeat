// OPERAÇOES COM VETORES

const array = [11, 20, 50, 60];

const newArray = array.map(function(items){
    return items;
});
console.log(newArray);//mapeia e retorna todos os items

//============================================

const soma = array.reduce(function(total, next){
    return total+next;
});
console.log(soma);

//=============================================

const filtro = array.filter(function(item){
    return item % 2 === 0;
});
console.log(filtro);//filtra os item do vertor

//=============================================

const encontrar = array.find(function(item){
    return item === 10;
});
console.log(encontrar);//faz uma  busca no vetor
//caso nao encontre retorna undefined
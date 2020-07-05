 
var maiorIdade = function(idade){
    return new Promise(function(resolver, reject){

        if(idade >= 18){
            resolver('Você é maior de idade!');
        }else{
            reject('Você é menor de idade!');
        }
    });
}

maiorIdade(19)
    .then(function(maiorIdade){
        console.log(maiorIdade);
    })
    .catch(function(menorIdade){
        console.log(menorIdade);
    });
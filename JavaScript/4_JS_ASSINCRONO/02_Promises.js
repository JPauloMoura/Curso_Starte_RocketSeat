var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var x = new XMLHttpRequest();
        x.open('GET', 'https://api.github.com/users/diego3g');
        x.send(null);

        x.onreadystatechange = function(){
            if(x.readyState === 4){
                if (x.status === 200){
                    resolve(JSON.parse(x.responseText));
                }else{
                    reject('Erro na requisição!');
                }
            }
        }
    })
}

minhaPromise()
    //executa quando chama o #resolve
    .then(function(response){
        console.log(response);
    })
    //executa quando chama o #reject
    .catch(function(erro){
        console.warn(erro);
    });



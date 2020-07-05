//o Axios é um encapsulamento em volta do XMLHttpRequest
// ele ajuda a retorna os valores de maneira mais facil
axios.get('https://api.github.com/users/diego3g')
   
    .then(function(response){
        console.log(response);
    })

    .catch(function(erro){
        console.warn(erro);
    })

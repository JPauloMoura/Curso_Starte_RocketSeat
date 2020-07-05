
// classe que nos da acesso as funcionalidades do AJAX
//para recupera informações de algum servidor
var x = new XMLHttpRequest();

//usaremos a API de usuarios do GIThub, como servidor

//=====FAZENDO A REQUISIÇÃO NO SERVIDOR=================
        //metodo GET(buscar), nesse servidor
x.open('GET','https://api.github.com/users/JPauloMoura');
x.send(null);

//=====VERIFICANDO SE OBTIVEMOS UMA RESPOSTA =========

x.onreadystatechange = function(){
    if(x.readyState === 4){
        console.log(JSON.parse(x.responseText));
    }
}

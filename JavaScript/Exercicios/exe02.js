
function buscarUsuario(){
    var user = document.querySelector('input').value;
    
    axios.get('https://api.github.com/users/'+user+'/repos')
    .then(function(response){
        criarLista(response.data);
    })
    .catch(function(){
        alert('usuari nao encontrada');
    });
}

function criarLista(repositorios){
    var elementLista = document.querySelector('ul');

    for(repo of repositorios){
        var elementItem = document.createElement('li');
        var item = document.createTextNode(repo.name);
    
        elementLista.appendChild(elementItem);
        elementItem.appendChild(item);

    }
}
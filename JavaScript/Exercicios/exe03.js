var elementLista = document.querySelector('ul');


function buscarUsuario(){
    var user = document.querySelector('input').value;

    carregarDados();
    
    axios.get('https://api.github.com/users/'+user+'/repos')
    .then(function(response){
         criarLista(response.data);
    })
    .catch(function(){
       usuariosNaoEncontrado();
    });
}



function criarLista(repositorios){
    elementLista.innerHTML = '';
   
        for(repo of repositorios){
            var elementItem = document.createElement('li');
            var item = document.createTextNode(repo.name);
        
            elementLista.appendChild(elementItem);
            elementItem.appendChild(item);
        }
}



function carregarDados(){
    elementLista.innerHTML = '';
    elementLista.innerHTML = '';

    var elementItem = document.createElement('li');
    var item = document.createTextNode('Carregando...');
    
    elementLista.appendChild(elementItem);
    elementItem.appendChild(item);
}

function usuariosNaoEncontrado(){
    elementLista.innerHTML = '';
    var elementItem = document.createElement('li');
    var item = document.createTextNode('ERRO 404 Usuario nao encontrado!');
    
    elementLista.appendChild(elementItem);
    elementItem.appendChild(item);
    elementLista.style.color = 'red';

}


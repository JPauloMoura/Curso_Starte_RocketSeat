var elementLista = document.querySelector('#todo ul');
var elementInput = document.querySelector('#texto');
var elementBotao = document.querySelector('#botao');

var listaItems = JSON.parse(localStorage.getItem('Lista_de_items')) || [];
elementBotao.onclick = adicionar;
atualizarLista();

function atualizarLista(){
    elementLista.innerHTML = '';
    
    for(item of listaItems){
        var elementLi = document.createElement('li');
        var liTexto = document.createTextNode(item);
        var elementLink = document.createElement('a');
        var bntExcluir = document.createTextNode('Excluir');
        elementLink.setAttribute('href', '#');
        
        var indice = listaItems.indexOf(item);
        elementLink.setAttribute('onclick','excluir('+indice+')');
        
        elementLista.appendChild(elementLi);
        elementLi.appendChild(liTexto);
        elementLi.appendChild(elementLink);
        elementLink.appendChild(bntExcluir);
    }         
}

function adicionar(){
    listaItems.push(elementInput.value);

    atualizarLista();
    elementInput.value= '';
    armazenaNoStorage();
    
}

function excluir(indice){
    listaItems.splice(indice, 1);
    atualizarLista();
    armazenaNoStorage();
}

function armazenaNoStorage(){
    localStorage.setItem('Lista_de_Items', JSON.stringify(listaItems));
}


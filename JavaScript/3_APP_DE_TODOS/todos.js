
//selecionandos os elementos da DOM quer seram manipulados
var elementLista = document.querySelector('#app ul');
var elementInput = document.querySelector('#app input');
var elementBotao = document.querySelector('#app button');

//JSON.parse()-> transforma os dados novamente em vetor
//caso nao funcione, listTodos vai receber um vetor vazio [].
var listTodos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*
var listTodos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade Rocketseat'
];
*/





//================CRIANDO A LISTA DE TODOS================================

function lista(){
    //tudo que estiver dentro da lista sera apagado
    elementLista.innerHTML = '';

    //percore cada item da lista
    for(item of listTodos){
        //cria o elemento  tag <li>
        var elementTodo = document.createElement('li');

        //cria o nó de texto usando os item da lista 
        var textoTodo = document.createTextNode(item);

        //cria o elemento  tag <a>
        var elementLink = document.createElement('a');
        elementLink.setAttribute('href', '#');

        //busca na minha lista o numero da posição de cada item
        var indice = listTodos.indexOf(item);

        //link recebe o atributo 'onclick' que chama a funçao 'deleteTodo'
        //passando o numero do indice que sera deletado
        //concatenação de strings ->        'string'+variavel+'string'
        elementLink.setAttribute('onclick', 'deleteTodo(' + indice + ')');
        
        //cria o nó de texto
        var textoLink = document.createTextNode('Excluir');
        
    // ElementoPai.           (ElementoFilho);
        elementLink.appendChild(textoLink);
        elementTodo.appendChild(textoTodo);
        elementTodo.appendChild(elementLink);

        //elementTodo(tag <li>) será filho de elementLista(tag <ul>)
        elementLista.appendChild(elementTodo);

    }  
}
    //chamada da função linha 12
    lista();



//============ADICIONANDO ITENS DE TODOS==============================

function addTodo(){
    //selecionando o valor(texto) do elementInput
    var textInput = elementInput.value;

    //adicionando um novo 'Todo' no final da lista de 'Todos'
    listTodos.push(textInput);

    //apagando o texto atual do Input
    elementInput.value = '';

    //chama a lista atualizada
    lista();
    saveToStorage();
}
    //chama a função para adicionar um novo item
    elementBotao.onclick = addTodo;



//======DELETAR ITENS DE TODOS====================

function deleteTodo(indice){
    //aparti da posicao 'indice', remova '1' item
    listTodos.splice(indice, 1);
    lista()
    saveToStorage();
}


//=========ARAMAZENANDO LISTA DE TODOS=============

function saveToStorage(){
    //localStorage-> so grava uma chave é um valor no formato de String
    //JSON.stringify-> converte o vertor em uma String.
    //variavel global| seta item no Storage|
    localStorage.setItem('list_todos', JSON.stringify(listTodos));
}
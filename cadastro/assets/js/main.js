//VARIAVEIS RELACIONADAS AO ARQUIVO "index.html"
const inputProduto = document.querySelector('.input-produto');//html->class="input-tarefa"
const btnProduto = document.querySelector('.btn-produto');//html->class="btn-tarefa"
const produtos = document.querySelector('.produtos');//html->class="tarefas"

function criaLi() {//função que cria um elemento li=linha no html
    const li = document.createElement('li');
    return li;
}

inputProduto.addEventListener('keypress', function(e) {//evento para os botões do teclado
    if (e.keyCode === 13) {//13 é o numero do keyCode do "Enter"
        if (!inputProduto.value) return;//o mesmo que esta no evento de click
        criaProduto(inputProduto.value);//o mesmo que esta no evento de click
    }
});
  
function limpaInput () {//função para apaga o input
    inputProduto.value = '';//transforma o valor em uma string com um "espaço"
    inputProduto.focus();// coloca o cusor no input que fica piscando
}

function criaBotaoApagar(li) {//função para apagar opção das tarefas
    li.innerText += ' ';//transforma a linha em um string "espaço"
    const botaoApagar = document.createElement('button');//criando um botão
    botaoApagar.innerText = 'Apagar';//add o nome do botão "apagar"
    //botaoApagar.classList.add('apagar');//pode adicionar uma class dessa forma
    botaoApagar.setAttribute('class', 'apagar');//pode add class dessa forma também
    botaoApagar.setAttribute('title', 'apagar essa tarefa');//add um titulo para o botão
    li.appendChild(botaoApagar);//add um botão do "apagar" 
}

function criaProduto(textoInput) {    //cria a produto da lista
    const li = criaLi();//aciona a função que cria um linha na  lista
    li.innerText = textoInput;//que vai ter escrito no textoInput vai ser add no innerText
    produtos.appendChild(li);//add o elemento "li" que é uma linha, em tarefas
    limpaInput();//aciona a função para limpar o input informado
    criaBotaoApagar(li);//add um botão de apagar na linha de tarefa criada
    salvarProdutos();//função que salva a informação da lista de tarefas
}

btnProduto.addEventListener('click', function() {//ação de click do botão salvar
    if (!inputProduto.value) return;
    criaProduto(inputProduto.value);
});

document.addEventListener('click', function(e) {//add um evento de click
    const el = e.target;//informa o que esta sendo clicado

    if (el.classList.contains('apagar')) {//se clicar no botão de apagar 
        el.parentElement.remove();//o elemento clicado vai ser removido
        salvarProdutos();//função que salva a informação da lista de tarefas
    }
});

function salvarProdutos() {//função que salva a informação da lista de tarefas
    const liProdutos = produtos.querySelectorAll('li');//selecionando todos "li"s
    const listaDeProdutos = [];//adicionando uma lista vasia
    
    for (let produto of liProdutos) {//um 'for' para adicionar essas linhas
        let produtotexto = produto.innerText;//mostra todo o dado da linha, até o 'apagar'
        produtotexto = produtotexto.replace('Apagar', '').trim();//modifica o 'apagar' para ''(replace), remover o espaço após o dado da linha(trim)
        listaDeProdutos.push(produtotexto);//add essa informação na lista de tarefa
        console.log(listaDeProdutos);
    }

    const produtosJSON = JSON.stringify(listaDeProdutos);//add um elemento JSON que converte a array(lista)->listaDeTarefas em string
    localStorage.setItem('produtos', produtosJSON);//convertendo de volta para um array
    //"localstorage" é um onde vai ser salvo no caso no navegador
    //"setItem()"o que é pra ser salvo, 'tarefas' vai ser o nome do elemento salvo
    //"tarefasJSON" é o elemento que vai ser recuperado
}

function adicionaTarefasSalvas() {//função para adicionar no navegador o que foi salvo
    const tarefas = localStorage.getItem('tarefas');//obtendo a 'tarefas' que foi salva
    const listaDeTarefas = JSON.parse(tarefas);//convertendo de volta para um array
    
    for (let tarefa of listaDeTarefas) {//para cada terefa informada
        criaTarefa(tarefa);//cria a tarefa salva
    }
}
adicionaTarefasSalvas();//executando a função para adicionar as tarefas
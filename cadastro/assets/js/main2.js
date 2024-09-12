const inputProduto = document.querySelector('.input-produto');
const inputValor = document.querySelector('.input-valor');
const btnSalvar = document.querySelector('.btn-produto');
const produtos = document.querySelector('.produtos');//lista
const tabela = document.querySelector('.tabela'); //tabela

function criaTr() {
    const tr = document.createElement('tr')
    return tr
}

// function criaTd() {
//     const td = document.createElement('td');
//     return td;
// }

inputProduto.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {//enter do PRODUTO
        if (!inputProduto.value) return;
        criaProduto(inputProduto.value, inputValor.value);
    }
});

inputValor.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {//enter do VALOR
        if (!inputValor.value) return;
        criaProduto(inputProduto.value, inputValor.value);
    }
});

function limpaInput () {//função para apaga o input
    inputProduto.value = '';
    inputValor.value = '';
    inputProduto.focus();
}

function criaBotaoApagar(li2) {//função para apagar opção das tarefas
    // li.innerText += ' ';
    li2.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar essa tarefa');
    li2.appendChild(botaoApagar);//add um botão do "apagar" 
}

document.addEventListener('click', function(e) {
    const el = e.target;//informa o que esta sendo clicado

    if (el.classList.contains('apagar')) {//se clicar no botão de apagar 
        el.parentElement.remove();//o elemento clicado vai ser removido
        salvarProdutos();//função que salva a informação da lista de tarefas
    }
});

function criaProduto(textoInput, textoInput2) { 
    const novoTr = criaTr();//cria uma elemento Tr, separando as linhas'
    novoTr.innerHTML = "<td>" + textoInput + "</td>" + "<td>" + textoInput2 + "</td>";
    
    // const tdP = criaTd();//produto
    // tdP.innerHTML = "<td>" + textoInput + "</td>";
    // tabela.appendChild(tdP);

    // const tdV = criaTd();//valor
    // tdV.innerHTML = "<td>" + textoInput2 + "</td>";
    // tabela.appendChild(tdV);

    tabela.appendChild(novoTr);
    limpaInput();
    criaBotaoApagar(novoTr);
    salvarProdutos();
}

btnSalvar.addEventListener('click', function() {
    if (!inputProduto.value && !inputValor.value) return;
    criaProduto(inputProduto.value, inputValor.value);
});

function salvarProdutos() {//função que salva a informação da lista de tarefas
    const liProdutos = tabela.querySelectorAll('tr');//selecionando todos "li"s
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


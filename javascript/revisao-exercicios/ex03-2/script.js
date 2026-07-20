// selecionando elementos dos inputs e botao
const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const botao = document.querySelector("#botao")

// selecionando elementos de lista de pessoas e total
const lista = document.querySelector("#lista")
const total = document.querySelector("#total")

// array vazio para os cadastros
const pessoas = []

// eventlistener para as ações com o click no botao
botao.addEventListener("click", () => {
    
    // objeto pessoa
    const pessoa = {
        nome: nome.value,
        idade: idade.value,
    }

    // mandar o valor de pessoa para dentro do array pessoas
    pessoas.push(pessoa)

    // mostrar na tela os dados cadastrados (pessoas)
    lista.innerHTML = pessoas.map(pessoa => `<li> ${pessoa.nome} - ${pessoa.idade} anos </li>`).join("")

    // mostrar o total de pessoas cadastradas
    total.innerHTML = `Total de pessoas cadastradas: ${pessoas.length}`

})
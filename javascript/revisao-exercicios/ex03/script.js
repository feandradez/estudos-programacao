// selecionando os elementos
const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")
const total = document.querySelector("#total")

// array vazio
const pessoas = []

botao.addEventListener("click", () => {

    // objeto pessoa
    const pessoa = {
        nome: nome.value,
        idade: idade.value,
    }

    // mandar o valor de pessoa para dentro do array
    pessoas.push(pessoa)

    // alterar o valor de "lista" no html
    lista.innerHTML = pessoas.map(pessoa => `<li> ${pessoa.nome} - ${pessoa.idade} anos </li>`).join("")

    // alterar o valor de "total" no html
    total.innerHTML = `Total de pessoas cadastradas: ${pessoas.length}`

})
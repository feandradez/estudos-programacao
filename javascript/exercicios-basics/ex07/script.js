const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")
const total = document.querySelector("#total")

const pessoas = []

btn.addEventListener("click", () => {
    const pessoa = {
        nome: nome.value,
        idade: idade.value,
    }
    
    pessoas.push(pessoa)

    lista.innerHTML = pessoas.map(pessoa => `<li> ${pessoa.nome} - ${pessoa.idade} anos </li>`).join("")

    total.innerHTML = `Total de pessoas cadastradas: ${pessoas.length}`
})


// 1. selecionar os elementos

const campo = document.querySelector("#campo")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")

// 2. array vazio pra guardar os itens

const itens = []

// 3. escutar o clique no botão

btn.addEventListener("click", () => {
    // 1. pegar o que o usuário digitou no campo
    const item = campo.value;
        
    if (item === "") {
        alert("Não é possível adicioanr um item vazio!")
        }
    else {
        // adiciona na lista
        // 2. adicionar no array
        itens.push(item)

        // 3. atualizar a lista na tela
        lista.innerHTML = itens.map(item => `<li>${item}</li>`).join("")
        }
})
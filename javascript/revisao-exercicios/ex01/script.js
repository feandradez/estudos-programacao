// selecionando os elementos
const campo = document.querySelector("#campo")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")

// array vazio
const itens = []

// ação com o click no botão
botao.addEventListener("click", () => {
    const item = campo.value;

    if (item === "") {
        alert ("Não pode adicionar item vazio.")
    }
    else {
        itens.push(item)

        lista.innerHTML = itens.map(item => `<li>${item}</li>`).join("")
    }
})
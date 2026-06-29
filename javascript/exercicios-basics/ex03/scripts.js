const botao = document.querySelector("#btn")
const titulo = document.querySelector("#titulo")

botao.addEventListener("click", () => {
    titulo.innerHTML = "Texto alterado!"; 
})
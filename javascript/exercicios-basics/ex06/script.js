const campo = document.querySelector("#campo")
const contagem = document.querySelector("#contagem")
const classificacao = document.querySelector("#classificacao")

campo.addEventListener("input", () => {
    const tamanho = campo.value.length;
    contagem.innerHTML = `Caracteres: ${tamanho}`

    if (tamanho <= 20) {
        classificacao.innerHTML = "Texto curto"
    }

    else if (tamanho <= 50) {
        classificacao.innerHTML = "Texto Médio"
    }
    
    else {
        classificacao.innerHTML = "Texto Longo"
    }
})
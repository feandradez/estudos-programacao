//selecionando os elementos
const usuario = document.querySelector("#usuario")
const senha = document.querySelector("#senha")
const botao = document.querySelector("#botao")
const mensagem = document.querySelector("#mensagem")
const contagem = document.querySelector("#contagem")

//objeto com as infos de login
const usuarioCorreto = {
    usuario: "admin",
    senha: "123456",
}

//variavel de tentativas
let tentativas = 0;

//silumando click no botao com o enter do teclado
senha.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        botao.click()
    }
})

//eventlistener
botao.addEventListener("click", () => {
    
    if (tentativas >= 3) {
        mensagem.innerHTML = "Usuário bloqueado."
    }

    else if (usuario.value === usuarioCorreto.usuario && senha.value === usuarioCorreto.senha) {
        mensagem.innerHTML = "Bem-vindo, admin!"
    }

    else {
        tentativas++
        mensagem.innerHTML = "Usuário ou senha incorretos.";
        contagem.innerHTML = `Número de tentativas (máximo de 3 tentativas): ${tentativas}`
    }

})
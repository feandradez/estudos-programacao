const usuario = document.querySelector("#usuario")
const senha = document.querySelector("#senha")
const btn = document.querySelector("#entrar")
const mensagem = document.querySelector("#mensagem")

const usuarioCorreto = {
    usuario: "admin",
    senha: "123456",
}

let tentativas = 0;

btn.addEventListener("click", () => {

    if (tentativas >= 3) {
        mensagem.innerHTML = "Usuário bloqueado"
    }

    else if (usuario.value === usuarioCorreto.usuario && senha.value === usuarioCorreto.senha) {
        mensagem.innerHTML = "Bem-vindo, Admin!"
    }

    else {
        tentativas++
        mensagem.innerHTML = "Usuário ou senha incorretos."
    }
})
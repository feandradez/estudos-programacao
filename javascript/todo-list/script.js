// Selecionando os elementos do HTML.
const campo = document.querySelector("#campo")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")

// Array vazio para receber cada task.
const tarefas = []

/* Função renderizar para atualizar sempre que tiver mudanças no array e retornar um <li> com o botao de excluir e a função de riscar o texto quando concluída. */
function renderizar() {

    if(tarefas.length === 0) {
        lista.innerHTML = "Nenhuma tarefa adicionada ainda."
    } else {
        lista.innerHTML = tarefas.map((task, index) => {
        return `<li onclick="concluir(${index})" style="${task. concluida ? 'text-decoration: line-through' : ''}"> ${task.descricao} <button onclick="event.stopPropagation(); excluir(${index})">Excluir</button>
        </li>`
    }).join("")
    }  

}

// Função pra adicionar as tasks ao array vazio.
function adicionar() {
    
    if (campo.value === "") {
        alert("Digite uma tarefa antes de adicionar!")
    } else {
        const task = {
        descricao: campo.value,
        concluida: false
    }
        tarefas.push(task);
        renderizar();
        campo.value = ""
    }
}

// Função para excluir a task do array.
function excluir(index) {
    tarefas.splice(index, 1);
    renderizar();
}

// Função para concluir a task.
function concluir(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    renderizar()
}

// EventListener para o "Enter".
campo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        adicionar();
    }
})

// EventListener para o "Click" no botão.
botao.addEventListener("click", () => {
    adicionar();
})

// Alternar o tema
document.querySelector("#tema").addEventListener("click", () => {
    document.body.classList.toggle("claro")
})

renderizar()
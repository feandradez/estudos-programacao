// Selecionando os elementos do HTML.
const campo = document.querySelector("#campo")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")

// Array vazio para receber cada task.
const tarefas = []

// Filtro de tarefas -> variavel com filtro ativo.
let filtroAtivo = "todas"

/* Função renderizar para atualizar sempre que tiver mudanças no array e retornar um <li> com o botao de excluir e a função de riscar o texto quando concluída. */
function renderizar() {

    let tarefasFiltradas = tarefas

    if (filtroAtivo === "pendentes") {
        tarefasFiltradas = tarefas.filter(task => task.concluida === false)
    }
    else if (filtroAtivo === "concluidas") {
        tarefasFiltradas = tarefas.filter(task => task.concluida === true)
    }

    if(tarefas.length === 0) {
        lista.innerHTML = "Nenhuma tarefa adicionada ainda."
    } else {
        lista.innerHTML = tarefasFiltradas.map((task, index) => {
        return `<li onclick="concluir(${index})" style="${task. concluida ? 'text-decoration: line-through' : ''}"> ${task.descricao} <button onclick="event.stopPropagation(); excluir(${index})">Excluir</button>
        </li>`
    }).join("")
    }  

    atualizarContador()
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

// Função para atualizar o contador.
function atualizarContador() {
    const totalTarefas = tarefas.length;
    const concluidas = tarefas.filter(task => task.concluida === true).length;
    const pendentes = tarefas.filter(task => task.concluida === false).length;

    // Usando innerHTML pra mostrar na tela as infos.
    document.querySelector("#total").innerHTML = `Total: ${totalTarefas}`

    document.querySelector("#concluidas").innerHTML = `Concluidas: ${concluidas}`

    document.querySelector("#pendentes").innerHTML = `Pendentes: ${pendentes}`
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


// EventListener nos botoes para os filtros.
document.querySelector("#filtro-todas").addEventListener("click", () => {
    filtroAtivo = "todas"
    renderizar()
})
document.querySelector("#filtro-pendentes").addEventListener("click", () => {
    filtroAtivo = "pendentes"
    renderizar()
})
document.querySelector("#filtro-concluidas").addEventListener("click", () => {
    filtroAtivo = "concluidas"
    renderizar()
})

renderizar()
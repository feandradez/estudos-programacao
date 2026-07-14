// 1. Selecionando os elementos
const tarefa = document.querySelector("#tarefa")
const btn = document.querySelector("#btn")
const lista = document.querySelector("#lista")
const total = document.querySelector("#total")

// 2. Array vazio pra guardar as tarefas
const tarefas = []

// Filtro padrao
let filtroAtivo = "todas"

// 3. Função que renderiza a lista na tela
function renderizar() {
    let tarefasFiltradas = tarefas

    if (filtroAtivo === "pendentes") {
        tarefasFiltradas = tarefas.filter(task => task.concluida === false)
    }
    
    else if (filtroAtivo === "concluidas") {
        tarefasFiltradas = tarefas.filter(task => task.concluida === true)
    }
    
        lista.innerHTML = tarefasFiltradas.map((task, index) => {
            return `<li onclick="concluir(${index})" style="${task.concluida ? 'text-decoration: line-through' : ''}">
            ${task.descricao}
            <button onclick="excluir(${index})">Excluir</button>
            </li>`
        }).join("")
    }

// 4. Função que exclui uma tarefa pelo index
function excluir(index) {
    tarefas.splice(index, 1)
    renderizar()
    atualizarTotal()
}

// 5. Função que marca como concluída
function concluir(index) {
    tarefas[index].concluida = !tarefas[index].concluida
    renderizar()
    atualizarTotal()
}

// 6. Função atualizar total
function atualizarTotal() {
    const totalTarefas = tarefas.length
    const concluidas = tarefas.filter(task => task.concluida === true).length
    const pendentes = tarefas.filter(task => task.concluida === false).length

    total.innerHTML = `
    Total de tarefas: ${totalTarefas} <br>
    Concluídas: ${concluidas} <br>
    Pendentes: ${pendentes}
    `
}

// 7. Adiciona nova tarefa ao clicar no botão
btn.addEventListener("click", () => {
    
    const task = {
        descricao: tarefa.value,
        concluida: false,
    }

    tarefas.push(task)
    renderizar()
    atualizarTotal()
})

// Selecionar cada filtro
document.querySelector("#filtroTodas").addEventListener("click", () => {
    filtroAtivo = "todas"
    renderizar()
})

document.querySelector("#filtroPendentes").addEventListener("click", () => {
    filtroAtivo = "pendentes"
    renderizar()
})

document.querySelector("#filtroConcluidas").addEventListener("click", () => {
    filtroAtivo = "concluidas"
    renderizar()
})
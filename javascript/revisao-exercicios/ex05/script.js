const descricao = document.querySelector("#descricao")
const botao = document.querySelector("#botao")
const lista = document.querySelector("#lista")
const totais = document.querySelector("#totais")

const tarefas = []

function renderizar() {
    lista.innerHTML = tarefas.map((task, index) => {
        return `<li onclick="concluir(${index})" style="${task.concluida ? 'text-decoration: line-through' : ''}">
            ${task.descricao}
            <button onclick="excluir(${index})">Excluir</button>
        </li>`
    }).join("")
}

function excluir(index) {
    tarefas.splice(index, 1);
    renderizar();
    atualizarTotais()
}

function concluir(index) {
    tarefas[index].concluida = !tarefas[index].concluida;
    renderizar();
    atualizarTotais()
}

botao.addEventListener("click", () => {
    const task = {
        descricao: descricao.value,
        concluida: false
    }
    tarefas.push(task);
    renderizar();
    atualizarTotais()
})

function atualizarTotais() {
    const totalTarefas = tarefas.length
    const concluidas = tarefas.filter(task => task.concluida === true).length
    const pendentes = tarefas.filter(task => task.concluida === false).length

    totais.innerHTML = `
        Total de tarefas: ${totalTarefas} <br>
        Tarefas concluídas: ${concluidas} <br>
        Tarefas pendentes: ${pendentes}
    `
}
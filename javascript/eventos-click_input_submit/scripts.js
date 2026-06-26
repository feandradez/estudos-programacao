const botao = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')


botao.addEventListener('click', (e) => {
    console.log(e.target)
    alert("Alguém clicou no botão: " + e.target.textContent);
});

input.addEventListener('input', (e) => {
    console.log(e.target.value);
})

div.addEventListener('scroll', (e) => {
    console.log(e.target.scrollTop);
})
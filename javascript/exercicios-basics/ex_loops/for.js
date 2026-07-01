//APROFUNDANDO ESTUDOS NO LOOP FOR

//Nível 1 — Entender a estrutura
//entendendo a estrutura basica
for (let i = 0; i < 5; i++) {
    console.log(i); //imprime de 0 à 4
}

//Nível 2 — Controlar o loop
//controlando a estrutura
//contando de 2 em 2
for (let i = 0; i < 10; i += 2) {
    console.log(i); //imprime de dois em dois
}
//contando de trás pra frente
for (let i = 5; i >= 0; i--) {
    console.log(i);
}

//Nível 3 — Usar o for com arrays
let nomes = ["fernando", "miguel", "matheus", "lucas", "gabriel"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//Nível 4 — For com condicionais dentro
for (let i = 0; i < 13; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    }
}

//exercício 5 — FizzBuzz!
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    
    else {
        console.log(i);
    }
}
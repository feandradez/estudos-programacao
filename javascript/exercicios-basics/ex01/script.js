/*
function calcular(numero1, numero2, operacao) {
    if (operacao === "somar") {
        return numero1 + numero2;
    }
    else if (operacao === "subtrair") {
        return numero1 - numero2;
    }
    else if (operacao === "multiplicar") {
        return numero1 * numero2;
    }
    else {
        return "Operação inválida";
    }
}

const resultado1 = calcular(10, 5, "somar");
const resultado2 = calcular(10, 5, "subtrair");
const resultado3 = calcular(10, 5, "multiplicar");
const resultado4 = calcular(10, 5, "dividir");

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

//usando resultado em outro calculo - apenas testando

const resultadoZ = calcular(resultado1, 2, "multiplicar")
console.log(resultadoZ)
*/

//usando switch case

function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case "somar":
            return numero1 + numero2;
        case "subtrair":
            return numero1 - numero2;
        case "multiplicar":
            return numero1 * numero2;
        default:
            return "operação inválida"
    }
}

// nesse caso posso deixar sem o break pois o return já faz o papel de sair da função. se fosse usar o break teria que ser junto com o console.log

console.log(calcular(10, 5, "somar"));
console.log(calcular(10, 5, "subtrair"));
console.log(calcular(10, 5, "multiplicar"));
console.log(calcular(10, 5, "dividir"));
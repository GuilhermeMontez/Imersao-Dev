//Pedindo os valores e convertendo para INT
var primeiroValor = parseInt(prompt("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt("Digite o segundo valor:"))

var operacao = prompt("Digite 1 = soma, 2 = subtração, 3 = multiplicação, e 4 = divisão.")

if(operacao == 1) {
    var resultado = primeiroValor + segundoValor
 document.write(`<h2> ${primeiroValor} + ${segundoValor} = ${resultado}`)

} else if(operacao == 2) {
    var resultado = primeiroValor - segundoValor
    document.write(`<h2> ${primeiroValor} - ${segundoValor} = ${resultado}`)

} else if(operacao == 3) {
    var resultado = primeiroValor * segundoValor
    document.write(`<h2> ${primeiroValor} X ${segundoValor} = ${resultado}`)

} else if(operacao == 4) {
    var resultado = primeiroValor / segundoValor
    document.write(`<h2> ${primeiroValor} &#247 ${segundoValor} = ${resultado}`)
} else{
    document.write("<h2>Opção inválida!</h2>")
}
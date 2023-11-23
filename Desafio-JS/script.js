alert("Vamos fazer uns calculos?")
let number1= Number(prompt("Envie o primeiro numero"))
let number2= Number(prompt("Agora, envie o segundo"))
alert("Primeiro vamos calcular a soma")
let soma = number1 + number2
alert(`o resultado da soma dos dois números é ${soma}`)
let sub = number1 - number2
alert("Agora vamos subtrair")
alert(`o resultado da subtração é ${sub}`)
let mult = number1 * number2
alert("E se a gente multiplicasse?")
alert(`resultado da multiplicação ${mult}`)
let divisao = (number1 / number2).toFixed(2)
alert("Divisão")
alert(`resultado da divisão é ${divisao}`)
alert("Resto")
let resto = number1 % number2 
alert(`o resto é ${resto}`)
if(soma % 2 === 0){
    alert(`A soma dos 2 números resulta em ${soma}, sendo assim par`)
}else
{
    alert(`A soma dos 2 números resulta em ${soma}, sendo assim impar`)
}
alert("vamos verificar se os 2 números são iguais ou diferentes")
if (number1===number2){
    alert("Eles são números iguais")
}else if (number1 !==number2){
    alert("Eles são diferentes")
}
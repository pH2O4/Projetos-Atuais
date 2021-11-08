const calculadora = (operando1, tipodecalculo, operando2) => {
    switch(tipodecalculo){
        case '+':
            resultadodasoma = operando1 + operando2
            console.log(`O Resultado da soma é ${resultadodasoma}`)
            break
        case '-':
            resultadodasubtração = operando1 - operando2
            console.log(`O Resultado da subtração é ${resultadodasubtração}`)
            break
        case '*':
            resultadodamultiplicação = operando1 * operando2
            console.log(`Resultado da multiplicação é ${resultadodamultiplicação}`)
            break
        case '/':
            resultadodadivisão = operando1 / operando2
            console.log(`Resultado da divisão é ${resultadodadivisão}`)
            break
        default: console.log("operação invalida")
    }
}

calculadora(2, '+', 2)
calculadora(3, '-', 4)
calculadora(4, '*', 5)
calculadora(7, '/', 12)

const calcularaumento = (planodeaumento, salário) => {
    switch(planodeaumento){
        case 'A':
            let calculodeaumentoA = salário + (salário * 0,10)
            console.log(`O Aumento no plano A será ${calculodeaumentoA}`)
            break
        case 'B':
            let calculodeaumentoB = salário + (salário * 0,15)
            console.log(`O Aumento no plano B será ${calculodeaumentoB}`)
            break
        case 'C':
        let calculodeaumentoC = salário + (salário * 0,20)
        console.log(`O aumento no plano C será ${calculodeaumentoC}`)
        break
        default: console.log("Plano invalido ou ainda não cadastrado")
    }
}

calcularaumento('A', 100)
calcularaumento('B', 100)
calcularaumento('C', 100)
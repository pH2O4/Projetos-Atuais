const TipagemNúmerica = (Númerolimite) => {
    let i = 0
    console.log(`PRIMEIRO NÚMERO PAR`)
    while (i < Númerolimite) {
        if ((i % 2) == 0 & i !== 0) {
            console.log(`${i} (PAR)`)
        }
        i++
    }
    console.log(`ÚLTIMO PAR`)
    let o = 0

    console.log(`PRIMEIRO IMPÁR`)
    while (o < Númerolimite) {
        if (((o % 2) == 0) == false) {
            console.log(`${o} (IMPAR)`)
        }
        o++
    }
    console.log(`ÚLTIMO PAR`)
}

TipagemNúmerica(101)
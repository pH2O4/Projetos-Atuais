const verificandocarro = (opçãodecarro) => {
    switch(opçãodecarro){
        case 'hatch':
         console.log("Compra efetuada com sucesso")
        break
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
        console.log("Tem certeza que não prefere esse modelo?")
        default: console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

verificandocarro('hatch')

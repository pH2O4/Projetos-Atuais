const calculandoPreço = (codigoDoAlimento, quantidade) => {
  switch (codigoDoAlimento) {
    case 100:
      let calculandoPreçoDoCachorroQuente = quantidade * 3.
      console.log(`Pedido: Cachorro quente. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoCachorroQuente}`)
      break
    case 200:
      let calculandoPreçoDoHambúrguerSimples = quantidade * 4.00
      console.log(`Pedido: Hambúrguer Simples. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoHambúrguerSimples}`)
      break
    case 300:
      let calculandoPreçoDoCheeseburguer = quantidade * 5.50
      console.log(`Pedido: Cheese Burguer. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoCheeseburguer}`)
      break
    case 400:
      let calculandoPreçoDoBauru = quantidade * 7.50
      console.log(`Pedido: Bauru. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoBauru}`)
      break
    case 500:
      let calculandoPreçoDoRefrigerante = quantidade * 3.50
      console.log(`Pedido: Regrigerante. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoRefrigerante}`)
      break
    case 600:
      let calculandoPreçoDoSuco = quantidade * 5.50
      console.log(`Pedido: Suco. Quantidade: ${quantidade}. Preço: $${calculandoPreçoDoSuco}`)
      break
  }
}

calculandoPreço(100, 3)
calculandoPreço(200, 4)
calculandoPreço(300, 5)
calculandoPreço(400, 6)
calculandoPreço(500, 8)
calculandoPreço(600, 3)

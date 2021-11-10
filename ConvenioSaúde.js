const calcularConvenio = (idadeDoCliente) => {

  if(idadeDoCliente < 10){
    console.log(`O Cliente paga $180`)
  }else if(idadeDoCliente >= 10 & idadeDoCliente <= 30){
    console.log(`O Cliente paga $150`)
  }else if(idadeDoCliente > 30 & idadeDoCliente <= 60){
    console.log(`O Cliente paga $195`)
  }else{
    console.log(`O Cliente paga $230`)
  }
}

calcularConvenio(9)
calcularConvenio(15)
calcularConvenio(60)
calcularConvenio(61)
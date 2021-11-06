const Baskara = (ax2, bx, c) => {
  
const Delta = (bx * bx) - (4 * ax2 * c)
if(Delta < 0){
  console.log(`Delta é negativo`)
}else{const DeltaTratado = Math.sqrt(Delta)
const ContaPositiva = (-bx + DeltaTratado) / (2 * ax2)
const ContaNegativa = (-bx - DeltaTratado) / (2* ax2)
return console.log(`Os possíveis resultados são: ${ContaNegativa}, ${ContaPositiva}`)
}}


Baskara(1, 3, 2)





// 3x² - 5x + 12
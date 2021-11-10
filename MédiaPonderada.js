const valiandoNotas = (nota1, nota2, nota3) => {
    if ((nota1 < 0 | nota1 > 10) | (nota2 < 0 | nota2 > 10) | (nota3 < 0 | nota3 > 10)) {
        console.log(`Alguma nota está invalida, notas abaixo de 0 e acima de 11 não serão calculados pelo sistema.`)
    } else{
        let calculandoMédiaPonderada = (nota1 * 0.4) + (nota2 * 0.3) + (nota3 * 0.3)
    situaçãodoaluno(calculandoMédiaPonderada)
   
}}

function situaçãodoaluno(médiaPronta){
if(médiaPronta >= 5) {
    console.log(`Aluno Aprovado, nota: ${médiaPronta.toFixed(2)}.`)
} else {

    console.log(`Aluno reprovado, nota: ${médiaPronta.toFixed(2)}, necesário comunincar os país.`)
}
}

valiandoNotas(8, 9, 10)
valiandoNotas(3, 4, 2)
valiandoNotas(-1, 10, 9)
valiandoNotas(11, 9, 8)
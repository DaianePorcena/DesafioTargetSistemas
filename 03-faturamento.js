const fs = require('fs')

const dadosFaturamento = JSON.parse(
  fs.readFileSync('assets/faturamento/dados.json')
)
const valores = dadosFaturamento.map(item => item.valor)

function retornarMinMaxValor(valores) {
  let menorValor = Number.MAX_VALUE
  let maiorValor = Number.MIN_VALUE

  for (const valor of valores) {
    menorValor = Math.min(menorValor, valor)
    maiorValor = Math.max(maiorValor, valor)
  }

  return { menorValor, maiorValor }
}

function calcularMedia(valores) {
  let soma = 0

  for (const valor of valores) {
    soma += valor
  }

  return (soma / valores.length).toFixed(2)
}

function calcularDiasAcimaMedia(valores, media) {
  let diasAcimaMedia = 0
  for (const valor of valores) {
    if (valor > media) {
      diasAcimaMedia++
    }
  }
  return diasAcimaMedia
}

const mediaMensal = calcularMedia(valores)
console.log(`media: ${mediaMensal}`)

const { menorValor, maiorValor } = retornarMinMaxValor(valores)
const diasAcimaMedia = calcularDiasAcimaMedia(valores, mediaMensal)

console.log(`Menor valor de faturamento: R$${menorValor}`)
console.log(`Maior valor de faturamento: R$${maiorValor}`)
console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`)

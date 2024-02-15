const faturamentoPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

const faturamentoTotal = Object.values(faturamentoPorEstado).reduce(
  (a, b) => a + b
)

const porcentagensPorEstado = {}

console.log('Faturamento por estado: ')
console.log('------------------------')

for (const estado in faturamentoPorEstado) {
  porcentagensPorEstado[estado] = (
    (faturamentoPorEstado[estado] / faturamentoTotal) *
    100
  ).toFixed(2)
}

for (const estado in porcentagensPorEstado) {
  console.log(`${estado}: ${porcentagensPorEstado[estado]}%`)
}

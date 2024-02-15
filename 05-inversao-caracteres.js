function inverterString(texto) {
  let novaString = ''

  for (let i = texto.length - 1; i >= 0; i--) {
    novaString += texto[i]
  }

  return novaString
}

const texto = 'Target Sistemas'
const textoInvertido = inverterString(texto)
console.log(`String original: ${texto}`)
console.log(`String invertida: ${textoInvertido}`)

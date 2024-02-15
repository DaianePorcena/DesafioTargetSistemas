function Fibonacci(numero) {
	let numero_atual = 0
	let numero_sucessor = 1

	while (numero_atual < numero) {
		let numero_temporario = numero_atual
		numero_atual = numero_sucessor
		numero_sucessor += numero_temporario
	}

	if (numero_atual === numero) {
		return `O número ${numero} pertence a sequência Fibonacci!`
	} else {
		return `O número ${numero} não pertence a sequência Fibonacci!`
	}
}

let num = 42
console.log(Fibonacci(num))

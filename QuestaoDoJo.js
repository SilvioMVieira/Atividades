var notasAlunos = []
var i = 0
var acumulador = 0 
var mediaTurma = 0
var num = null

while (i < 20){
num = Number(prompt(“Ïnforme a nota do aluno ” + i))
notasAlunos.push(num)
i++
console.log(num)
	acumulador = acumulador + num
}

mediaTurma = acumulador/20

var qtAprovado = 0
for (var i = 0, i < 20, i++) {
	if (notasAlunos[i] > mediaTurma){
		qtAprovado = qtAprovado+1
	}
}

console.log(mediaTurma)
console.log(qtAprovado)

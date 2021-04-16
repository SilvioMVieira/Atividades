Questão 1
var i = 0
var n1 = 0
var n2 = 0
var n3 = 0

for (i; i < 3; i++) {
    var n = Number(prompt("Digite um número: " + (i + 1)))

    if (i == 0) {
        n1 = n
    }
    if (i == 1) {
        n2 = n
    }
    if (i == 2) {
        n3 = n
    }
}

console.log(n1)
console.log(n2)
console.log(n3)

if (n1 > n2) {
    var aux = n1
    n1 = n2
    n2 = aux
}
if (n1 > n3) {
    var aux = n1
    n1 = n3
    n3 = aux
}
if (n2 > n3) {
    var aux = n2
    n2 = n3
    n3 = aux
}
console.log(n1)
console.log(n2)
console.log(n3)

Questão 2
var n1 = Number(prompt("Digite um número: "))
var n2 = Number(prompt("Digite um número: "))
var n3 = Number(prompt("Digite um número: "))
var numero = [n1, n2, n3]
var ordem = Number(prompt("Digite a ordem dos números: \n 1 - Crescente \n 2 - Decrescente "))

if (ordem == 1) {
    console.log("Ordem crescente:")
    function ordenaNum(a, b) {
        return a - b;
    }
    numero.sort(ordenaNum);
    for (i = 0; i < numero.length; i++) {
        console.log(numero[i] + " ")
    }
}
if (ordem == 2) {
    console.log("Ordem decrescente:")
    function ordenaNum(a, b) {
        return b - a;
    }
    numero.sort(ordenaNum);
    for (i = 0; i < numero.length; i++) {
        console.log(numero[i] + " ")
    }
}

Questão 3
var i = 1
var acumulado = 0
var media = 0
var cPar = 0

console.log("Os números pares são: ")
for (i; i < 10; i++) {
    var n = Number(prompt("Digite um número ou 0 para sair: "))

    if (n > 0) {
        if (n % 2 == 0) {
            acumulado = acumulado + n
            cPar = cPar + 1
            console.log(n)
        }
    }

    if (n == 0) {
        break
    }
    media = acumulado / cPar

}
console.log("A soma dos números pares digitados é: " + acumulado)
console.log("A média aritmética dos números pares digitados é: " + media)


Questão 4
var i = 0;
var soma = 0;
var numero = 0;

for (i; i < 500; i++) {
    numero = numero + 1
    if (numero % 2 == 1 && numero % 3 == 0) {
        soma = soma + numero
    }
}
console.log("A soma de todos os números ímpares múltiplos de 3 é: " + soma)


Questão 5
var vinhoBranco = Number(prompt("Digite a quantidade de garrafas de vinho branco: "))
var vinhoTinto = Number(prompt("Digite a quantidade de garrafas de vinho tinto: "))
var vinhoRose = Number(prompt("Digite a quantidade de garrafas de vinho rose: "))
var estoqueVinho = (vinhoBranco + vinhoTinto + vinhoRose)


vinhoBranco = vinhoBranco / estoqueVinho * 100
vinhoTinto = vinhoTinto / estoqueVinho * 100
vinhoRose = vinhoRose / estoqueVinho * 100

console.log("O estoque total de vinhos é: " + estoqueVinho)
alert("Percentual por tipo de vinho: \n" + "Branco: " + vinhoBranco + "%" + "\n"
    + "Tinto: " + vinhoTinto + "%" + "\n" + "Rosé: " + vinhoRose + "%")

Questão 6
var i = 1
var conta = 5 * acumulador
var acumulador = 0

console.log("Tabuada de 5: ")
do {
    for (acumulador; acumulador < 10; acumulador++) {
        acumulador = acumulador + i
    }
    console.log("5 * " + i + " = " + (i * 5))
    i++

} while (i <= 10)

Questão 7
var numero = Number(prompt('Escolha um numero para realizar a tabuada:'))
var i = 1
var contador = 0

console.log("Tabuada de: " + numero)
do {
    for (contador = 1; contador <= 10; contador++) {
        contador = contador + i
    }

    console.log(numero + " * " + i + " = " + i * numero)
    i++
} while (i <= 10)

Questão 8
// Dado o algoritmo que foi realizado na aula anterior(parte 1 e 2):
// Parte 1. Desenvolva um algoritmo que calcule a media aritmética entre quatro notas quaisquer fornecidas pelo usuário.
// Pense em:
// dados de entrada, dados de saída, o que deve ser feito.), informe se o aluno foi aprovado.Para o aluno ser aprovado,
//     a sua média tem que ser superior a 7.0
// Parte 2. Melhore o algoritmo anterior da questão 1 com novas condições:
// i.o aluno será aprovado por média(AM) se a sua nota for >= 7.0
// ii.o aluno terá direito a prova final se a sua média for >= 3.0 e < 7.0
// iii.o aluno será aprovado por conceito(AC) se a sua nota na prova final for >= 5.0
// iv.o aluno será reprovado por conceito(RC) se a sua nota na prova final for < 5.0
// v.o aluno será reprovado(R) se a sua média for < 3.0 

var contador = 0
for (var i = 0; i < 4; i++) {
    var nota = Number(prompt("Digita a nota da " + (i + 1) + "ª Avaliação"))
    contador = contador + nota
}
var media = contador / 4
console.log(media)

if (media >= 7) {
    console.log("Com a média(AM) de " + media + " o aluno foi aprovado!")
} else if (media >= 3 && media < 7) {
    console.log("Com a média de " + media + " o aluno fará prova final!")
    var mediaFinal = Number(prompt("Informe a média final do aluno: "))
    console.log("A média final(R) do aluno foi: " + mediaFinal)
} else {
    console.log("Com a média(R) de " + media + " o aluno foi reprovado!")
}
if (mediaFinal >= 5) {
    console.log("O aluno foi aprovado por conceito(AC) com a nota " + mediaFinal)
} else {
    console.log("O aluno foi reprovado por conceito(RC) com a nota " + mediaFinal)
}

// Dados as notas fornecidas pelo aluno, o algoritmo deve informar o seu conceito.
//     re - construa - o tendo como principal mudança que cada turma tem o número fixo de 50 alunos.
// O programa deve informar também:
// i.o percentual de alunos aprovados
// ii.o percentual de alunos reprovados
// iii.o percentual de alunos que fizeram final
// iv.a média das notas dos alunos que fizera a prova final

var contadorAp = 0
var contadorPf = 0
var contadorRp = 0
do {
    var mediaAluno = Number(prompt("Informe a média do aluno: "))

    if (mediaAluno >= 7) {
        var aprovados = 0
        contadorAp = contadorAp + 1
        aprovados = contadorAp

    } else if (mediaAluno >= 3 && mediaAluno < 7) {
        var provaFinal = 0
        contadorPf = contadorPf + 1
        provaFinal = contadorPf
    } else {
        var reprovados = 0
        contadorRp = contadorRp + 1
        reprovados = contadorRp
    }
} while ((contadorAp + contadorPf + contadorRp) < 10)
console.log("Alunos aprovados: " + aprovados)
console.log("Alunos reprovados: " + reprovados)
console.log("Alunos na final: " + provaFinal)
console.log("Percentual de alunos aprovados: " + (aprovados / 10) * 100 + "%")
console.log("Percentual de alunos aprovados: " + (reprovados / 10) * 100 + "%")
console.log("Percentual de alunos aprovados: " + (provaFinal / 10) * 100 + "%")

var contadorAp = 0
var contadorPf = 0
var contadorRp = 0
var mediaNotas = 0
var qtdAlunos = Number(prompt("Informe o número de alunos da turma: "))
   do{
    var mediaAluno = Number(prompt("Informe a média do aluno: "))
    
    if (mediaAluno >= 7) {
        var aprovados = 0
        contadorAp = contadorAp + 1
               
    } else if(mediaAluno >= 3 && mediaAluno < 7){
        var provaFinal = 0 
        contadorPf = contadorPf + 1
        mediaNotas = mediaNotas + mediaAluno
        } else {
        var reprovados = 0 
        contadorRp = contadorRp + 1
        
        }
    } while ((contadorAp + contadorPf + contadorRp) < qtdAlunos)
    //console.log(mediaNotas)
    aprovados = contadorAp
    provaFinal = contadorPf
    mediaNotas = mediaNotas/contadorPf
    reprovados = contadorRp

    console.log("Alunos aprovados: " + aprovados)
    console.log("Alunos reprovados: " + reprovados)
    console.log("Alunos na final: " + provaFinal)
    console.log("Percentual de alunos aprovados: " + (aprovados/qtdAlunos) * 100 + "%")
    console.log("Percentual de alunos reprovados: " + (reprovados/qtdAlunos) * 100 + "%")
    console.log("Percentual de alunos que fizeram prova final: " + (provaFinal/qtdAlunos) * 100 + "%")
    console.log("A média das notas dos alunos que fizeram prova final foi de: " + mediaNotas)



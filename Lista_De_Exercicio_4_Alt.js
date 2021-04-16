var num1 = Number(prompt("Digite um número"))
var num2 = Number(prompt("Digite outro número"))
var num3 = Number(prompt("Digite outro número"))

var aux = num1
if (num2 < num1) {
    aux = num2;
    num2 = num1;
    num1 = aux;
}

if (num3 < num1) {
    aux = num3;
    num3 = num1;
    num1 = aux;
}

if (num3 < num2) {
    aux = num3;
    num3 = num2;
    num2 = aux;
}
alert(`${num1}-${num2}-${num3}`);

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
    var 1º = 0
    var 2º = 0
    var 3º = 0
    if (n1 < n2 && n1 < n3) {
        1º = n1
    }

}
console.log("Números em ordem crescente:")
console.log(n1)
console.log(n2)
console.log(n3)

var N1 = Number(prompt("Digite o primeiro valor: "))
var N2 = Number(prompt("Digite o segundo valor: "))
var N3 = Number(prompt("Digite o terceiro valor: "))
var i = 0

for (i; i < 1; i++) {
    if (N1 < N2 && N1 < N3 && N2 < N3) { //123
        console.log("1º: " + N1)
        console.log("2º: " + N2)
        console.log("3º: " + N3)
    } else if (N1 < N3 && N2 > N1 && N3 < N2) { //132
        console.log("1º: " + N1)
        console.log("2º: " + N3)
        console.log("3º: " + N2)
    } else {
        if (N3 < N1 && N2 < N1 && N3 < N2) { //321
            console.log("1º: " + N3)
            console.log("2º: " + N2)
            console.log("3º: " + N1)
        } else if (N1 > N2 && N2 < N3 && N1 < N3) { //213
            console.log("1º: " + N2)
            console.log("2º: " + N1)
            console.log("3º: " + N3)
        } else {
            if (N1 < N2 && N2 > N3 && N1 > N3) { //231
                console.log("1º: " + N3)
                console.log("2º: " + N1)
                console.log("3º: " + N2)
            } else {                         //312 (N1 > N2 && N2 < N3 && N1 > N3)
                console.log("1º: " + N2)
                console.log("2º: " + N3)
                console.log("3º: " + N1)
            }
        }
    }

}

//modo correto
var n1 = Number(prompt("Digite um número: "))
var n2 = Number(prompt("Digite um número: "))
var n3 = Number(prompt("Digite um número: "))
var numero = [n1, n2, n3]

console.log("Ordem crescente:")
function ordenaNum(a, b) {
    return a - b;
}
numero.sort(ordenaNum);
for (i = 0; i < numero.length; i++) {
    console.log(numero[i] + " ")
}
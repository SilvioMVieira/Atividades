//Crie uma função que recebe um array de 2 números e coloque em ordem crescente. Não usar o comando sort.
var numeros = [ ]

for(var i = 0; i < 2; i++){
    var num = Number(prompt("Digite um número:  "))
    numeros.push (num)  
     console.log("Vetor numeros")
     console.log(ordenavetor(numeros))
}
function ordenavetor(vetor){
    var temp = null
    if (vetor[0] > vetor[1]){
        temp = vetor[0]
        vetor[0] = vetor[1]
        vetor[1] = temp
    } 
    
return  vetor
}

//02. Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. 
//Crie sua própria função para isso.

var numeros = []

for (var i = 0; i < 3; i++) {
    var num = Number(prompt("Digite um número: "))
    numeros.push(num)
}
console.log(numeros)


function ordenavetor(vetor) {
    var temp = null
    if (vetor[1] < vetor[0]) {
        temp = vetor[1]
        vetor[1] = vetor[0]
        vetor[0] = temp
    }
    if (vetor[2] < vetor[0]) {
        temp = vetor[2]
        vetor[2] = vetor[0]
        vetor[0] = temp
    }
    if (vetor[2] < vetor[1]) {
        temp = vetor[2]
        vetor[2] = vetor[1]
        vetor[1] = temp
    }
    return vetor
}
console.log(ordenavetor(numeros))


//03. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
//Modifique os elementos do array de modo a a sequência de números ficar do contrário.
//Ou seja, se digitou: 1,2,3
//Vai aparecer: 3,2,1
var numeros = []

for (var i = 0; i < 3; i++) {
    var num = Number(prompt("Digite um número: "))
    numeros.push(num)
}
console.log("Array" )
console.log(numeros[0], numeros[1], numeros[2])

function ordenavetor(array) {
    for(j = 0; j < array.length - 1; j++){
        for(h = 0; h < array.length - 1 - j; h++){
            if (array[h] < array[h + 1]){
                var temp = array[h]
                array[h] =  array[h + 1]
                array[h + 1] = temp
            }
        }
    }
    return array
}
console.log("Array ao contrario" )
console.log(ordenavetor(numeros))

//Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no vetor
//Depois, o usuário vai preenchendo elemento por elemento do vetor.
//Ao final, exiba o array e o array ao contrário.
var numeros = [ ]
var iVetor = Number(prompt("Informe quantos números o vetor terá:"))
    

for (var i = 0; i < iVetor; i++) {
    var num = Number(prompt("Digite um número: "))
    numeros.push(num)
}
console.log("Vetor")
console.log(numeros)

var vetorInvertido =[]
for(var j = numeros.length -1;j >= 0; --j){
    vetorInvertido.push(numeros[j])
}
    console.log("Vetor Invertido")
    console.log(vetorInvertido)

//Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos
//na ordem crescente. Faça sua função na mão, não invoque nenhum método de sorting.
var numeros = [ ]
var iVetor = Number(prompt("Informe quantos números o vetor terá:"))
    

for (var i = 0; i < iVetor; i++) {
    var num = Number(prompt("Digite um número: "))
    numeros.push(num)
}
console.log("Array numeros")
console.log(numeros)

function ordenavetor(array) {
    for(j = 0; j < array.length - 1; j++){
        for(h = 0; h < array.length - 1 - j; h++){
            if (array[h] > array[h + 1]){
                [array[h], array[h + 1]] = [array[h + 1], array[h]]
                
            }
        }
    }
    return array
}
console.log("Array numeros ordenado")
console.log(ordenavetor(numeros))

//teste lógica
var V = [6,4,8,2,7,1]

for(var i = 0; i < V.length; i++){
    for(var j = i + 1; j < V.length; j++){
        if(V[i] > V[j]){
            var aux = V[i]
            V[i] = V[j]
            V[j] = aux
        }      
    }
}
//outra forma
var vetor = [ ]
var iVetor = Number(prompt("Informe quantos números o vetor terá:"))
    

for (var i = 0; i < iVetor; i++) {
    var num = Number(prompt("Digite um número: "))
    vetor.push(num)
}
console.log("Vetor")
console.log(vetor)

for(var i = 0; i < vetor.length; i++){
    for(var j = i + 1; j < vetor.length; j++){
        if(vetor[i] > vetor[j]){
            var aux = vetor[i]
            vetor[i] = vetor[j]
            vetor[j] = aux
        }      
    }
}
console.log(vetor)
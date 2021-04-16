// Declarar uma variável chamada `myvar`, sem valor.
var myvar

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma = soma++

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma = soma * 3

// Qual é o valor da variável `soma` até aqui?
soma = 15 + 8
soma = 23
soma = soma++
soma = 23 + 1
soma  = 24
soma = 24 * 3
soma = 72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijão', 'ovo']

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
comida[1];
"feijão"

// Digite o código que verifica se a variável `soma' é iguarie l a variável `myvar` (testando também o tipo).
if(soma == myvar)

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
if(myvar <= soma)

// Crie as variáveis necessárias para o cadastro de um cidadão, ao final imprima as informações digitadas em um unico texto
var cidadao = {
    nome: "João de Souza Santos",
    nascimento: "10/10/1999",
    cidade: "Feira de Santana",
    estado: "BA",
    endereco: "Rua Aleluia, s/n - Bairro - Amem",
    identidade: "123456789",
    cpf: "11122233345",
    telefone: "7512345678",
}
console.log("O cidadão " + cidadao.nome + ", nascido em " + cidadao.nascimento + ", na cidade de " + cidadao.cidade + " - " + cidadao.estado +
" residente na " + cidadao.endereco + ", de documento de identidade nº " + cidadao.identidade + " e CPF nº " + cidadao.cpf + ", e tem o telefone de contato nº"
 + cidadao.telefone + ", foi cadastrado no sistema")
// Faça as 4 operações matemáticas com duas variáveis.
var n1 = 10
var n2 = 2
var soma = n1 + n2
var subtracao = n1 - n2
var multiplicacao = n1 * n2
var divisao = n1 / n2

// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(a, b){
    return (a + b)
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = function soma(a, b){}
soma = soma(num1, num2) + 5

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var num3


/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function valor(num3, mensagem) {
    var num3 = 12
   var mensagem = ("O valor da variável agora é " + num3)
    return mensagem
}

// Invoque a função criada acima.
valor()

// Qual o retorno da função? (Use comentários de bloco).
O valor da variável agora é 12

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function soma(a, b, string){
    return (a * b * string) + 2
}

// Invoque a função criada acima, passando só dois números como argumento.
soma(5, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
NaN

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
soma(5, 3, 4)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
62

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
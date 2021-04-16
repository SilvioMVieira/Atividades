1ª QUESTÃO

var nomeAluno = prompt("Informe o nome do aluno: ")
var nota1 = Number(prompt("Digita a nota 1")) //nota da primeira unidade
var nota2 = Number(prompt("Digita a nota 2")) //nota da segunda unidade
var nota3 = Number(prompt("Digita a nota 3")) //nota da terceira unidade
var nota4 = Number(prompt("Digita a nota 4")) //nota da quarta unidade
//media para aprovação
var mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4
alert("Média do aluno é: " + mediaAluno)

if (mediaAluno >= 7) {
    alert(nomeAluno + " foi aprovado!")
}
else {
    alert(nomeAluno + " fará prova final")
}
var mediaFinal = Number(prompt("Digita a Nota Final"))
if (mediaFinal >= 5) {
    alert(nomeAluno + " foi aprovado(a) na final!")
} else {
    alert(nomeAluno + " foi reprovado(a) na final!")
}

2ª QUESTÃO
var usuario = prompt("Informe o nome do usuário:")
var senha = prompt("Digite a senha do usuário:")

if (senha == "ASDFG") {
    alert("Acesso Permitido")
} else {
    alert("Acesso Negado")
}

3ª QUESTÃO
var L1 = Number(prompt("Digite o valor do lado1:"))
var L2 = Number(prompt("Digite o valor do lado2:"))
var L3 = Number(prompt("Digite o valor do lado3:"))

if (L1 < L2 + L3 && L2 < L1 + L3 && L3 < L1 + L2) {
    console.log("Temos um triângulo")
    if (L1 == L2 && L1 == L3 && L2 == L3) {
        console.log("Triângulo Equilátero")
    } else if (L1 != L2 && L3 != L1 && L2 != L3) {
        console.log("Triângulo escaleno")
    } else {
        console.log("Triângulo isósceles")
    }
} else {
    console.log("Não temos um triângulo!")
}

4ª QUESTÃO
var nomeAluno = prompt("Informe o nome do aluno: ")
var nota1 = Number(prompt("Digita a nota 1"))
var nota2 = Number(prompt("Digita a nota 2"))
var nota3 = Number(prompt("Digita a nota 3"))
var nota4 = Number(prompt("Digita a nota 4"))
var mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4
alert("Média do aluno é: " + mediaAluno)

if (mediaAluno >= 7) {
    alert(nomeAluno + " foi aprovado!")
} else if (mediaAluno >= 3 && mediaAluno < 7) {
    alert(nomeAluno + " fará prova final")
var mediaFinal = Number(prompt("Digita a Nota Final"))
if (mediaFinal >= 5) {
    alert(nomeAluno + " foi aprovado(a) na final!")
} else {
    alert(nomeAluno + " foi reprovado(a) na final!")
}
} else {
    alert(nomeAluno + " Reprovado")
}
5ª QUESTÃO
var idade=Number(prompt("Informe a idade do nadador:"))

if(idade <5 || idade >100){
    alert("Nadador da categoria inválida")
}    if(idade >=5 && idade<=7){
    alert("Nadador da categoria Infantil A")
}    if(idade >=8 && idade<=10){
        alert("Nadador da categoria Infantil B")
}    if(idade >=11 && idade<=13){
    alert("Nadador da categoria Juvenil A")
}    if(idade >=14 && idade<=17){
    alert("Nadador da categoria Juvenil B")
}    if(idade >=18 && idade <=100){
    alert("Nadador da categoria Sênior")
}

6. var especie = Number(prompt(" 1 - Mamífero \n 2 - Aves \n 3 - Répteis"));

switch (especie) {
    case 1:
        var mamiferos = Number(prompt(" 1 - Quadrúpede \n 2 - Bípede \n 3 - Voadores \n 4 - Aquáticos"));
        switch (mamiferos) {
            case 1:
                var alimento = Number(prompt(" 1 - Carnívoro \n 2 - Herbívoro"));
                if (alimento == 1) {
                    alert("Leão")
                }
                if (alimento == 2) {
                    alert("Cavalo")
                }
                break;

            case 2:
                var alimento = Number(prompt(" 1 - Onívoro \n 2 - Frutífero"));
                if (alimento == 1) {
                    alert("Homem")
                }
                if (alimento == 2) {
                    alert("Macaco")
                }
                break;

            case 3:
                alert("Morcego")
                
                break;

            case 4:
                alert("Baleia")
                break;

            default:
                alert("Não se aplica!")
                break;
        }

        break;

    case 2:
        var aves = Number(prompt(" 1 - Não Voadoras \n 2 - Nadadoras  \n 3 - De Rapina"));
        switch (aves) {
            case 1:
                var clima = Number(prompt(" 1 - Tropical \n 2 - Polar"))
                if(clima == 1){
                    alert("Avestruz")
                }
                if(clima == 2){
                    alert("Pinguim")
                }
                break;

            case 2:
                alert("Pato")
            break;

            case 3:
                alert("Águia")
            break;
        
        default:
                alert("Não se aplica!")
            break;
        }
        break;

    case 3:
        var repteis = Number(prompt(" 1 - Com Casca \n 2 - Carnívoros  \n 3 - Sem Patas"));
        switch (repteis) {
            case 1:
                alert("Tartaruga")
            break;
            case 2:
                alert("Crocodilo")
            break;

            case 3:
                alert("Cobra")
            break;
        
        default:
                alert("Não se aplica!")
            break;
        }
        break;

    default:
        alert("Não se aplica")
        break;

        
}
/*
faça um joguinho de advinhação que dê 
pra jogar com 2 usuarios.
1- acrescente a informação de quantas
vezes foi chutado para acertar
2- coloque o nome dos jogadores
3- crie um rankig
*/

// estrutura de repetição
function ler() {
  var x = Number(prompt("digite um numero"));
  return x;
}

var jogadores = [];
var pensei = Number(prompt("Pense num número"));
var numero = null;
var contTentativas = 0;
var player = { nome: "", pontuacao: 0 };

function joga() {
  player.nome = prompt("digite o nome do jogador");

  do {
    contTentativas = contTentativas + 1;
    numero = ler();

    if (numero < pensei) {
      console.log("--------");
      console.log(player.nome + " é maior que " + numero);
    }
    if (numero > pensei) {
      console.log("--------");
      console.log(player.nome + " é menor que " + numero);
    }
    if (numero === pensei) {
      console.log(player.nome + " acertô mizeravi! ");
      console.log("Numero de tentativas " + contTentativas);

      player.pontuacao =
        contTentativas < player.pontuacao || player.pontuacao === 0
          ? contTentativas
          : player.pontuacao;

      jogadores.push(player);
    }
  } while (numero !== pensei);
  return console.log(jogadores);
}
console.log(jogadores);
var contin = prompt("Deseja continuar?")
if (contin == "Sim") {
  function joga()
}


//Outra forma
function ler() {
  var x = Number(prompt("Digite um número qualquer " + player.nome + "."));
  return x;
}
var jogadores = [];
var ranking = [];
var contTentativas = 0;

function joga() {
  do {
    var numero = null;
    contTentativas = contTentativas + 1;
    numero = ler();
    if (numero < pensei) {
      alert("Errou! O número que você quer advinhar é maior que " + numero + ".\n" + player.nome + " tente novamente.");
    }
    if (numero > pensei) {
      alert("Errou! O número que você quer advinhar é menor que " + numero + ".\n" + player.nome + ". Tente novamente.");
    }
    if (numero === pensei) {
      alert(player.nome + " , você acertou o número em " + contTentativas + " tentativas!");

      player.pontuacao =
        contTentativas < player.pontuacao || player.pontuacao === 0
          ? contTentativas
          : player.pontuacao;

      jogadores.push(player);
    }
  } while (numero !== pensei);
  return player;
}
alert("Bem vindo ao jogo 'Advinhe o Número!' \n\n Advinhe o número aleatório com menos tentativas, \n e genhe de seus adversários")
do {
  var opcao = Number(prompt("Informe a opção desejada: \n 1 - Novo jogo \n 2 - Sair do jogo"))
  var numJogadores = Number(prompt("Informe a quantidade de jogadores"))
  for (var i = 0; i < numJogadores; i++) {
    if (opcao == 1) {
      var player = { nome: "", pontuacao: 0 };
      player.nome = prompt("Digite o nome do jogador");
      var pensei = Math.floor(Math.random() * 100);
      joga()
    }
    if (opcao == 2) {
      close
    }
    contTentativas = 0
  }
  var continua = Number(prompt("Digite 1 para entrar no jogo novamente \nDigite 0 para sair "))
} while (continua == 1)

if (continua == 1) {
  var contTentativas = 0
  pensei = Math.floor(Math.random() * 100);
  joga()
}
if (continua == 2) {
  close
}
for (var i = 0; i < jogadores.length; i++) {
  for (var j = i + 1; j < jogadores.length; j++) {
    if (jogadores[i].pontuacao > jogadores[j].pontuacao) {
      var aux = jogadores[i]
      jogadores[i] = jogadores[j]
      jogadores[j] = aux;
    }
  }
  alert("Parabéns " + jogadores[0].nome + ", você ganhou o jogo com apenas " + jogadores[0].pontuacao + " tentativas!")
  console.log("Ranking")
  jogadores
}


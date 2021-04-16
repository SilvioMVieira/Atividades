//Objetos
var agenda = [
    {
    nome: "David Sodré Lins",
    idade: "29",
    cidade: "Salvador",
    email: "davidsodre_ba@hotmail.com",
    zap: "7192035786",
    },
    {
    nome: "Silvio Vieira",
    idade: "15",
    cidade: "Feira de Santana",
    email: "silvio.vieira@ba.estudante.senai.br",
    zap: "75982479191",
    },
    {
    nome: "Kauan Santos de Azevedo",
    idade: "17",
    cidade: "Camaçari",
    email: "pkauans.azevedo@gmail.com",
    zap: "71988638144",
    },
    {
    nome: "Guilherme de Carvalho Lima Rebouças",
    idade: "18",
    cidade: "Feira de Santana",
    email: "guilhermereboucasakamosked@gmail.com",
    zap: "75992338134",
    },
    {
    nome: "Jadson Lucas Pereira Souza",
    idade: "17",
    cidade: "Feira de Santana",
    email: "shaolinmatadordeporcos@gmail.com", //email fictício
    whatsapp: "(75)9 8166-4242",
    corFav: "Preto",
    },
    {
    nome: "Daniel da Silva Alves",
    idade: "21 anos",
    cidade: "Feira de Santana",
    email: "daniel.alves2607@gmail.com",
    zap: "75991707918",
    },
    {
    nome: "Davi Ferreira de Sena",
    idade: "16",
    cidade: "Camaçarí",
    email: "davi.sena2021.com",
    zap: "7196294826",
    },
    {
    nome: "Milena Calmon Pedrosa",
    idade: "23",
    cidade: "Feira de Santana",
    email: "milenacalmon@gmail.com",
    zap: "75992928231",
    },
    {
    nome: "Reinaldo Teixeira",
    idade: "20",
    altura: "1,89",
    cidade: "Camaçari",
    email: "reinaldo.costa@ba.estudante.senai.br",
    zap: "71985135448",
    },
    {
    nome: "Eduardo Gonzaga dos Santos Junior",
    idade: "17",
    cidade: "Salvador",
    email: "eduardoxystg123@gmail.com",
    zap: "349240922",
    },
    {
    nome: "Marcos Moreira",
    idade: "22",
    cidade: "Feira De Santana",
    email: "marcos.vnmoreira@hotmail.com",
    zap: "75983662700",
    },
    {
    nome: "Júlio César Menezes",
    idade: "19",
    cidade: "Feira de Santana",
    email: "juliocesar09_2001@outlook.com",
    zap: "75982827667",
    },
    {
    nome: 'Leidson Luiz',
    idade: '16',
    cidade: 'Salvador',
    email: 'leidsonluiz02@gmail.com',
    zap: '71993035757',
    },
    {
    nome: "Samuel Carvalho",
    idade: "17",
    cidade: "Camaçari",
    email: "eusouuel@gmail.com",
    zap: "40028922",
    },
    {
    nome: "Rafael Mota Rastelli Cruz",
    idade: "20",
    cidade: "Salvador",
    email: "motarafael501@gmail.com",
    zap: "71987143258",
    },
    {
    nome: "Emerson Barreto dos Santos",
    idade: "19",
    cidade: "Salvador",
    email: "emersonbarreto11@hotmail.com",
    zap: "75988223731",
    },
    {
    nome: 'Beatriz de Mendonça Santana',
    idade: '17',
    cidade: 'Camaçari',
    email: 'biamsantana13@gmail.com',
    zap: '71996358649',
    },
    {
    nome: "Narla Maira",
    idade: "23",
    cidade: "Salvador",
    email: "nmaira200@gmail.com",
    zap: "71991277957",
    },
    {
    nome: "Janine Nogueira Caldas Xavier",
    idade: "35",
    cidade: "Feira de Santana",
    email: "janine_nogueira@hotmail.com",
    zap: "75999119519",
    },
    {
    nome: "Felipe Caldas Pergentino Santos",
    idade: "19",
    cidade: "Feira de Santana",
    email: "felipe.pergentino@hotmail.com",
    zap: "(75)99896-6977",
    },
    {
    nome: "Breno Lima Viturino",
    idade: "22",
    cidade: "Feira de Santana",
    email: "breno.viturino@ba.estudante.senai.br",
    zap: "(75)98319-6832",
    },
    {
    nome: "Karoline dos Santos",
    idade: "21",
    cidade: "Alagoinhas",
    email: "karolinesantos123.ks@gmail.com",
    zap: "Não colocou pq não tem cerulá"
    },
    {
    nome: "Lucas do Rosario dos Santos",
    idade: "20",
    cidade: "Camaçari",
    email: "lucas109@Ba.estudante.senai.br",
    zap: "(71)8667-6908",
    }
    ]
//criar objeto
var tiago = {
    nome: "Thiago Santos", idade: "21", cidade: "Feira de Santana",
    email: "thiago.santos@gmail.com", zap: "75991271699"
}
//criar contato nulo
var contato = {
    nome: null,
    idade: null,
    cidade: null,
    email: null,
    zap: null,
}
//adicionar dados a um contato nulo
contato.nome = prompt("Digite seu nome: ")
contato.idade = prompt("Digite sua idade: ")
contato.cidade = prompt("Digite sua cidade: ")
contato.email = prompt("Digite seu e-mail ")
contato.zap = prompt("Digite seu zap: ")

//localizar um contato na agenda
var buscaNome = prompt("Digite o nome do contato: ")
var achou = false

for(i = 0; i < agenda.length; i++){
    if (buscaNome == agenda[i].nome){
        console.log("Achou")
        console.log("Nome " + agenda[i].nome)
        console.log("Zap " + agenda[i].zap)
        achou = true
    }         
    if(!achou && i == agenda.length - 1){
        console.log("Não achou")
    }
}

//Crie um menu para adicionar um contato
//Digite 1 para adicionar  um contato
//Digite 2 para alterar um contato
//Digite 0 para fechar
var menu = Number(prompt("Digite uma opção ou 0 pra sair:  \n 1 - Adicionar contato \n 2 - Alterar contato "))

if (menu == 1){
    
    contato.nome = prompt("Digite seu nome: "),
    contato.idade = prompt("Digite sua idade: "),
    contato.cidade = prompt("Digite sua cidade: "),
    contato.email = prompt("Digite seu e-mail "),
    contato.zap = prompt("Digite seu zap: "),
   
    agenda.push(contato)

    var contato = {
        nome: null,
        idade: null,
        cidade: null,
        email: null,
        zap: null,
    }
}
if(menu == 2){
    var buscaNome = prompt("Digite o nome do contato: ")
    var achou = false

    for(i = 0; i < agenda.length; i++){
        if (buscaNome == agenda[i].nome){
            console.log("Achou")
            console.log("Nome " + agenda[i].nome)
            console.log("Zap " + agenda[i].zap)
            achou = true 

            agenda[i].nome = prompt("Digite seu nome: ")
            agenda[i].zap = prompt("Digite seu zap: ")

            end

        }         
        if(!achou && i == agenda.length - 1){
            console.log("Não achou")
        }
}
        
    if(menu == 0){
        end
    }
}

//crie um algoritmo para alterar o contato de determinado cara na agenda

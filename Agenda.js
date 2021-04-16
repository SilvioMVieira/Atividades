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
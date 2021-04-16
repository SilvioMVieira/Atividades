var especie = Number(prompt(" 1 - Mamífero \n 2 - Aves \n 3 - Répteis"));

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
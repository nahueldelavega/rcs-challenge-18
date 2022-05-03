const options = ['piedra', 'papel', 'tijera'];

// function playerMove(){
//     let move = prompt('Piedra, papel o tijeras').toLowerCase().trim();
//     return move;
// }

function botMove(){
    const random = Math.round(Math.random()*2)
    return options[random]
}

function rockstar (player){
    let bot = botMove();

    switch(true){
        case player==bot:
        alert('Bot jugó ${bot}. Empate');
        break;
        case player=='piedra' && bot=='papel':
        alert(`Bot jugó ${bot}.` + ' Gana bot');
        break;
        case player=='piedra' && bot=='tijera':
        alert(`Bot jugó ${bot}.`+' Gana player');
        break;
        case player=='papel' && bot=='piedra':
        alert(`Bot jugó ${bot}.`+' Gana player');
        break;
        case player=='papel' && bot=='tijeras':
        alert(`Bot jugó ${bot}.`+' Gana bot');
        break;
        case player=='tijera' && bot=='piedra':
        alert(`Bot jugó ${bot}.`+' Gana bot');
        break;
        case player=='tijera' && bot=='papel':
        alert(`Bot jugó ${bot}.`+' Gana player');
        break;
    }
}
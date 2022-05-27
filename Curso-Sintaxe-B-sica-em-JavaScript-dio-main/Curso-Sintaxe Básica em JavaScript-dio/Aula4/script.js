
var jogador1 = 0;
var jogador2 = 1;
var placar; 

// aninhando if's
// if ternário
 jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos')
if (jogador1 > 0 && jogador2 == 0) {
    console.log('o jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
}
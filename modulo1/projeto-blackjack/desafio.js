if (confirm("Vamos jogar!")) {
   carta = []
   carta[0] = comprarCarta();
   carta[1] = comprarCarta();
   NPC = []
   NPC[0] = comprarCarta();
   NPC[1] = comprarCarta();
   console.log('Usuário - ' + carta[0].texto + ' VALOR: ' + carta[0].valor);
   console.log('Usuário - ' + carta[1].texto + ' VALOR: ' + carta[1].valor);

   console.log('Computador - ' + NPC[0].texto + ' VALOR: ' + NPC[0].valor);
   console.log('Computador - ' + NPC[1].texto + ' VALOR: ' + NPC[1].valor);

   console.log(`Usuário - cartas: ${carta[0].texto} ${carta[1].texto}  - pontuação ${(carta[0].valor) + (carta[1].valor)}`)
   console.log(`Computador - cartas: ${NPC[0].texto} ${NPC[1].texto}  - pontuação ${(NPC[0].valor) + (NPC[1].valor)}`)

   if (((NPC[0].valor) + (NPC[1].valor) > (carta[0].valor) + (carta[1].valor)) && ((NPC[0].valor) + (NPC[1].valor)) <= 21) {
      console.log('O computador ganhou!');
   }
   else if (((NPC[0].valor) + (NPC[1].valor) < (carta[0].valor) + (carta[1].valor)) && ((NPC[0].valor) + (NPC[1].valor)) <= 21) {
      console.log("O usuário ganhou!");
   }
   else {
      console.log("Empate!");
   }
}
else {
   console.log("O jogo acabou!");
}
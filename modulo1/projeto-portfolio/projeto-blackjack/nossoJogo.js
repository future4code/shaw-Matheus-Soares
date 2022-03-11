
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

botaoConfirma = confirm("Vamos jogar!")
if(botaoConfirma === true) {
   carta = []
   carta[0] = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   carta[1] = comprarCarta();
   NPC = []
   NPC[0] = comprarCarta();// sortear as cartas do computador
   NPC[1] = comprarCarta();// sortear as cartas do computador
   console.log('Usuário - '+carta[0].texto+' VALOR: '+carta[0].valor); 
   console.log('Usuário - '+carta[1].texto+' VALOR: '+carta[1].valor); 
   
   console.log('Computador - '+NPC[0].texto+' VALOR: '+NPC[0].valor);
   console.log('Computador - '+NPC[1].texto+' VALOR: '+NPC[1].valor);
   
   console.log(`Usuário - cartas: ${carta[0].texto} ${carta[1].texto}  - pontuação ${(carta[0].valor)+(carta[1].valor)}`)
   console.log(`Computador - cartas: ${NPC[0].texto} ${NPC[1].texto}  - pontuação ${(NPC[0].valor)+(NPC[1].valor)}`)

   if(((NPC[0].valor)+(NPC[1].valor) > (carta[0].valor)+(carta[1].valor))&&((NPC[0].valor)+(NPC[1].valor))<=21){
      console.log('O computador ganhou!');
   }
   else if(((NPC[0].valor)+(NPC[1].valor) < (carta[0].valor)+(carta[1].valor))&&((NPC[0].valor)+(NPC[1].valor))<=21){
      console.log("O usuário ganhou!");
   }
   else {
      console.log("Empate!");
   }
}
else {
   console.log("O jogo acabou!");
}
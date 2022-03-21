botaoConfirma = confirm("Vamos jogar!")
function imprime(PC){
   return confirm(`Suas cartas são: ${somaTexto} valor total ${soma}\nA carta revelada do computador é ${PC[0].texto} de valor ${PC[0].valor}.\nDeseja comprar mais uma carta?`)//retorna true or false
}
function npcCompra(PC){
   if(soma<=21){
      for(let i = 2;totalPC<soma;i++){
         PC[i] = comprarCarta();
         somaTextoPC = somaTextoPC + ' ' + PC[i].texto
         totalPC = totalPC + PC[i].valor;
      }
   }
   return totalPC
}
if (botaoConfirma === true) {
   while(botaoConfirma === true){
      carta = []
      carta[0] = comprarCarta();
      carta[1] = comprarCarta();
      NPC = []
      NPC[0] = comprarCarta();
      NPC[1] = comprarCarta();
      somaTexto = ''
      somaTextoPC = ''
      totalPC = NPC[0].valor + NPC[1].valor
      if ((carta[0].texto.includes('A') && carta[1].texto.includes('A')) || (NPC[0].texto.includes('A') && NPC[1].texto.includes('A'))) {
         botaoConfirma = confirm("Dois Ás foram recebidos\nQuer jogar novamente?");
         if(botaoConfirma===false){
            break;
         }
      }
      else {
         for(let i = 0;i<carta.length;i++){//soma os textos das cartas do usuario
            somaTexto = somaTexto + ' ' + carta[i].texto
         }
         for(let i = 0;i<NPC.length;i++){
            somaTextoPC = somaTextoPC + ' ' + NPC[i].texto
         }
         soma = carta[0].valor + carta[1].valor;
         for(let i = 2;soma<=21;i++){
            botaoConfirma = imprime(NPC);
            if(botaoConfirma===true){
               carta[i] = comprarCarta();
               somaTexto = somaTexto + ' ' + carta[i].texto
               soma = soma + carta[i].valor;
               alert(`Sua nova carta é: ${carta[i].texto} \nValor total atual: ${soma}`)
            }
            else{
               totalPC = npcCompra(NPC);
               break;
            }
         }
         if(soma>21){
            alert(`O computador ganhou!\nAs cartas do computador eram: ${somaTextoPC}`)
         }
         else if(totalPC>21){
            alert(`O usuário ganhou!\nAs cartas do computador eram: ${somaTextoPC} de valor total ${totalPC}`)
         }
         else if (((totalPC) > (soma)) && (totalPC) <= 21) {
            alert(`O computador ganhou!\nAs cartas do computador eram: ${somaTextoPC} de valor total ${totalPC}`);
         }
         else if (((totalPC) < (soma)) && (soma) <= 21) {
            alert(`O usuário ganhou!\nAs cartas do computador eram: ${somaTextoPC} de valor total ${totalPC}`);
         }
         else {
            alert(`Empate!\nAs cartas do computador eram: ${somaTextoPC} de valor total ${totalPC}`);
         }
      }
      botaoConfirma = confirm("Quer jogar novamente?");
   }
}
else {
   alert("O jogo acabou!");
}
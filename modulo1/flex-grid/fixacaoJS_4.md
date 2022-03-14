function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  temp = 0 
  for(let i=0;i<arrayDeNumeros.length;i++){
    if(arrayDeNumeros[i]===numeroEscolhido){
      temp++
    }
  }
  if(temp===0){
    return "Número não encontrado"
  }
  else{
    return `O número ${numeroEscolhido} aparece ${temp}x`
  }
}
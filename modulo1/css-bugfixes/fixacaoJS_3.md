function calculaNota(ex, p1, p2) {
  prova1 = p1*2
  prova2 = p2*3
  total = (ex+prova1+prova2)/6
  if(total>=9){
    return 'A'
  }
  else if(total<9&&total>=7.5){
    return 'B'
  }
  else if(total<7.5&&total>=6){
    return 'C'
  }
  else{
    return 'D'
  }
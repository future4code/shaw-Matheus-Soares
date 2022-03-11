function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  const comissao = (valorTotalVendas*0.05)+(qtdeCarrosVendidos*100)
  return (comissao + 2000)
}
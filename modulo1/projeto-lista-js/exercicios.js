// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem!');
  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  altura = Number(prompt("Escreva o comprimento da altura do retangulo:"));
  largura = Number(prompt("Escreva o comprimento da largura do retangulo:"));
  console.log(altura*largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  anoAtual = Number(prompt("Escreva o ano atual:"));
  anoDeNascimento = Number(prompt("Escreva o ano que voce nasceu:"));
  console.log(anoAtual - anoDeNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura*altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Escreva seu nome:");
  idade = prompt("Escreva a sua idade:");
  email = prompt("Escreva seu email:");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let a=0;
  array = [];
  while(a<3){
    array[a] = prompt("Escreva suas 3 cores favoritas:");
    a++;
  }
  console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase();
  return string;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return (string1.length===string2.length);
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  tamanho = array.length;
  return array[tamanho-1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  tamanho = array.length;
  temp = array[0];
  array[0] = array[tamanho-1];
  array[tamanho-1] = temp;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toLowerCase()===string2.toLowerCase());
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  anoAtual =Number(prompt("Digite o ano atual:"));
  anoDeNascimento = Number(prompt("Digite o ano de nascimento:"));
  anoIdentidade = Number(prompt("Digite o ano que a identidade foi emitida:"));
  idade = anoAtual - anoDeNascimento;
  tempoIdentidade = anoAtual - anoIdentidade;
  boleana = false;
  if(idade<=20){
    if(tempoIdentidade>=5){
      boleana = true;
    }
  }
  if(idade>20&&idade<=50){
    if(tempoIdentidade>=10){
      boleana = true;
    }
  }
  if(idade>50){
    if(tempoIdentidade>=15){
      boleana = true;
    }
  }
  console.log(boleana);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  boleano = false;
  if(ano%400===0){
    boleano = true;
  }
  if(ano%4===0&&ano%100!=0){
    boleano = true;
  }return boleano;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  deMaior = prompt("Voce tem mais de 18 anos?");
  ensinoMedio = prompt("Voce tem ensino medio completo?");
  disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
  if(deMaior==='sim'){
    deMaior = true;
  }
  else{
    deMaior = false;
  }
  if(ensinoMedio==='sim'){
    ensinoMedio = true;
  }
  else{
    ensinoMedio = false;
  }
  if(disponibilidade==='sim'){
    disponibilidade = true;
  }
  else{
    disponibilidade = false;
  }
  if(deMaior===true&&ensinoMedio===true&&disponibilidade===true){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
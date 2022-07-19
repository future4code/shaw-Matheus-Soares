function checaAnoBisexto(ano: Number){
    return ((Number(ano)%400===0)||((Number(ano)%4 ===0)&&(Number(ano)%100!==0)))
}
console.log(checaAnoBisexto(2024))

const nome: string = "matheus"
const data: string = "05/07/2000"

const dia: string[] = data.split("/", 3)

console.log(`Olá me chamo ${nome}, nasci no dia ${dia[0]} do mês de ${dia[1]} do ano de ${dia[2]}`)
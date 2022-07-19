enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function filme (nome: string, data: number, genero: string, pontuacao?: number){
	if(pontuacao === undefined){
		console.log(`nome: ${nome}, ano do lançamento: ${data}. genero: ${genero}, pontuação: ${pontuacao}`)
	}
	else{
		console.log(`nome: ${nome}, ano do lançamento: ${data}. genero: ${genero}`)
	}
}

console.log("norseman", 2022, GENERO.TERROR)
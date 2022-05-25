function checaTriangulo(a: Number,b: Number,c: Number){
    if (a !== b && b !== c){
        return "Escaleno"
    }
    else if(a === b && b === c){
        return "Equilátero"
    }
    else{
        return "Isóceles"
    }
}

console.log(checaTriangulo(10,10,10))
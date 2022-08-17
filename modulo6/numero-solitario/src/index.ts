function numbers (array: number[]) {
    for (let i=0; i<array.length; i++) {
        for (let t =0; t<array.length; t++) {
            if(array[i] === array[t] && t+1 !== array.length && t !== i){
                break;
            }
            if(t === array.length-1){
                return array[i]
            }
        }
    }
}

console.log(numbers([2,2,1]))
console.log(numbers([4,1,2,1,2]))
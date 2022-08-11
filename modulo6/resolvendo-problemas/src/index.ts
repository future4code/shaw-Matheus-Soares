// exercicio 1
const isOneEdit = (stringA: string, stringB: string): boolean => {
    if ( Math.abs(stringB.length - stringA.length) > 1) { return false}

    if( stringA.length > stringB.length) return stringA.includes(stringB)
    if( stringB.length > stringA.length) return stringB.includes(stringA)

    let charsDiffCount = 0
    for ( let i = 0; i < stringA.length; i++) {
        if( stringA[i] !== stringB[i]) charsDiffCount++
    }

    return charsDiffCount === 1
}

console.log(isOneEdit('matheus', 'mathius'))

// exercicio 2

const stringCompression = (input: any) => {
    const substrings = []
    let lastChar = input[0]
    let charCount = 0

    for (const char of input) {
        if(char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = charCount = 0
        }
        charCount++;
    }

    substrings.push(lastChar + charCount)
    let result = ""
    for(const key of substrings){
        result += key;
    }

    return result.length > input.length ? input : result
}
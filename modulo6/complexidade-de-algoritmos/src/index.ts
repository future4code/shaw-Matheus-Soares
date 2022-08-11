//exercicio 1
const findFirstRecurringCharacter = (input: any) => {
    const charHashMap = {};//+1
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;//+1
        }
        charHashMap[char] = true;//+1
    }
    return null;
};

/*
O(n)
*/

//exercicio 2
export const func = (
    source: string,
    comparison: string
): boolean => {
    if (
        comparison.length > source.length + 1 ||
        comparison.length < source.length - 1
    ) {//+1
        return false;
    }
    let commonCharQuantity = 0;//+1

    for (const char of comparison) {
        if (source !== comparison) {//+1
            commonCharQuantity++;
        }
    }
    return (
        commonCharQuantity <= source.length + 1 &&
        commonCharQuantity >= source.length - 1
    );//+1
};

/*
O(n)
*/

//exercicio 3
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
): void => {
    if (
        matrix[rowIndex] === undefined ||
        matrix[rowIndex][columnIndex] === undefined
    ) {//+1
        throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;//+1
};

/*
O(1)
*/

//exercicio 4
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {//+1
            return true;
        }
    }
    return false;
}

/*
O(n²)
*/

//exercicio 5
//nao sei a resposta
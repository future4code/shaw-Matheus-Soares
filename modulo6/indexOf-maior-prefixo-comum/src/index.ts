//IndexOf
export const indexOf = (
    source: string,
    query: string,
    mainIndex: number = 0,
    sourceIndex: number = 0,
    queryIndex: number = 0
): number => {
    if (sourceIndex > source.length) {
        return -1;
    }

    if (queryIndex >= query.length) {
        return mainIndex;
    }

    if (source[sourceIndex] === query[queryIndex]) {
        return indexOf(source, query, mainIndex, sourceIndex + 1, queryIndex + 1);
    } else {
        return indexOf(source, query, mainIndex + 1, mainIndex + 1, 0);
    }
};

// Maior Prefixo comum

function longestCommon(strs) {
    if (strs.length === 0) return ""

    let commonPrefix = ""
    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i]
        let areAllCharsSame = true

        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return commonPrefix
            }
        }

        if (currentChar) {
            commonPrefix += currentChar
        }
    }

    return commonPrefix
};

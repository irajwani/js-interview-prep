let newSolution = (str) => {
    let char;
    let charStack = [];

    for (let i = 0; i < str.length; i++) {
        char = str[i]
        if (isOpeningBracket(char)) charStack.push(char);
        else {
            if(charStack.length == 0) return 0
            
            let poppedChar = charStack.pop();
            if(isBracketMatch(poppedChar, char)) {
                continue
            }
            else {
                return 0
            }
        }
    }
    if (charStack.length == 0) return 1
    return 0;
}

let solution = (str) => {

    let currentChar, charStack = []

    if(str.length % 2 != 0) {
        return 0
    }

    for(let i = 0; i < str.length; i++) {
        currentChar = str[i];
        console.log(currentChar);
        if(isOpeningBracket(currentChar)) {
            charStack.push(currentChar);
        }
        else {
            if(charStack.length == 0) {
                //triggered when an extra closing bracket comes in OR one moves from correctly nested substr to currentChar which is not openingBracket
                return 0
            }

            poppedChar = charStack.pop();

            if(isBracketMatch(poppedChar, currentChar)) {
                continue
            }
            else {
                //nesting has been broken
                return 0
            }
        }
    }

    if(charStack.length == 0) {
        return 1
    }

    return 0
}

function isOpeningBracket(str) {
    if(str == "(" || str == "{" || str == "[") {
        return true
    }

    return false
}

function isBracketMatch(str1, str2) {
    if(str1 == "(" && str2 == ")" || str1 == "{" && str2 == "}" || str1 == "[" && str2 == "]") {
        return true
    }

    return false
}

let ans = newSolution("[{}{}]");

console.log(ans);

//Use stacks based on the observation that there are only 3 possible outcomes for two consecutive characters:
// opening + right closing
// opening + some other opening
// opening + wrong closing
// closing
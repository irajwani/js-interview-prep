let alpha = /^[a-zA-Z0-9]+$/, letters = /^[a-zA-Z]+$/, digits = /^[0-9]+$/;
function solution(S) {
    let words = S.split(" ");
    
    let maxLength = -1, isValid = false;
    
    for(let word of words) {
        isValid = isWordValid(word);
        // console.log(word, isValid)
        if(isValid) {
            maxLength = Math.max(maxLength, word.length)
        }
        
    }
    
    return maxLength
    // write your code in JavaScript (Node.js 8.9.4)
}

function isWordValid(str) {
    
    let evenLetters = str.split("").filter(char => char.match(letters)).length % 2 == 0 ? true : false;
    let oddDigits = str.split("").filter(char => char.match(digits)).length % 2 != 0 ? true : false;
    if(str.match(alpha) && evenLetters && oddDigits) {
        return true
    }
    
    return false
}
// given [1,2,5,6], add plus one --> [1,2,5,7] (must account for if last digit is 9 or anything else)

function plusOne(digits) {
    // start backwards
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i] += 1
            return digits;
        }
        digits[i] = 0
    }
}

const basicArithmeticResult = plusOne([1,2,4,5,9,9,9]);
console.log(basicArithmeticResult);

// 1 step i~```s utilized in most cases, o`therw§ise do something else but return to fundamental step
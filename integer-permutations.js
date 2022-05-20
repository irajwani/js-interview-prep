//Given integer N, determine number of possible ways to re-arrange the digits/number of permutations with digits of integer


function iP(int) {
    let str = String(int);
    let digits = str.split("");
    let commons = 1;
    // let uniques = digits.filter((val, index) => digits.indexOf(val) == index).length;
    let countMap = new Map();

    for(var digit of digits) {
        if(countMap.has(digit)) {
            countMap.set(digit, countMap.get(digit) + 1)
        }
        else {
            countMap.set(digit, 1)
        }
    }

    let moreThanOne = Array.from(countMap.values()).filter(val => val > 1);

    if(moreThanOne.length > 0) {
        commons = moreThanOne.reduce((acc, element) => acc*element)
    }

    return factorial(digits.length)/commons

}

function factorial(n) {

    if(n == 1) {
        return 1
    }

    else {
        return n*factorial(n-1)
    }
}

let ans = iP(34615);

console.log(ans);
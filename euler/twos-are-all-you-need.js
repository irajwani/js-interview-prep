var {generatePrimeFactorsArray, findPrimeFactors} = require('../sieve');

function solution(N) {
    let sum = 1;
    let pfH, primeFactors;

    // let nums = new Array(Math.pow(10,14)).fill(true);
    // .map((val, index) => index + 1);
    for(let i = 2; i <= N; i++) {
        pfH = generatePrimeFactorsArray(i);
        primeFactors = findPrimeFactors(i, pfH);
        sum += Math.pow(2, primeFactors.length);
    }

    return sum;
}

let ans = solution(Math.pow(10,2));

console.log(ans);

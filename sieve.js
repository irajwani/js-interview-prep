//Find all primes b/w 2 and n;

function sieve(n) {
    let nums =  new Array(n+1).fill(true);
    nums[0] = false;
    nums[nums.length - 1] = false;
    
    for(let i = 2; i*i<n;i++) {

        if(nums[i]) {
            k = i * i;
            while(k <= n) {
                nums[k] = false
                k += i;
            }

        }
        
        
    }

    nums.forEach((num, index) => {
        if(num) {
            console.log(index);
        }
    })

    return nums;
}

// Find all factors of x

function generatePrimeFactorsArray(x) {
    let primeFactorsHelper = new Array(x+1).fill(0);
    let multiple;
    for(let num = 2; num*num<=x ;num++) {
        if(primeFactorsHelper[num] == 0) {
            multiple = num*num;
            while(multiple <= x) {
                primeFactorsHelper[multiple] = num;
                multiple += num;
            }
        }
    }
    
    return primeFactorsHelper;
}

function findPrimeFactors(x, primeFactorsHelper) {
    console.log(primeFactorsHelper)
    let primeFactors = [];
    while(primeFactorsHelper[x] > 0) {
        
        primeFactors.push(primeFactorsHelper[x]);
        x = x/primeFactorsHelper[x]; //replace x with the decomposition of x/p
        
    }
    primeFactors.push(x);
    
    return primeFactors;
}

let x = 468

let pFH = generatePrimeFactorsArray(x);
 
let ans = findPrimeFactors(x,pFH);
console.log(ans);



module.exports = {
    generatePrimeFactorsArray,
    findPrimeFactors
}
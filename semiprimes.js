// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, P, Q) {
    
    let counts = []
    
    let nums = new Array(N+1).fill(true), sqrtN = Math.sqrt(N)
    
    let obj = removePrimes(nums, N);
    let noPrimes = obj.noPrimes, primes = obj.primes;
    
    
    primes = primes.filter((val) => val <= N/2);
    // console.log(primes);
    let semiprimes = [];
    for(let i = 0; i< primes.length; i++) {
        for(let j = 0; j<primes.length; j++) {
            semiprime = primes[i]*primes[j];
            if(semiprimes.indexOf(semiprime) == semiprimes.lastIndexOf(semiprime)) {
                semiprimes.push(primes[i]*primes[j]);    
            }
            
        }
    }
    
    let slice, count, array = new Array(N+1).fill(0).map((val, index) => index);
    
    for(let k = 0; k < P.length ;k++) {
        count = 0
        slice = array.slice(P[k], Q[k] + 1);
        // noPrimes.slice(P[k], Q[k] + 1);
        for(var elem of slice) {
            if(semiprimes.includes(elem)) {
                count++
            }
        }
        counts.push(count);
    }
    
    
    
    
    
    // for(let i = 0; i<=N; i++) {
    //     for(let j = 0; primesB[i]*primesB[i]<=N; j++) {
    //         semiprimes.push(primesA[i]*primesB[j]);
    //     }   
    // }
    
    
    
    
    return counts
    //let the primes remain true
    // write your code in JavaScript (Node.js 8.9.4)
}

const removePrimes = (arr, N) => {
    
    let noPrimes, primes;
    for(let i = 2; i*i<=N; i++) {
        if(arr[i] == true) {
            k = i*i;
            while(k <= N) {
                arr[k] = false;
                k += i
            }
        }
        
    }
    
    // console.log(arr)
    
    noPrimes = arr.map((val, index) => {
        if(val == false) {
            return index
        }
    }).filter(val => val != undefined);
    
    
    primes = arr.map((val, index) => {
        if(val == true) {
            return index
        }
    }).filter(val => val != undefined && val >= 2);
    
    return {noPrimes, primes}
}
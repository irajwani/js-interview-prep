//gcd by subtraction

const gcd_1 = (a,b) => {
    
    if(a == b) {
        return a;
    }
    
    if(a > b) {
        gcd_1(a - b, b)
    }
    else if(a < b) {
        gcd_1(a, b-a)
    } 
}

function gcd_2(a,b) {
    if(a % b == 0) {
        
        return b
    }
    else {
        gcd_2(b, a % b)
    }
}

const lcm_twoIntegers = (a,b) => {
    return (a*b)/(gcd_2(a,b))
}

//lcm*gcd = a*b

// TO find the lcm of n integers we can use the following relation
// lcm(a_1, a_2, ..., a_n) = lcm(a_1, lcm(a_2,a_3,...,a_n)) = ....

function lcm_NIntegers(arr) {
    arr = arr.sort((a,b) => b - a)
    let multiple = arr[0];
    for(let i = 0; i<arr.length; i++) {
        multiple = lcm_twoIntegers(multiple, arr[i])
    }
    return multiple
}

let ans = gcd_2(1,13);

console.log(ans);
// let ans = lcm_NIntegers([1,6,8]);

function solution(N) {
    let limit = Math.sqrt(N);
    let numFactors = 0;
    
    
    // console.log(nums);
    for(let i = 1; i <= limit; i++) {
        if(N % i == 0) {
            
            if(i == limit) {
                numFactors += 1
            }
            else {
                //N is not a perfect square, since i is a factor, n/i must also be a factor
                numFactors += 2;
            }
            
            
        }
    }
    
    
    return numFactors;
    
}

let ans = solution(26);

console.log(ans);

//Return num of factors for integer N
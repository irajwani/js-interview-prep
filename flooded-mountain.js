// Indeed Prime 2015 challenge

//44%
//Errors: Incorrect for all test cases except for easiest scenario: multiple small valleys

function solution(A) {
    let depth, maxDepth = 0;
    let len = A.length;
    let leftPeaks = new Array(len).fill(0), rightPeaks = new Array(len).fill(0);
    leftPeaks[0] = A[0];
    
    for(let i = 1; i < len; i++) {
        if(A[i] > leftPeaks[i-1]) {
            leftPeaks[i] = A[i];
        }
        else {
            leftPeaks[i] = leftPeaks[i-1];
        }
    }
    
    for(let j = len-2; j >= 0; j--) {
        if(A[j] > rightPeaks[j+1]) {
            rightPeaks[j] = A[j];
        }
        else {
            rightPeaks[j] = rightPeaks[j+1];
        }
    }
    
    // console.log(leftPeaks, rightPeaks)
    
    for(let k = 1; k < len-1; k++) {
        depth = Math.min(leftPeaks[k], rightPeaks[k]) - A[k];
        maxDepth = Math.max(maxDepth, depth);
    }
    
    // console.log(maxDepth)
    
    return maxDepth
    
    
    
    
}
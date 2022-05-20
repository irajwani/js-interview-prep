//Number Solitaire
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    
    
    let max = A[0];
    let at = 0, nextLargest, nextIndex, nextSixStart, nextSixEnd;
    while(at < A.length) {
        nextSixStart = at+1, nextSixEnd = at+6
        if(nextSixEnd - at < 6) {
            
        }
        for(i = at+1; i <= at+6 && i < A.length - 1; i++) {
            nextLargest = A[i]
            
            if(A[i] > nextLargest) {
                nextLargest = A[i];
                nextIndex = i;
            }
        }
        
        max += nextLargest
        at = nextIndex;
        
        
    }
    
    return max
    
}

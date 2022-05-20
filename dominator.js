//Idea is to find the value/index at which frequency of value is at least a specific amount

function solution(A) {
    
    let threshold = A.length/2;
    let chars = [];
    
    
    for(let i = 0; i < A.length; i++) {
        chars = A.filter(val => val == A[i]);
        if(chars.length > threshold) {
            return i
        }
    }
    
    return -1
    
    // let countMap = new Map();
    
    // let currentEntry;
    
    // for(let i = 0; i < A.length; i++) {
    //     // console.log(A[i], i)
    //     // console.log(countMap)
    //     if(countMap.has(A[i])) {
    //         currentEntry = countMap.get(A[i]);
    //         // console.log()
    //         countMap.set(A[i], [currentEntry[0] + 1, i])
    //     }
    //     else {
            
    //         countMap.set(A[i], [1, i])    
    //     }
        
    // }
    
    // let entries = countMap.entries()
    // for(var entry of entries) {
    //     // console.log(entry)
    //     if(entry[1][0] > threshold) {
            
    //         return entry[1][1]
    //     }
        
    // }
    
    // return -1
    // write your code in JavaScript (Node.js 8.9.4)
}


// An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

// For example, consider array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

// Write a function

// function solution(A);

// that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.
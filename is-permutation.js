// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

function pC(arr) {
    let n = arr.length;
    //create two sets, and return 0 soon as we find one element missing in testSet that is in perfectSet
    let testSet = new Set, perfectSet = new Set;
    for(var i = 0; i < n; i++) {
        testSet.add(arr[i]);
        perfectSet.add(i+1);
    }


    for(var value of perfectSet) {
        if(!testSet.has(value)) {
            return 0
        }
    }

    return 1

    //Naive solution
    // let desiredValues = Array(n).fill(0).map((val, index) => index + 1);

    // let isPermutation = desiredValues.every(val => arr.includes(val)) ? 1 : 0;

    // return isPermutation;


}

let ans = pC([4,1,3,5]);

console.log(ans)
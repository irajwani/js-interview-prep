//Given two arrays, find smallest non-negative difference b/w two elements in the arrays



function sD(A, B) {

    A = A.sort((a,b) => a - b); B = B.sort((a,b) => a - b);

    let difference = Math.pow(10, 9);

    let i = 0, j = 0;

    while(i < A.length && j < B.length) {

        if(B[j] - A[i] > 0 && B[j] - A[i] < difference) {
            difference = B[j] - A[i];
        }

        if(A[i] < B[j]) {
            i++
        }
        else {
            j++
        }

        
    }

    return difference
}

let ans = sD([1,49,21,43], [2,2,2,53,2,1]);

console.log(ans);
function bS(A, x) {

    let len = A.length;
    let beg = 0, end = len - 1, mid;
    let result = -1;
    while(beg <= end) {
        mid = (beg + end)/2
        if(A[mid] >= x) {
            end = mid - 1;
        }
        else {
            beg = mid+1;
            result = mid;
        }
    }

    return result;
}

let ans = bS([1,2,3,4,4,5,6,6,8,10], 7);

console.log(ans);

//example, we are searching for the smallest element in A that is greater than or equal to x
function findMedian(arr1, arr2) {
    //Good illustration of usage of cursors to first perform a merge sort of the arrays in log(A + B) time
    let len1 = arr1.length, len2 = arr2.length;
    let i1 = 0, i2 = 0;
    let merged = [];

    while(i1 < len1 && i2 < len2) {
        if(i1 <= i2) {
            merged.push(arr1[i1++]);
        }
        else {
            merged.push(arr2[i2++]);
        }
    }

    while(i1 < len1) {
        merged.push(arr1[i1++]);
    }

    while(i2 < len2) {
        merged.push(arr2[i2++]);
    }

    if(merged.length < 1) {
        return null
    }

    return merged.length % 2 == 0 ? (merged[merged.length/2 - 1] + merged[merged.length/2])/2 : (merged[Math.floor(merged.length/2)])
}

let ans = findMedian([1,2,4], [3,2,5,3,7])

console.log(ans);
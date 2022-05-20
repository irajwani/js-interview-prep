function merge(left, right) {
    let arr = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(A) {

    if (A.length < 2) {
        return A;
    }
    let mid = A.length / 2;
    const left = A.slice(0, mid);
    const right = A.slice(mid,)
    return merge(mergeSort(left), mergeSort(right));
}

const test = [3,7,1,-4,9,4]

const ans = mergeSort(test);
console.log(ans);
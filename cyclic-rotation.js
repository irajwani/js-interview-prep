//Given array arr with N integers, and integer K to determine number of rotations, write a function that outputs resultant array after arr has been subject to 
// K cyclic rotations. One rotation = move all elements to right by one index, and last element becomes first element.

function cR(arr, k) {
    if(!Array.isArray(arr)) {
        return arr;
    }

    if(arr.length == 1 || arr.length == 0 || arr.length % k == 0) {
        return arr;
    }

    // var dummyArray = Array(k).fill(1);
    for(let i = 1; i<=k; i++) {
        arr = oneRotation(arr);
    }

    // dummyArray.forEach(() => {
        
    // })

    return arr;
    
    
} 

function oneRotation(arr) {
    let rotatedArray = arr.map((integer, index) => {
        if(index == 0) {
            return arr[arr.length - 1];
        }
        return arr[index-1]
    });

    return rotatedArray;

}

let ans = cR([1,2,3,4,5], 2);

console.log(ans);

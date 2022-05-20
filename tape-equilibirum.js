function tE(arr) {

    let leftSum = 0, rightSum = 0, difference, leastDifference;

    let sum = arr.reduce((a,b) => a + b);

    for(var p = 0; p < arr.length - 1; p++) {
        leftSum += arr[p];
        rightSum = sum - leftSum;
        difference = Math.abs(leftSum - rightSum);
        if(leastDifference == undefined || difference < leastDifference) {
            leastDifference = difference;
        }
    }

    return leastDifference
}

// function tE(arr) {
//     let pOptions = arr.map((integer, index) => index);
//     let leftArr, rightArr, leftSum, rightSum, difference, leastDifference;

//     if(pOptions.length == 2) {
//         leastDifference = Math.abs(arr[1] - arr[0])
//     }

//     else {

//         pOptions.forEach((p) => {
//             if(p > 0) {
//                 leftArr = arr.filter((integer, index) => index < p );
//                 rightArr = arr.filter((integer, index) => index >= p );
//                 leftSum = leftArr.reduce((a,b) => a + b), rightSum = rightArr.reduce((a,b) => a + b); 
//                 difference = Math.abs((leftSum) - (rightSum));

//                 if(leastDifference == undefined || difference < leastDifference) {
//                     leastDifference = difference;
//                 }

                
//             }

//         })

//     }

//     return leastDifference;

    
// }

function findLeastDifference(arr, p) {
    
}

let ans = tE([-3,-1,2])

console.log(ans);
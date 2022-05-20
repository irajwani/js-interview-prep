//Given array with N integers, find smallest positive integer that does not occur in array.

// 1. Handle base case: For array with length 1, Return 1 if that is the missing integer and 2 if 1 is in the array.
// 2. Return 1 if values in array <= 0.
// 3. Filter to keep only the positive values.
// 4. Sort in asc order to establish upper and lower bounds.
// 5. If min is not 1, then SPI is 1.
// Now that all edge cases have been handled
// 6. Iterate over array and check if currentValue + 1 is within array or not; as soon as it is not, then SPI is currentValue + 1;

function sPI(arr) {
    let response;

    if(arr.length == 1) {
        if(arr[0] <= 0) {
            return 1
        }

        else if(arr[0] == 1) {
            return 2
        }

        else if(arr[0] > 1) {
            return 1
        }
    }

    arr = arr.filter(integer => integer > 0)

    if(arr.find(integer => integer > 0) == undefined) {
        return 1
    }

    let sortedArr = arr.sort((a,b) => a - b);
    let min = sortedArr[0], max = sortedArr[-1];
    if(min != 1) {
        return 1;
    }

    for(let i = 0; i <= sortedArr.length; i++) { 
        if(sortedArr[i]+1 != sortedArr[i+1]) {
            return sortedArr[i] + 1
        }
    }
    
    // response = sortedArr.find(integer => {
    //     if(!sortedArr.includes(integer + 1)) {
    //         return true
    //     }
    // });
    // response++;
    
    
    return response;
}

let ans = sPI([-1,-2,1,0, 90,91,92,93]);

console.log(ans);

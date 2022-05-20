//Given an array that contains an odd number N of elements, and values such that each value occurs exactly twice, except one element which appears once;
//find this element

function oOA(arr) {
    let unique;
    if(arr.length == 1) {
        return arr[0];
    }

    let occurrencesMap = new Map();
    let occurrences;
    arr.forEach(int => {
        
        if(occurrencesMap.has(int)) {
            occurrences = occurrencesMap.get(int);
            occurrences++;
            occurrencesMap.set(int, occurrences);
        }
        else {
            occurrencesMap.set(int, 1);
        }
    })
    
    
    occurrencesMap.forEach((entry, key) => {
        console.log(entry)
        if(entry == 1) {
            unique = key;
        } 
    })
    console.log(unique)
    // .filter((entry) => entry[1] = 1)
    // let sortedArr = arr.sort((a,b) => a - b);
    // unique = sortedArr.filter((int, index) => {
    //     if(int != sortedArr[index + 1] && int != sortedArr[index - 1]) {
    //         return int;
    //     }
    // })
    
    // unique = unique[0]
    
    
    return unique;
}

let ans = oOA([1,1,3,2,3,4,5,5,5,4]);

console.log(ans);
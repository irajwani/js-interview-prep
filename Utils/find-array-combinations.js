function findCombinations(arr, response, r, start, end, index, combinations) {
    // console.log(response);
    if(index == r) {
        // console.log(response)
        combinations.push(response.slice(0, r));
        console.log(combinations)
        // for(let j = 0; j < r; j++) {
        //     // console.log(response[j])
            
        // }
        // console.log("   ")
        // return response
    }

    

    let i = start;
    while(i <= end && end - i + 1 >= r - index) {
        response[index] = arr[i];
        // console.log(response);
        findCombinations(arr, response, r, i+1, end, index+1, combinations)
        i++
    }
}

let A = [1,2,3,4,5], r = 3, start = 0, end = A.length - 1, response = new Array(r).fill(0), combinations = [];

let ans = findCombinations(A, response, r, start, end, 0, combinations);

console.log(ans);
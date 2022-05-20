let solution = (arr) => {

    let deltas = new Array(arr.length).fill(0);


    for(let i = 1; i < arr.length; i++) {
        deltas[i] = arr[i] - arr[i-1];
    }

    let currentElement, localMax = deltas[0], absoluteMax = deltas[0], nextSum;

    for(let i = 1; i < deltas.length; i++) {
        currentElement = deltas[i];
        nextSum = localMax + currentElement;
        localMax = Math.max(nextSum, currentElement);
        absoluteMax = Math.max(absoluteMax, localMax);
    }

    if(absoluteMax > 0) {
        return absoluteMax
    }

    return 0
}

let ans = solution([-2,-3,4,5,6,1,8]);

console.log(ans)



// Given an array A consisting of N integers containing daily prices of a stock share for a period of N consecutive days, 
// returns the maximum possible profit from one transaction during this period. The function should return 0 if it was impossible to gain any profit.
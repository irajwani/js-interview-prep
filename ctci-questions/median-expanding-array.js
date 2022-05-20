let solution = (arr) => {

    let median;
    let len = arr.length;
    if(len % 2 == 0) {
        median = (arr[(len - 2)/2] + arr[(len)/2])/2;
    }
    else {
        median = arr[(len - 1)/2];
    }


    return median;
}

let ans = solution([1,2,3,4])

console.log(ans)
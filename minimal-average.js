function mI(arr) {
    let slice, average, minAverage, startingPosition;

    if(arr.length == 2) {
        return 0;
    }
    
    for(let p = 0; p < arr.length - 1; p++) {
        for(let q = p+1; q < arr.length; q++) {
            // console.log(p,q);
            slice = arr.slice(p,q+1);
            // console.log(slice);
            average = (slice.reduce((a,b) => a + b))/slice.length;
            if(minAverage == undefined || average < minAverage)  {
                minAverage = average;
                startingPosition = p;
            }
        }
    }


    return startingPosition;
}

let ans = mI([4,2,2,5,1,5,8])

console.log(ans);
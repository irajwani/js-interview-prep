function fRJ(arr, x) {
    let minSecond, second, position;
    let positions = Array(x).fill(0).map(((p, index) => index + 1));
    let achievedPositions = [];
    let canJump = false;

    // let leavesWillEventuallyFallAtDesiredPositions = 


    for(var i = 0; i < arr.length ; i++) {
        //hence indices and array lengths get along
        second = i;
        position = arr[i];
        // leafHasFallen = recording this position is warranted (frog is happy)
        let leafHasFallen = positions.includes(position) && !achievedPositions.includes(position);

        
        // console.log("time", second, "and position", position, leafHasFallen);
        


        if(leafHasFallen) {
            achievedPositions.push(position);
            achievedPositions = achievedPositions.sort((a,b) => a - b);
            canJump = positions.every(position => achievedPositions.includes(position));
            // console.log(canJump, second)
            
        }

        if(canJump) {
            return second;
        }

        if(!canJump && i == arr.length - 1) {
            return -1;
        }

        


    }

    return minSecond;

}

// let ans = fRJ([1,3,2,3,2,3,2,3,1,2,3], 4);

// console.log(ans);
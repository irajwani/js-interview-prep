let solution = (arr) => {

    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] == 0) {
                for(let j = 0; j < arr[i].length; j++) {
                    arr[i][j] = 0;
                }

                for(let i = 0; i < arr.length; i++) {
                    arr[i][j] = 0;
                }


                // willBeZeroed.push({i,j});
            }
        }
    }

    
    return arr;
}

let ans = solution([[2,1,3], [7,6,7], [6,5,0]]);

console.log(ans);


// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.
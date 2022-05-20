function tE(arr) {

    if(arr.length < 3) {
        return 0
    }
    
    arr = arr.sort((a,b) => a - b);

    for(var i = 0; i < arr.length - 2 ; i++) {
        let slice = arr.slice(i,i+3);

        isTriangular = isSliceTriangular(slice);

        if(isTriangular) {
            return 1
        }
        
    }


    return 0
}


function isSliceTriangular(slice) {
    let p = slice[0], q = slice[1], r = slice[2];
    let test1 = p + q > r, test2 = p + r > q, test3 = r + q > p;

    if(test1 && test2 && test3) {
        return true
    }

    return false

}

// let ans = tE([10,2,5,1,8,20]);
// console.log(ans);
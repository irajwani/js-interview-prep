function pME(arr) {
    let response;
    if(arr.length == 0) {
        return 1;
    }

    if(arr.length == 1) {
        if(arr[0] == 1) {
            return 2
        }
        
        return 1
        
    }

    let sortedArr = arr.sort((a,b) => a - b);
    sortedArr.forEach((integer, index) => {

        

        if(sortedArr[index + 1] - integer > 1) {
            response = integer + 1;

        }

        
        if(index == arr.length - 1 && response == undefined) {

            if(integer == arr.length + 1) {
                //first is missing
                response = sortedArr[0] - 1;
            }
            else {
                //last is missing
                response = integer + 1
            }
            
        }
    });


    


    return response;
}

let ans = pME([2,3,4,5]);

console.log(ans);
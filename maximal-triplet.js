function mT(arr) {

    let maximalProduct;
    let trial1, trial2;

    if(arr.filter(val => val != 0).length < 3) {
        return 0
    }

    arr = arr.sort((a,b) => a - b);
    // let max = Math.max(...arr), min = Math.min(...arr);

    if(arr.find(val => val < 0) == undefined || arr.find(val => val > 0) == undefined) {
        maximalProduct = arr.slice(arr.length - 3, arr.length).reduce((accumulator, value) => accumulator*value);
    }

    else {
        trial1 = arr.slice(arr.length - 3, arr.length).reduce((accumulator, value) => accumulator*value);
        trial2 = arr[arr.length - 1]*arr.slice(0, 2).reduce((accumulator, value) => accumulator*value);

        if(trial1 >= trial2) {
            return trial1
        }

        return trial2
    }

    return maximalProduct;
}

// let ans = mT([-6,-2,2,4,5 ]);

// console.log(ans);
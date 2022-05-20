function cD(a, b, k) {
    let response;
    if(a % k > 0) {
        //a is not a multiple of k,
        response = Math.floor((b - (a - a % k))/k);
    }

    else if(a % k == 0) {
        //a is a multiple of k
        response = Math.floor((b - a)/k) + 1;
    }


    return response;
}

// function cD(a, b, k) {
//     let response = 0;


//     for(var i = a; i <= b; i++) {

//         if(i > 0 && i % k == 0) {
//             response++;            
//         }
//     }

//     return response;
// }

let ans = cD(3,15,2);

console.log(ans);
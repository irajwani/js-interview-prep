// Given starting point x, a frog will jump fixed distance d. Find number of jumps/steps required until frogPosition >= y.

// Handle case when d = 0 or if y precedes or is equal to x.
// Use arithmetic and division to calculate number of steps.


function fJ(x, y, d) {
    let steps = 0;
    let currentPosition = x;

    if(d == 0 || y < x) {
        return 0;
    }

    if(x == y) {
        return steps;
    }

    steps = Math.ceil((y-x)/d);

    // while(currentPosition < y) {
    //     currentPosition += d;
    //     steps += 1;
    // }

    return steps;
}

let ans = fJ(3, 999111321, 7);

console.log(ans);
function mC(N, A) {
    let counters = Array(N).fill(0)
    let currentMax = 0 
    let lastIncrease = 0

    for (let integer of A) {       
        if (integer > N) {
            lastIncrease = currentMax;
        } else {
            let i = counter - 1
            counters[i] = Math.max(counters[i], lastIncrease)
            counters[i]++
            currentMax = Math.max(currentMax, counters[i])
        }
    }
    
    return counters.map(c => Math.max(c, lastIncrease))
}

// function mC(n, arr) {
//     let counters = Array(n).fill(0);
//     let operations = arr.map((integer, index) => {
//         if(integer >= 1 && integer <= n) {
//             return {type: 'increment', incrementElement: integer - 1}
//         }
//         else if(integer == n + 1) {
//             return {type: 'max'}
//         }
//         else {
//             return {type: 'do nothing'}
//         }
//     });

//     // console.log(operations);

//     let max = 0;
//     operations.forEach((operation, index) => {
//         if(operation.type == 'increment') {
//             counters[operation.incrementElement] += 1;
//             if(counters[operation.incrementElement] > max) {
//                 max = counters[operation.incrementElement];
//             }
//         }
//         else if(operation.type == 'max') {
//             counters = counters.map(() => max)
//         }
        
//     })


//     return counters;
// }

let ans = mC(1, [3]);

console.log(ans);
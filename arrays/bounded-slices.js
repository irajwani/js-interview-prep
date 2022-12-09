// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
    let n = A.length;
    let slices = n;
    let p = 0, q = n - 1;
    while(p <= 3) {
        if (q == p) {p++, q = n - 1};
        const slice = A.slice(p,q+1);
        if (slice.length > 1 && Math.max(...slice) - Math.min(...slice) <= K) slices++;
        q--;
        console.log(p,q, slice);
    };
    return slices;
}

console.log(solution(2,[3,5,7,6,3]))

/**
 * @param {number[]} height
 * @return {number}
 */
/*
* Use 2 pointers
* Intelligently move correct pointer to consider a potentially bigger container
* */
var maxArea = function(height) {
    // 2,1
    let max = 0;
    let i = 0, j = height.length - 1;

    while (i!==j) {
        const a = area(height[i], height[j], j - i);
        max = Math.max(a, max)
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }


    return max;
};

function area(h1,h2, b) {
    const h = Math.min(h1,h2);
    return b * h
}

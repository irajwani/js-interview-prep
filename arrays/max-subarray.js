/**
 * @param {number[]} nums
 * @return {number}
 */
/*
* what is optimal subarray sum for subarray ending at i?
* extension of subarray or just arr[i]?
* hence, we either start fresh or we keep extending
* always comparing against global max
* */
var maxSubArray = function (nums) {
    let sum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
};

const nums = [1, 3, -1] // [1,3]
console.log(maxSubArray(nums))

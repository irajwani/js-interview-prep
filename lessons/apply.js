// the apply function proto method calls a function with a given `this` value, and arguments provided as an array or array like object

const arr1 = [1,2,3];
const arr2 = [4,5,6];
arr1.push.apply(arr1, arr2);
console.log(arr1);
// this way, we can append arrays without using the concat method which creates a new array for us
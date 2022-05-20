const nums = [9, 5, 6, 2, 6, 8, 8, 8, 9, 3, 4, 4, 5]

// Naive sort O(N*N)

function findSmallest(arr) {
    let smallest = arr[0];
    let smallest_index = 0;
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index
}

function simpleSort(arr) {
    let sortedArray = [];
    const iterations = arr.length;
    for(let i = 0; i < iterations; i++) {
        const smallest_index = findSmallest(arr);
        sortedArray.push(arr[smallest_index]);
        arr.splice(smallest_index, 1);
    }
    return sortedArray;
};

// Quick sort worst case O(N*N) but O(N*logN) on average

function quickSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    else {
        const pivot = arr[0];
        const partitionedArrays = arr.slice(1,).reduce((acc, elem) => {
            if (elem <= pivot) acc[0].push(elem);
            if (elem > pivot) acc[1].push(elem);
            return acc;
        }, [[],[]])
        return quickSort(partitionedArrays[0]) + pivot + quickSort(partitionedArrays[1])
    }
}

const result = quickSort(nums);

console.log(result);
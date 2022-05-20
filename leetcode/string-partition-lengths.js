// Given a string S, find all lengths of all possible partitions of string 
// given that each character must only be in exactly one partition regardless of how many
// times that character occurs in the partition 

function sPL(str) {
    let partitionLengths = [], end;
    let lastIndices = new Map();

    for(let l = 0; l < str.length; l++) {
        if(!lastIndices.has(str[l])) {
            lastIndices.set(str[l], str.lastIndexOf(str[l]))
        }
    }

    let i = 0, j;
    while(i < str.length) {
        end = lastIndices.get(str[i]);
        j = i+1;
        while(j != end) {
            end = Math.max(end, lastIndices.get(str[j++]))
        }

        partitionLengths.push(j - i + 1);
        i = j + 1;
    }

    return partitionLengths;
}
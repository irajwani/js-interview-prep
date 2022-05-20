function isValidPartition(A, B) {
    let a = 0, b = 0;
    
    A.forEach(row => {
        row.forEach(land => {
            if(land == 1) {
                a++;
            }
        })
    })
    
    B.forEach(row => {
        row.forEach(land => {
            if(land == 1) {
                b++;
            }
        })
    })
    
    if(a > 0 && b > 0 && a == b) {
        return true
    }
    else {
        return false
    }
    
}

function solution(N, M, X, Y) {
    let partitions = 0;
    let plot = new Array(N)
    for(var c = 0; c < N; c++) {
        plot[c] = new Array(M).fill(0)
    }
    
    
    for(let i = 0; i < X.length; i++) {
        // console.log(X[i], Y[i])
        plot[X[i]][Y[i]] = 1;
    }
    
    let maxColSplit = M - 1, maxRowSplit = N - 1;
    let A, B;
    
    for(let rS = 1; rS <= maxRowSplit; rS++) {
        A = plot.slice(0, rS);
        B = plot.slice(rS);
        if(isValidPartition(A, B)) {
            partitions++
        }
        
    }
    
    // console.log(plot);
    plot = plot[0].map((col, i) => plot.map(row => row[i]))
    // console.log(plot);
    
    for(let cS = 1; cS <= maxColSplit; cS++) {
        A = plot.slice(0, cS);
        B = plot.slice(cS);
        if(isValidPartition(A, B)) {
            partitions++
        }
        
    }
    
    return partitions;
}

// An old king wants to divide his kingdom between his two sons. He is well known for his justness and wisdom, and he plans to make a good use of both of these attributes while dividing his kingdom.

// The kingdom is administratively split into square boroughs that form an N × M grid. Some of the boroughs contain gold mines. The king knows that his sons do not care as much about the land as they do about gold, so he wants both parts of the kingdom to contain exactly the same number of mines. Moreover, he wants to split the kingdom with either a horizontal or a vertical line that goes along the borders of the boroughs (splitting no borough into two parts).

// The goal is to count how many ways he can split the kingdom.

// Write a function:

// function solution(N, M, X, Y);

// that, given two arrays of K integers X and Y, denoting coordinates of boroughs containing the gold mines, will compute the number of fair divisions of the kingdom.

// For example, given N = 5, M = 5, X = [0, 4, 2, 0] and Y = [0, 0, 1, 4], the function should return 3. The king can divide his land in three different ways shown on the picture below.

// Divide horizontally in two ways or vertically in one way
// Write an efficient algorithm for the following assumptions:

// N and M are integers within the range [1..100,000];
// K is an integer within the range [1..100,000];
// each element of array X is an integer within the range [0..N−1];
// each element of array Y is an integer within the range [0..M−1].
//Ruthenium 2019
// 15%
// Errors: Test cases except "all distinct"
function solution(A, K) {

    
    
    let ages = [], cons = 0, maxCons = 0, remaining;
    A.forEach((val, index) => {
        
        if(A.indexOf(val) == index) {
            ages.push(val)
        }
    });

    if(K == 0) {
        for(var age of ages) {
            cons = 0;
            for(let i = A.indexOf(age); i<A.length;i++) {
                if(A[i] == age) {
                    cons++
                    maxCons = Math.max(cons, maxCons);
                }
                else {
                    break
                }
            }
        }
    }
    else {

        for(var age of ages) {
            
            cons = 0 //consecutive;
            remaining = K;
            let i = A.indexOf(age);
            while(remaining > 0) {
                if(A[i] == age) {
                    cons++
                }
                else {

                    if(remaining > 0) {
                        cons++;
                        maxCons = Math.max(cons, maxCons);
                        remaining--;
                    }
                    
                }

                i = (i+1) % A.length;
            }
            
        }
    }

    return maxCons
    
    
    
    
}

let ans = solution([1,1,3,4,3,3,4], 2);

console.log(ans);

function findMaxCons(A) {
    let cons = 1, maxCons = 1;
    // console.log(A)
    for (let i = 0; i < A.length; i++) {
        if (A[i] === A[i + 1]) {
            cons+=1
        }
        else {
            cons = 1;
        }
        maxCons = Math.max(cons, maxCons);
    }
    return maxCons;
}

function maxConsBooks(A, K) {
    
    let cons = 0, maxCons = 0, temp;
    for (let i = 0; i < A.length; i++) {
        
        temp = A;
        for (let r = 1; r <= K && i < A.length; r++) {
            if (i + r < A.length) temp[i + r] = temp[i];
        }
        cons = findMaxCons(temp);
            
        
        maxCons = Math.max(cons, maxCons);
    }

    return maxCons;
}

console.log(maxConsBooks([1, 1, 3, 4, 3, 3, 4], 2));

// There are N obligatory books in a school program syllabus. The program also defines the order in which books should be read. Each book comes from a specific age, such as the enlightenment or the baroque period. The more books in a row the students read from any given age, the more they learn about it. Moreover, if they read a book from a different age, they will get distracted.

// Teachers are allowed to replace K books from the program with alternatives. They want students to learn as much as possible from a single age (although they have not picked a particular specific age). The amount learned can be measured by the number of consecutive books from the same age read by the students. What is the maximum number of consecutive books from the same age after replacing at most K of them?

// Note that the new books (after replacement) can be any books from the chosen age. They do not need to be listed in the syllabus, so the teacher can always find K books from the same age.

// Write a function:

// class Solution { public int solution(int[] A, int K); }

// that, given an array of integers A of length N, representing the ages of consecutive books from the school program syllabus, and an integer K, returns the maximum number of consecutive books from the same age after replacing at most K of them.

// Examples:

// 1. Given A = [1, 1, 3, 4, 3, 3, 4] and K = 2, the function should return 5. Teachers can replace books from age 4 with books from age 3.

// 2. Given A = [4, 5, 5, 4, 2, 2, 4] and K = 0, the function should return 2. Teachers are not allowed to replace any books.

// 3. Given A = [1, 3, 3, 2] and K = 2, the function should return 4. Teachers can replace all the books from other ages with books from age 3.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// K is an integer within the range [0..N];
// each element of array A is an integer within the range [1..100,000].

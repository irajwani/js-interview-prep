// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// abaacbca', 2

function stringHasK(arr, K) {
    let distincts = arr.filter((val, index) => {
        return arr.indexOf(val) == index
    });
    
    if(distincts.length == K) {
        return true
    }
    
    return false
}

function solution(S, K) {
    let uniques = S.split("").filter((val, index) => {
        return S.indexOf(val) == index
    });
    
    let hasK;
    
    let len = S.length
    let lenLimit = 1000000
    let  currentMinLength,minLength = 1000001, currentSlice, testSubstring
    
    if(K == 0) {
        return -1 //MUST WE ALWAYS DELETE A SUSBTRING?
    }
    
    if(K > uniques.length) {
        return -1
    }
    
    for(let i = len - 1; i >= K; i--) {
        for(let j = 0; j < len - (K-1); j++) {
            
            testSubstring = S.slice(j, j + len - i).split("");
            
            if(j == 0) {
                currentSlice = S.slice(j+1).split("");
            }
            else if(j == len - K) {
                currentSlice = S.slice(0, i).split("");
            }
            else {
                currentSlice = (S.slice(0, j) + S.slice(j + len - i)).split("")
            }
            
            
            
            
            hasK = stringHasK(currentSlice, K);
            // console.log(hasK)
            if(hasK) {
                currentMinLength = testSubstring.length;
                minLength = Math.min(minLength, currentMinLength);
                
            }
            
            if(j == len - 3 && minLength > lenLimit) {
                    continue
            }
            else if(j == len - 3 && currentMinLength != undefined && minLength <= lenLimit) {
                return minLength
            }
            
            
            
            
        }
        
    }
    
    return -1
}
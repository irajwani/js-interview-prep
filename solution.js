function solution(str, k) {
    let substr, remainingString, compressedString, length, minLength = str.length;

    if(str.length)

    for(var i = 0; i < str.length - k; i++) {
        substr = str.slice(i, k+i);
        console.log(substr);
        remainingString = str.slice(0,i) + str.slice(k+i, str.length);
        // console.log(substr);
        // console.log(remainingString);
        compressedString = compressString(remainingString);
        console.log(compressedString)
        length = compressedString.length;
        minLength = Math.min(minLength, length);
        

        // console.log(substr);    
    }

    return minLength;
    
}

function compressString(str) {
    let chars = str.split("");
    let result = "";
    let count = 1;
    
    for(let i = 0; i < chars.length - 1; i++) {
        if(chars[i] == chars[i+1]) {
            count++;
        }
        else {
            result += `${chars[i]}${count}`;
            count = 1;
        }

        
        
    }

    result += `${chars[chars.length - 1]}${count}`

    return result;

}

let ans = solution("ABBBCCDDCCC", 3);

// let ans = compressString("ABBBCCDDCCC")

console.log(ans);
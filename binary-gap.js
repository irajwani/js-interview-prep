// find longest binary gap (uninterrupted 0's with a 1 at both ends) from the binary representation of positive integer N

// 1. Convert number to binary representation;
// 2. Handle cases when BG does not exist
// 3. iterate over array of characters. If it's a 1, continue, Else:
// If it's a 0 and the next element is also 0, then add to the binary gap. 
// If it s a 0 and the next element is a 1, then add to the binary gap, check if this largest BG encountered thus far (and set this Bg to largestBG if it is), then reset the BG value. 
// Return largestBg

function bG(N) {
    if(typeof(N) !== 'number' || !Number.isInteger(N) || N <= 0) {
        return 0
    }
    

    let str = N.toString(2);

    let chars = str.split("");
    // console.log(str);
    let binaryGap = 0, largestBinaryGapSeen = 0;

    if(chars.length <= 2 || chars.find(char => char == "1") == undefined) {
        return largestBinaryGapSeen
    }

    chars.forEach((char, index) => {
        
        
        if(char == "1") {
            // console.log('do nothing');
        }
        else {
            if(char == "0" && chars[index+1] == "1") {
                binaryGap += 1;
                if(binaryGap > largestBinaryGapSeen) {
                    largestBinaryGapSeen = binaryGap;
                }
                binaryGap = 0;
            }

            else {
                //if char is 0
                binaryGap += 1;
            }
            
        }
        

        
    });
    
    return largestBinaryGapSeen;
}

let ans = bG(34.4);

console.log(ans);
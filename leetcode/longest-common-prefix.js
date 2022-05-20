/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length
    let prefix = "", prefixLength = 0, temp = new Array(len), firstChars = new Array(len), count = new Map(), maxCount = 0, mostCommon, alphabet;
    strs = strs.sort((a,b) => a - b);
    
    let i = 0;
    while(temp.every(str => str == temp[0])) {
        
        console.log(temp, i, prefix)
        
        temp = strs.filter(str => str.substring(0, i) == prefix).map(str => str.substring(i)) 
        
        // firstChars = temp.map(str => str.charAt(0)).filter((str, index) => str == temp[0])
        
        
        
        console.log(temp, prefix);
        
    
        // temp = temp.map(str => str.charAt(0));
        
        for(let j = 0; j < temp.length; j++) {
            
            
            
            alphabet = temp[j].charAt(0);
            
            if(temp[j+1] && temp[j+1].charAt(0) != alphabet) {
                break
            }
            
            if(count.has(alphabet)) {
                count.set(alphabet, count.get(alphabet) + 1)
            }
            else {
                count.set(alphabet, 1)
            }
        }
        
        for(let c of Array.from(count.entries())) {
            if(c[1] > maxCount) {
                maxCount = c[1];
                mostCommon = c[0]
            }
        }
        
        count.clear();
        maxCount = 0;
        
        prefix += mostCommon
        i++;
        
        
        
    }
    
    return prefix
    
};
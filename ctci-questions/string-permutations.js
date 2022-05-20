let perms = [];

function permutations(str, prefix) {
    let rem;
    if(str.length == 0) {
        perms.push(prefix);
        // console.log(prefix);
    }
    else {
        for(let i = 0; i < str.length; i++) {
            //take all characters up till but not including i'th character, and all characters after i'th character.
            rem = str.substring(0,i) + str.substring(i+1);
            // console.log(i, rem, prefix + str.charAt(i));
            //for each character, keep it fixed as first value and then print all permutations of shuffling the remaining characters
            permutations(rem, prefix + str.charAt(i)); 
        }
    }
}

permutations("aadj", "")
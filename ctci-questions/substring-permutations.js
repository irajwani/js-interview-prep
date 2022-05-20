let solution = (string, substring) => {

    let substringCharacters = substring.split("").sort();
    
    let stringCharacters = string.split(""),
    testSubstringCharacters,
    permutations = 0;


    for(let i = 0; i < stringCharacters.length - substringCharacters.length + 1 ; i++) {
        testSubstringCharacters = stringCharacters.slice(i, i + substring.length).sort();

        if(!substringCharacters.includes(stringCharacters[i])) {
            continue
        }
        // console.log(substringCharacters);
        // console.log(testSubstringCharacters);
        
        // if(testSubstringCharacters.filter(val => substringCharacters.includes(val)).length == testSubstringCharacters.length) 
        if(testSubstringCharacters.every(val => substringCharacters.includes(val))) {
            permutations += 1;
            // console.log(i);
        }
        // for (var char of testSubstring) {
            
        // }


    }


    return permutations
}


let ans = solution("wsfwsfwsfgfg", "gf");

console.log(ans);
// Example: Given a smaller string 5 and a bigger string b, design an algorithm to find all permuta- tions,
// of the shorter string within the longer one. Print the location of each permutation.
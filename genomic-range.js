function gR(dna, arrP, arrQ) {
    let minImpactFactors = Array(arrP.length).fill(undefined), minImpactFactor;
    for(var k = 0; k < arrP.length ; k++) {
        minImpactFactor = stringToMinimalImpactFactor(dna.slice(arrP[k], arrQ[k] + 1));
        console.log(minImpactFactor)
        minImpactFactors[k] = minImpactFactor;
    }

    return minImpactFactors
}

function stringToMinimalImpactFactor(str) {
    let chars = str.split("");
    chars.forEach((char, index) => {
        switch(char) {
            case "A":
                chars[index] = 1;
                break;
            case "C":
                chars[index] = 2;
                break;
            case "G":
                chars[index] = 3;
                break;
            default:
                chars[index] = 4;
                break;
        }
    })

    return Math.min(...chars);
}

// let ans = gR("CAGCCTA", [2,5,0], [4,5,6]);

// console.log(ans);

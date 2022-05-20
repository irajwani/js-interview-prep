// function solution(arr) {
//     // console.log(arr[0][-1]);
//     let word = "";
//     let letter, next;
//     let map = new Map();
//     let nums;
//     for(var relation of arr) {
//         nums = relation.split("");

//         map.set(nums[0], nums[2]);
//     }

//     let chars = arr.map()













//     for(var relation of Array.from(map.entries())) {
//         letter = relation[0];
//         console.log(letter);
//         next = relation[1];

//         word += letter;

//         console.log(word)


//         while(map.has(word.charAt(word.length - 1))) {
//             word += map.get(word.charAt(word.length - 1))
//         }



//         // if(map.has(relation)) {
//         //     // if(map.has(next)) {
//         //     //     word += map.get(next)
//         //     // }
//         //     word += letter + next;
            

//         // }
//     }
 
//     return word
// }

// let ans = solution(["I>N","A>I","P>A","S>P"]);

// console.log(ans);
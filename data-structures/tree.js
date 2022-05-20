

//Example Question - Given an input prefix, find all possible words in dictionary that could autocomplete that prefix

function Node(prefix) {
    this.prefix = prefix;
    this.children = new Map()
    this.isWord = false;

}

function autocomplete(dictionary, prefix) {
    let tree = new Node(""), curr;
    dictionary.forEach(str => {
        curr = tree
        for(let i = 0; i < str.length; i++) {

            if(!curr.children.has(str.charAt(i))) {
                curr.children.set(str.charAt(i), new Node(str.substring(0, i+1)))
            }

            curr = curr.children.get(str.charAt(i));
            
            if(i == str.length - 1) {
                curr.isWord = true;
            }
        }
    });

    console.log(tree);

    // let results = [];

    let current;
    for(let i = 0; i < prefix.length; i++) {
        if(tree.children.has(prefix[i])) {
            tree = tree.children.get(prefix[i]) 
        } 
    }

    // let results = [];

    let ans = findAllChildWords(tree);

    console.log(ans);




}


function findAllChildWords(node) {
    let results = [];
    console.log(results)
    if(node.isWord) {
        results.push(node.prefix)
    }

    if(node.children.keys().length == 0) {
        return results;
    }
    
    for(var char of node.children.keys()) {
        findAllChildWords(node.children.get(char, results))
    }

}

autocomplete(["accd", "acca", "bcd", "abra"], "a")















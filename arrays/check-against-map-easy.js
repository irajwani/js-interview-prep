
function matchingStrings(stringList, queries) {
    // build frequency count map
    const freq = new Map();
    stringList.forEach((item) => {
        freq.set(item, (freq.get(item) || 0) + 1);
    })

    return queries.map(q => {
        return freq.get(q) || 0;
    });

}

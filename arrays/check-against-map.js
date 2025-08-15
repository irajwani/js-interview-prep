function find(logs, k) {
    const map = new Map();
    const res = [];
    let i = 0;
    while (i < logs.length) {
        const [ s, r ] = logs[i].split(" ");
        const count = (map.get(s) || 0)
        if (count > k) {
            i++;
            continue
        };
        map.set(s, count + 1);
        if (count === k) res.push(s);

        // if(!same user)
        // map.set(r, count + 1);
        // if (count === k) res.push(r);

        i++;
    }
    console.log(map);
    return res.sort();
}

const logs = ["80 50 1","80 20 1","80 50 1","50 50 1"]
const res = find(logs, 2);
console.log(res);

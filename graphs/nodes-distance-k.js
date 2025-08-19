

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {

    const res = [];
    // for (let i = 0; i < root.length; i++) {
    //     const node = TreeNode(root[i]);
    //     node.left = TreeNode(root[i+1]);
    //     node.left = TreeNode(root[i+2]);
    // }

    // compute map of parents
    const parents = new Map();
    dfs(root, null, parents)
    console.log(parents)

    // use map to spread radially outward by K
    const queue = [{ node: target, dist: 0}];
    const visited = new Set([target]);
    while(queue.length) {
        const node = queue.shift();
        if (node.dist === k) {
            res.push(k);
            continue
        }

        for(const n of [node.left, node.right, parents.get(node)]) {
            if (!visited.has(n) && !null) {
                visited.add(n);
                res.push(n.val)
            }
        }
    }

    return res;

};

function dfs(node, parent, map) {
    if (!node) return;
    map.set(node, parent);
    dfs(node.left, node, map);
    dfs(node.right, node, map);
}

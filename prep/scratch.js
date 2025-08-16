function treeHeight(root) {
    if (root.data === null) return -1;

    const lH = treeHeight(root.left)
    const rH = treeHeight(root.right)

    return Math.max(lH, rH)
}

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(12);
root.left = new Node(8);
root.right = new Node(18);
root.left.left = new Node(5);
root.left.right = new Node(11);

console.log(height(root));

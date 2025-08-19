/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let curr = head;
    const map = new Map();
    // create individual nodes
    while (curr) {
        map.set(curr, new _Node(curr.val))
        curr = curr.next;
    }

    // link nodes to next and random
    curr = head;
    while (curr) {
        const copy = map.get(curr);
        copy.next = map.get(curr.next) || null;
        copy.random = map.get(curr.random) || null;
        curr = curr.next;
    }

    return map.get(head);
};

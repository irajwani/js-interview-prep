function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = node.prev = null;
};

LRUCache.prototype.addToHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.moveToHead = function(node) {
    this.removeNode(node);
    this.addToHead(node);
};

LRUCache.prototype.popTail = function() {
    let lruNode = this.tail.prev;
    if (lruNode === this.head) return null;
    this.removeNode(lruNode);
    return lruNode;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.cache.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const node = this.cache.get(key);

    if (node) {
        node.value = value;
        this.moveToHead(node);
        return;
    }

    const newNode = new Node(key, value);
    this.cache.set(key, newNode);
    this.addToHead(newNode);

    if(this.cache.size > this.capacity) {
        const lruNode = this.popTail();
        if (lruNode) this.cache.delete(lruNode.key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

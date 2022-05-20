function Node(data) {
    this.next = null;
    this.data = data;
}

function LinkedList() {

    this.head = null;
}

LinkedList.prototype.push = (val) => {
    var node = {
        value: val,
        next: null
    }
    if(this.head == null){
        this.head = node;      
    }
    else {
        current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }


}

let ssl = new LinkedList();

ssl.push(2);
ssl.push(5);

console.log(ssl);
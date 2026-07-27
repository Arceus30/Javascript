class Node {
    #val;
    #next;
    constructor(value) {
        this.#val = value;
        this.#next = null;
    }
    getVal() {
        return this.#val;
    }
    setVal(newVal) {
        this.#val = newVal;
    }
    getNext() {
        return this.#next;
    }
    setNext(newNext) {
        this.#next = newNext;
    }
}

class LinkedList {
    #head;
    #size;
    constructor() {
        this.#head = null;
        this.#size = 0;
    }

    isEmpty() {
        return this.#size === 0;
    }

    getSize() {
        return this.#size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.#head = newNode;
        } else {
            newNode.setNext(this.#head);
            this.#head = newNode;
        }
        this.#size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.#head = newNode;
        } else {
            let curr = this.#head;
            for (; curr.getNext() !== null; curr = curr.getNext());
            curr.setNext(newNode);
        }
        this.#size++;
    }

    insert(value, idx) {
        if (idx === 0) {
            this.prepend(value);
        }
        if (idx > 0 && idx <= this.getSize()) {
            const newNode = new Node(value);
            let curr = this.#head;
            for (let i = 1; i < idx; i++) {
                curr = curr.getNext();
            }
            newNode.setNext(curr.getNext());
            curr.setNext(newNode);
            this.#size++;
        }
    }

    removeFrom(idx) {
        if (idx < 0 || idx >= this.getSize()) {
            return null;
        }
        let removedNode, removedVal;
        if (idx === 0) {
            removedNode = this.#head;
            removedVal = removedNode.getVal();
            this.#head = removedNode.getNext();
        }
        if (idx > 0 && idx < this.getSize()) {
            let prev = this.#head;
            for (let i = 1; i < idx; i++) {
                prev = prev.getNext();
            }
            removedNode = prev.getNext();
            removedVal = removedNode.getVal();
            prev.setNext(removedNode.getNext());
        }
        this.#size--;
        removedNode.setNext(null);
        return removedVal;
    }

    removeValue(val) {
        if (this.isEmpty()) {
            return null;
        }
        let removedNode;
        if (this.#head.getVal() === val) {
            removedNode = this.#head;
            this.#head = removedNode.getNext();
        } else {
            let prev = this.#head;
            for (
                ;
                prev.getNext() !== null && prev.getNext().getVal() !== val;
                prev = prev.getNext()
            );
            if (prev.getNext() === null) {
                return null;
            }
            removedNode = prev.getNext();
            prev.setNext(removedNode.getNext());
        }

        this.#size--;
        removedNode.setNext(null);
        return removedNode.getVal();
    }

    search(val) {
        if (this.isEmpty()) {
            return -1;
        }
        let curr = this.#head;
        let i = 0;
        for (
            ;
            curr !== null && curr.getVal() !== val;
            curr = curr.getNext(), i++
        );
        if (!curr) {
            return -1;
        } else {
            return i;
        }
    }

    reverse() {
        if (this.isEmpty()) {
            return null;
        }
        let prev = null;
        let curr = this.#head;
        while (curr !== null) {
            let next = curr.getNext();
            curr.setNext(prev);
            prev = curr;
            curr = next;
        }
        this.#head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log("List is Empty");
            return;
        }
        for (let curr = this.#head; curr !== null; curr = curr.getNext()) {
            console.log(curr.getVal());
        }
    }
}

class Queue {
    constructor() {
        this.collection = [];
    }
    enqueue(element) {
        this.collection.push(element);
    }
    dequeue() {
        return this.collection.shift();
    }
    isEmpty() {
        return this.collection.length === 0;
    }
    peek() {
        if (!this.isEmpty()) {
            return this.collection[0];
        }
        return null;
    }
    size() {
        return this.collection.length;
    }
    print() {
        console.log(this.collection.toString());
    }
}

// more optimized object method
class Queue2 {
    #collection;
    #front;
    #rear;
    constructor() {
        this.#collection = {};
        this.#front = 0;
        this.#rear = 0;
    }
    enqueue(element) {
        this.#collection[this.#rear] = element;
        this.#rear++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const deletedElement = this.#collection[this.#front];
        delete this.#collection[this.#front];
        this.#front++;
        return deletedElement;
    }
    isEmpty() {
        return this.#rear - this.#front === 0;
    }
    peek() {
        return this.#collection[this.#front];
    }
    size() {
        return this.#rear - this.#front;
    }
    print() {
        console.log(this.#collection);
    }
}

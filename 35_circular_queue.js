class CircularQueue {
    #collection;
    #capacity;
    #currentLength;
    #front;
    #rear;
    constructor(capacity) {
        this.#collection = new Array(capacity);
        this.#capacity = capacity;
        this.#currentLength = 0;
        this.#front = 0;
        this.#rear = 0;
    }
    enqueue(element) {
        if (this.isFull()) {
            return null;
        }
        this.#collection[this.#rear] = element;
        this.#currentLength++;
        this.#rear = (this.#rear + 1) % this.#capacity;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.#collection[this.#front];
        this.#collection[this.#front] = null;
        this.#currentLength--;
        this.#front = (this.#front + 1) % this.#capacity;
        return item;
    }
    isFull() {
        return this.#currentLength === this.#capacity;
    }
    isEmpty() {
        return this.#currentLength === 0;
    }
    peek() {
        if (this.isEmpty()) return null;
        return this.#collection[this.#front];
    }
    size() {
        return this.#currentLength;
    }
    print() {
        for (let i = 0; i < this.#currentLength; i++) {
            console.log(this.#collection[(this.#front + i) % this.#capacity]);
        }
    }
}

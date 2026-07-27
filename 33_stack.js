class Stack {
    constructor() {
        this.collection = [];
    }
    push(element) {
        this.collection.push(element);
    }
    pop() {
        return this.collection.pop();
    }
    isEmpty() {
        return this.collection.length === 0;
    }
    peek() {
        return this.collection.at(-1) ?? null;
    }
    size() {
        return this.collection.length;
    }
    print() {
        console.log(this.collection.toString());
    }
}

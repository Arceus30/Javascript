class HashTable {
    #collection;
    #size;
    constructor(size) {
        this.#collection = new Array(size);
        this.#size = size;
    }
    #hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.#size;
    }

    set(key, val) {
        const idx = this.#hash(key);
        this.#collection[idx] = val;
    }

    get(key) {
        const idx = this.#hash(key);
        return this.#collection[idx];
    }

    remove(key) {
        const idx = this.#hash(key);
        this.#collection[idx] = null;
    }

    display() {
        this.#collection.forEach(
            (val, idx) => val && console.log(`${idx}: ${val}`),
        );
    }
}

// bucket implementation to avoid hashing collisions
class HashTable2 {
    #collection;
    #size;
    constructor(size) {
        this.#collection = new Array(size);
        this.#size = size;
    }
    #hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.#size;
    }

    set(key, val) {
        const idx = this.#hash(key);
        const bucket = this.#collection[idx];
        if (!bucket) {
            const newBucket = [[key, val]];
            this.#collection[idx] = newBucket;
            return;
        }
        const sameKeyItem = bucket.find((item) => item[0] === key);
        if (sameKeyItem) {
            sameKeyItem[1] = val;
        } else {
            bucket.push([key, val]);
        }
    }

    get(key) {
        const idx = this.#hash(key);
        const bucket = this.#collection[idx];
        if (bucket) {
            const sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return null;
    }

    remove(key) {
        const idx = this.#hash(key);
        const bucket = this.#collection[idx];
        if (bucket) {
            const sameKeyItemIndex = bucket.findIndex(
                (item) => item[0] === key,
            );
            if (sameKeyItemIndex !== -1) {
                bucket.splice(sameKeyItemIndex, 1);
            }
        }
    }

    display() {
        this.#collection.forEach(
            (val, idx) => val && console.log(`${idx}: ${val}`),
        );
    }
}

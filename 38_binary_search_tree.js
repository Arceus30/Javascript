const { Queue2 } = require("./34_queue");

class TreeNode {
    value;
    left;
    right;
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(val) {
        const newTreeNode = new TreeNode(val);
        this.root = this.isEmpty()
            ? newTreeNode
            : this.#insertNode(this.root, newTreeNode);
    }
    #insertNode(root, node) {
        if (root === null) {
            return node;
        }
        if (root.value > node.value) {
            const leftTreeRoot = this.#insertNode(root.left, node);
            root.left = leftTreeRoot;
        } else {
            const rightTreeRoot = this.#insertNode(root.right, node);
            root.right = rightTreeRoot;
        }
        return root;
    }

    search(val) {
        return this.isEmpty() ? false : this.#searchVal(this.root, val);
    }
    #searchVal(root, val) {
        if (root === null) {
            return false;
        }
        if (root.value === val) {
            return true;
        }
        if (root.value > val) {
            return this.#searchVal(root.left, val);
        }
        return this.#searchVal(root.right, val);
    }

    preorderDFS(root) {
        if (root === null) {
            return;
        }
        console.log(root.value);
        this.preorderDFS(root.left);
        this.preorderDFS(root.right);
    }

    inorderDFS(root) {
        // prints the binary search tree in a sorted array
        if (root === null) {
            return;
        }
        this.inorderDFS(root.left);
        console.log(root.value);
        this.inorderDFS(root.right);
    }

    postorderDFS(root) {
        if (root === null) {
            return;
        }
        this.postorderDFS(root.left);
        this.postorderDFS(root.right);
        console.log(root.value);
    }

    levelOrderBFS(root) {
        const queue = new Queue2();
        queue.enqueue(root);
        while (!queue.isEmpty()) {
            const node = queue.dequeue();
            console.log(node.value);
            node.left && queue.enqueue(node.left);
            node.right && queue.enqueue(node.right);
        }
    }

    delete(val) {
        this.root = this.isEmpty() ? null : this.deleteNode(this.root, val);
    }

    findMin(root) {
        if (!root.left) {
            return root;
        }
        return this.findMin(root.left);
    }

    deleteNode(root, val) {
        if (root === null) {
            return root;
        }

        if (root.value > val) {
            root.left = this.deleteNode(root.left, val);
        } else if (root.value < val) {
            root.right = this.deleteNode(root.right, val);
        }

        if (!root.left && !root.right) {
            return null;
        }
        if (!root.left) {
            return root.right;
        }
        if (!root.right) {
            return root.left;
        }

        let successorNode = this.findMin(root.right);
        root.value = successorNode.value;
        root.right = this.deleteNode(root.right, root.value);
        return root;
    }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(0);
bst.insert(20);
bst.insert(7);
bst.insert(13);

bst.levelOrderBFS(bst.root);

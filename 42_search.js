const arr = [1, 2, 3, 4, 5, 6];
const key = 2;

// linear search
function linearSearch() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
        return -1;
    }
}

// Binary Search
function binarySearchIterative() {
    let si = 0;
    let ei = arr.length - 1;
    while (si <= ei) {
        let mi = si + Math.floor((ei - si) / 2);
        if (arr[mi] === key) {
            return mi;
        } else if (arr[mi] < key) {
            si = mi + 1;
        } else {
            ei = mi - 1;
        }
    }
    return -1;
}

function binarySearchRecursive(arr, si, ei, key) {
    if (si > ei) {
        return -1;
    }
    const mid = si + Math.floor((ei - si) / 2);
    if (arr[mid] === key) {
        return mid;
    } else if (arr[mid] < key) {
        return binarySearchRecursive(arr, mi + 1, ei, key);
    }
    return binarySearchRecursive(arr, si, mid - 1, key);
}

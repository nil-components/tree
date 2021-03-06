const toString = Object.prototype.toString;

export function isFunction(obj) {
    return toString.call(obj) === "[object Function]";
}

export function isPromiseLike(promise) {
    return promise && isFunction(promise.then);
}

export function arrayFill(array, value) {
    const length = array == null ? 0 : array.length;
    for (let i = 0; i < length; i++) {
        array[i] = value;
    }

    return array;
}

// export function isLoading(node) {
//     return node.loading;
// }

// export function isLeaf(node) {
//     return !!node.leaf;
// }

// export function isExpanded(node) {
//     return !!node.expanded;
// }

export function toMarked(array = []) {
    const marked = Object.create(null);

    array.forEach(value => {
        marked[value] = true;
    });

    return marked;
}

export function closest(el, selector) {
    const matches =
        el.matches || el.msMatchesSelector || el.webkitMatchesSelector;

    if (el.closest) {
        return el.closest(selector);
    } else {
        do {
            if (matches.call(el, selector)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    }
}

// Разработайте стек, который поддерживает операции push, pop, top 
// и извлечение минимального элемента за постоянное время O(1).

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.getMin()) {
            this.minStack.push(x);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return;
        }
        const removed = this.stack.pop();
        if (removed === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        if (this.stack.length === 0) {
            return null;
        }
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());
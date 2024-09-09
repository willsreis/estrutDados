class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // items = {
    //     0: 5,
    //     1: 8
    // };
    // count = 2;
    // lowestCount=0;

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    
    

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount];
    }

    size () {
        return this.count - this.lowestCount;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
        return 'limpando fila...'
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for( let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString
    }

    

}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');

console.log(queue.toString());
queue.enqueue('Camila');
// console.log(queue.items);
// console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());
console.log(queue.clear());
// queue.clear();
console.log(queue.items);

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';

     while (number > 0) {
        rem = number % 2;
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
 
    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;        
}

console.log(decimalToBinary(10));       

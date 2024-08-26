class Stack {
    constructor(){
        this.itens = [];
    }
    push(element){
        this.itens.push(element);
    }
    pop(){
        return this.itens.pop();
    }
    peek(){
        return this.itens[this.itens.length -1];
    }
    isEmpty() {
        return this.itens.length === 0;
    }
    size() {
        return this.itens.length;
    }
    clear() {
        this.itens = [];
    }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(5);
stack.push(8);

console.log(`PEEK:  ${stack.peek()}`);

stack.push(11);
console.log(`SIZE:  ${stack.size()}`);
console.log(`isEmpty:  ${stack.isEmpty()}`);
stack.push(15);

stack.pop();
stack.pop();
console.log(`SIZE:  ${stack.size()}`);
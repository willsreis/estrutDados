class Fila {
    constructor() {
        this.items = [];
    }

    enfileirar(item) {
        this.items.push(item);
    }

    desenfileirar() {
        if (this.filaVazia()) throw new Error('Fila vazia');
        return this.items.shift();
    }

    filaVazia() {
        return this.items.length === 0;
    }
}

class Pilha {
    constructor() {
        this.items = [];
    }

    empilhar(item) {
        this.items.push(item);
    }

    desempilhar() {
        if (this.pilhaVazia()) throw new Error('Pilha vazia');
        return this.items.pop();
    }

    pilhaVazia() {
        return this.items.length === 0;
    }
}

function inverterFila(fila) {
    const pilha = new Pilha();
    const filaInvertida = new Fila();

     while (!fila.filaVazia()) {
        const item = fila.desenfileirar();
        pilha.empilhar(item);
    }

     while (!pilha.pilhaVazia()) {
        const item = pilha.desempilhar();
        filaInvertida.enfileirar(item);
    }

    return filaInvertida;
}

 const filaOriginal = new Fila();
filaOriginal.enfileirar(3);
filaOriginal.enfileirar(4);
filaOriginal.enfileirar(5);

const filaNova = inverterFila(filaOriginal);

while (!filaNova.filaVazia()) {
    console.log(filaNova.desenfileirar());  
}

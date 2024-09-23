class ListaLigada
 {
    constructor() {
        this.count = 0  // {2}
        this.head = undefined  // {3}
    }

    equalsFn(a,b){ // Compara dois elementos fornecidos como parâmetro.
        return a===b 
    }

    push(element){ // Insere um elemento no final da lista ligada.
        // Temos duas possibilidades aqui: Ou a lista está vazia, ou possui pelo menos
        // um elemento. Se estiver vazia, temos que armazenar o endereço deste primeiro
        // elemento, no atributo "head" do objeto ListaLigada
        
        // A nossa lista é uma lista ligada de Nodes, cada Node apontando para o próximo,
        // até o último, que não aponta pra ninguém (null, undefined). Dentro dos objetos 
        // Node é que vamos armazenar o valor de nosso ítem.
    
        // A primeira coisa que devemos fazer, é instanciar um novo objeto do tipo Node, 
        // para guardar o "element" passado como argumento. Em seguida, basta ligar este
        // novo node no fim da lista, ou inseri-lo sozinho no início, caso a fila esteja
        // vazia. Neste caso, armazenamos o seu endereço no atributo "head" do objeto 
        // ListaLigada, para encabeçar a lista como primeiro elemento.
        // Caso a lista já tenha pelo menos um elemento, então adicionaremos o novo node
        // no fim da lista. Seu antecessor apontará para ele e ele apontará para o vazio.

        const node = new Node(element) 
        // Variável auxiliar do tipo Node, para percorrer toda a fila, Node após Node.
        let current  
        if(this.head == null) { // Significa que a lista está vazia, ainda não tem um "head".
            this.head = node  // Então, o nosso novo node vai encabeçar a lista vazia.
        }
        else{ // A nossa lista não está vazia, inserimos o novo Node no final.
            current = this.head  // Começamos do início e percorremos a lista até o fim.
            while(current.next != null) { // Procurando o último elemento, aponta para "null".
                current = current.next  // Anda uma posição adiante.
            }
            current.next = node  // Põe o novo node no fim da lista.    
        }
        // Após adicionar um novo node com sucesso, atualizamos o contador, que indica o tamanho da lista.
        this.count++  
    }

    insert(element,index){ // Insere um elemento em uma posição específica.
        if(index >= 0 && index <= this.count){
            const node = new Node(element) 
            if(index === 0){ // Pediu para inserir na primeira posição. 
                const current = this.head 
                node.next = current 
                this.head = node 
            }
            else{
                const previous = this.getElementAt(index-1) 
                const current = previous.next 
                node.next = current 
                previous.next = node 
            }
            this.count++ 
            return true 
        }
        return false 
    }

    // Retorna o elemento que estiver na posição especificada. Se não houver
    // elemento nesta posição, retorna "undefined" 
    getElementAt(index){ 
        if(index >= 0 && index <= this.count){
            let node = this.head 
            for(let i=0;  i<index && node != null ; i++){
                node = node.next 
            }
            return node 
        }
        return undefined 
    }

    remove(element){ // Remove o elemento especificado, da lista ligada.
        const index = this.indexOf(element) 
        return this.removeAt(index) 
    }

    // Devolve a posição (índice) do elemento na lista.
    // Devolve -1 caso o elemento não seja encontrado.
    indexOf(element){
        let current = this.head 
        for (let i = 0 ; i < this.count && current != null;  i++){
            if(this.equalsFn(element,current.element)){
                return i 
            }
            current = current.next 
        } 
        return -1 
    }

    // Remove um ítem da lista, na posição especificada.
    removeAt(index){ // index: posição do elemento a ser removido da lista.
        // Verifica valores fora do intervalo: O parâmetro passado é valido?
        if (index >= 0 && index < this.count) {
            let current = this.head  
            if(index === 0) { // Pedindo para remover o primeiro elemento.
                // sobrescreve o valor de head com o segundo elemento
                this.head = current.next  
            }
            else {
                let previous 
                // Precisamos nos posicionar em "index", afim de removê-lo.
                for(let i = 0;  i < index ; i++){ 
                   previous = current  // Salva a posição corrente.
                   current = current.next  // Anda uma posição à frente. 
                }
                // Faz a conexão com o próximo elemento depois de "current".
                // Em vez de apontar para "current", aponta para o proximo  
                // depois dele, ignorando-o. Nesto ponto current = index.
                // Então, estamos removendo a posição apontada por "index".
                previous.next = current.next  // Aqui o apontador pula um.
            }
            // O elemento foi eliminado, agora precisamos decrementar count.
            // Retornamos o elemento eliminado, caso queiram salvar.
            this.count-- 
            return current.element 
        }
        // Não passou no teste de verificação de index, não faz nada, falhou!
        return undefined 
    }

    // Retorna true se a lista estiver vazia e false caso contrário.
    isEmpty(){
        return this.size() === 0 
    }

    // Retorna o número de elementos da lista.
    size(){
        return this.count 
    }

    getHead(){
        return this.head 
    }

    // Este método devolve a representação em String da lista ligada. 
    // Como a lista usa Node como elemento, devemos sobrescrever o
    // método toString() default, herdado da classe object de JavaScript,
    // a fim de exibir somente os valores dos elementos da lista ligada. 
    toString(){
        if(this.head == null){
            return '' 
        }
        let objString = `${this.head.element}` 
        let current = this.head.next 
        for(let i = 1 ; i < this.size() && current != null ; i++){
            objString = `${objString},${current.element}` 
            current = current.next 
        }
        return objString 
    }
}

class Node {
    constructor(element){
        this.element = element 
        this.next = undefined 
    }
}


// Testando as classes ListaLigada e Node:

lista = new ListaLigada() 
lista.push("Argemiro")
console.log(lista.count)
console.log(lista.head)
lista.push("Amelia")
console.log(lista.count)
console.log(lista.head)
lista.push("Coragem")
console.log(lista.count)
console.log(lista.head)
lista.removeAt(10)
console.log(lista.removeAt())
console.log(lista.count)
console.log(lista.head)
// // Testando inserção de elementos:
// lista.push("Argemiro") 
// lista.push("Jesus Carlos") 
// console.log("lista.count: "+lista.count)  // 2
// console.log("lista.head.element: "+lista.head)  // Argemiro

// // Testando remoção de elementos: removeAt().
// let resultado 
// resultado = lista.removeAt(100) // Vai falhar. Não temos 100 elementos!
// // removeAt() sempre retorna o valor eliminado ou "undefined" em caso de falha.
// // Portanto, é sempre bom testar o resultado, se deu certo ou não.
// console.log("resultado: "+resultado)   // undefined
// resultado = lista.removeAt(1) 
// console.log("resultado: "+resultado) 

// // Testando getElementAtIndex()
// lista.push("Ana Maria") 
// lista.push("Vanessa") 
// console.log("lista.count: "+lista.count) 
// resultado = lista.getElementAt(0) 
// console.log("resultado: "+resultado.element) 
// resultado = lista.getElementAt(1) 
// console.log("resultado: "+resultado.element) 
// resultado = lista.getElementAt(2) 
// console.log("resultado: "+resultado.element) 

// // Testando o método insert(element,index)
// resultado = lista.insert("Patrícia",2) 
// console.log("resultado: "+resultado) 

// // Testando o método indexOf(element)
// resultado = lista.indexOf("Ana Maria") 
// console.log("resultado: "+resultado) 
// resultado = lista.indexOf("Vanessa") 
// console.log("resultado: "+resultado) 
// resultado = lista.indexOf("Belarmino") 
// console.log("resultado: "+resultado) 

// // Testando o método remove(element)
// resultado = lista.remove("Belarmino") 
// console.log("resultado: "+resultado) 

// resultado = lista.remove("Argemiro") 
// console.log("resultado: "+resultado) 

// // Testando o método toString()
// lista.push("Belarmino") 
// lista.push("André") 
// lista.push("Everton") 
// console.log(lista.toString()) 






function decimaBinario(decNumber) {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binarioString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!remStack.isEmpty()) {
        binarioString += remStack.pop().toString();

    }
retun binarioString;
}
console.log(decimaBinario(233));

let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(`A - ${numbers}`)

numbers[numbers.lengh] = 10;
console.log(`B - ${numbers}`)

numbers.push(10);
console.log(`C - ${numbers}`)

numbers.push(11,12,13);
console.log(`D - ${numbers}`)
console.log(`Tamanho - ${numbers.length}\n`)

numbers.unshift(-1);
console.log(`E - ${numbers}`)
console.log(`Tamanho - ${numbers.length}\n`)

numbers.unshift(-4,-3,-2);
console.log(`F - ${numbers}`)
console.log(`Tamanho - ${numbers.length}\n`)

numbers.pop();
console.log(`G - ${numbers}`)
console.log(`Tamanho - ${numbers.length} \n`)

numbers.shift();
console.log(`H - ${numbers}`)
console.log(`Tamanho - ${numbers.length}`)


numbers.splice(2, 5, 1);
console.log(`I - ${numbers}`)
console.log(`Tamanho - ${numbers.length}`)
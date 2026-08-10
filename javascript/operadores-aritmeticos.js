// Operadores Aritméticos

// Adição
let a = 10;
let b = 5;
let soma = a + b; // 15

// Subtração
let subtracao = a - b; // 5

// Multiplicação
let multiplicacao = a * b; // 50

// Divisão
let divisao = a / b; // 2

// Módulo (resto da divisão)
let modulo = a % b; // 0

// Exponenciação
let exponenciacao = a ** b; // 100000

// Incremento
let incremento = a++; // 10 (a é incrementado para 11 após esta linha)

// Decremento
let decremento = b--; // 5 (b é decrementado para 4 após esta linha)

// Exibindo os resultados
console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
console.log("Divisão: " + divisao);
console.log("Módulo: " + modulo);
console.log("Exponenciação: " + exponenciacao);
console.log("Incremento: " + incremento);
console.log("Decremento: " + decremento);

// contas complexas
let resultadoComplexo = (a + b) * (a - b) / (a % b + 1); // Evita divisão por zero
console.log("Resultado Complexo: " + resultadoComplexo);
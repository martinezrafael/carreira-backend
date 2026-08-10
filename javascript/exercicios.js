// Exercicios de JavaScript

// 1. Boas vindas personalizada
let nome = 'Rafael Molina Martinez'

console.log("Olá, " + nome + "! Seja bem-vindo(a) ao mundo do JavaScript.");

// 2. Cálculo de idade
let anoAtual = 2026;
let anoNascimento = 1991;
let idade = anoAtual - anoNascimento;
console.log("Você tem " + idade + " anos.");

// 3. Mensagem de localização
let cidade = 'Peruíbe';
let estado = 'São Paulo';
let pais = 'Brasil';
console.log("Você está localizado(a) em " + cidade + ", " + estado + ", " + pais + ".");

// 4. Tipo da variável
let temCarteira = true;
console.log("O tipo da variável 'temCarteira' é: " + typeof temCarteira);

// 5. Simulação bancária simples
let saldo = 0;
let deposito = 200;
let saque = 50;
let saldoFinal = saldo + deposito - saque;
console.log("O saldo final da conta é: " + saldoFinal);

// 6. Média de notas
let matematica = 8.5;
let portugues = 7.0;
let ciencias = 9.0;
let media = (matematica + portugues + ciencias) / 3;
console.log("A média das notas é: " + media.toFixed(2));

// 7. Reajuste de salario
let salario = 3000;
let percentualReajuste = 10;
console.log("O novo salário após o reajuste de " + percentualReajuste + "% é: " + (salario * (1 + percentualReajuste / 100)).toFixed(2));


// 8. Contador de cliques
let cliques = 0;
console.log("Total de cliques: " + cliques);

cliques = 1;
console.log("Total de cliques: " + cliques);

cliques = 2;
console.log("Total de cliques: " + cliques);

cliques = 3;
console.log("Total de cliques: " + cliques);

// 9. Constantes não podem ser alteradas
const PI = 3.14159;
console.log("O valor de PI é: " + PI); 

//PI = 8; // Isso vai gerar um erro, pois constantes não podem ser alteradas

/*O valor de PI é: 3.14159
/home/martinezrafael/dev/study/alura/carreira-backend-nodejs/code/carreira-backend/javascript/exercicios.js:52
PI = 8; // Isso vai gerar um erro, pois constantes não podem ser alteradas
   ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/martinezrafael/dev/study/alura/carreira-backend-nodejs/code/carreira-backend/javascript/exercicios.js:52:4)
    at Module._compile (node:internal/modules/cjs/loader:1872:14)
    at Object..js (node:internal/modules/cjs/loader:2003:10)
    at Module.load (node:internal/modules/cjs/loader:1594:32)
    at Module._load (node:internal/modules/cjs/loader:1396:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v24.19.0*/

// 10. Concatenando tipos diferentes

let mensagem = "Cite um número: ";
let numero = 42;

const mensagemFinal = mensagem + numero; // Isso vai concatenar a string com o número, resultando em "Cite um número: 42"

console.log(mensagemFinal); // Isso vai imprimir "Cite um número: 42"

console.log(typeof mensagemFinal); // Isso vai imprimir "string"
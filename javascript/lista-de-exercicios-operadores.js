// Lista de exercícios sobre operadores em JavaScript]

// O objetivo aqui é aplicar operadores aritméticos, lógicos e de comparação em situações práticas, como simulações de sistemas simples e validação de dados. Vamos lá!

// 1. Verificação de maioridade
let idade = 35;

let maioridade = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(maioridade); // Saída: Maior de idade

// 2. Situação do aluno

let nota1 = 1.5;
let nota2 = 4.0;
let media = (nota1 + nota2) / 2;

let situacaoAluno = media >= 7 ? "Aprovado" : "Reprovado";
console.log(situacaoAluno); // Saída: Reprovado

// 3. Simulação de troco
let valorCompra = 35.90;
let valorPago = 50.00;
let troco = valorPago - valorCompra;

console.log(`Troco: R$ ${troco.toFixed(2)}`); // Saída: Troco: R$ 14.10

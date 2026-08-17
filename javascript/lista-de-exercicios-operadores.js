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

// 4. Validação de senha
const senhaCorreta = "123456";
let senhaDigitada = "123456";

let acesso = senhaDigitada === senhaCorreta ? "Acesso permitido" : "Acesso negado";
console.log(acesso); // Saída: Acesso permitido


// 5. Controle de faltas
let totalAulas = 20;
let faltas = 5;

let percentualFaltas = (faltas / totalAulas) * 100;
let statusFrequencia = percentualFaltas > 25 ? "Reprovado por faltas" : "Aprovado por frequência";
console.log(statusFrequencia); // Saída: Aprovado por frequência

// 6. Verificação de Login
let temLogin = true;
let temSenha = false;

let podeAcessar = temLogin && temSenha ? "Acesso permitido" : "Acesso negado";
console.log(podeAcessar); // Saída: Acesso negado

// 7. Valor negado
let disponivel = true;
let valorNegado = !disponivel ? "Valor negado" : "Valor disponível";
console.log(valorNegado); // Saída: Valor disponível

// 8. Condições compostas

const numeroUm = 5;
const numeroDois = 20;

const ePar = numeroUm % 2 === 0;
const eParDois = numeroDois % 2 === 0;

const resultado = ePar && eParDois ? "Ambos são pares" : "Pelo menos um não é par";
console.log(resultado); // Saída: Ambos são pares

// 9. Calculadora de porcentagem
let valorTotal = 120;
let porcentagem = 15;
let valorDesconto = (valorTotal * porcentagem) / 100;
let valorPorcentagemFinal = valorTotal - valorDesconto;
console.log(`Valor final após desconto: R$ ${valorPorcentagemFinal.toFixed(2)}`); // Saída: Valor final após desconto: R$ 102.00
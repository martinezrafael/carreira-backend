// Tipos de variaveis em JavaScript

// typeof é um operador que retorna uma string indicando o tipo do operando.

// Tipos primitivos
let nome = "João"; // string
let idade = 30; // number
let isEstudante = true; // boolean
let altura; // undefined
let corFavorita = null; // null

console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof isEstudante); // "boolean"
console.log(typeof altura); // "undefined"
console.log(typeof corFavorita); // "object" (null é considerado um objeto em JavaScript)

// Tipos de referência
let pessoa = { nome: "Maria", idade: 25 }; // object
let frutas = ["maçã", "banana", "laranja"]; // array (também é um objeto)
let dataNascimento = new Date(); // object

console.log(typeof pessoa); // "object"
console.log(typeof frutas); // "object"
console.log(typeof dataNascimento); // "object"

let simbolo = Symbol("id"); // symbol
console.log(typeof simbolo); // "symbol"

// Symbol é um tipo de dado primitivo introduzido no ECMAScript 2015 (ES6) que é usado para criar identificadores únicos para propriedades de objetos. Cada vez que você cria um novo Symbol, ele é garantido ser único, mesmo que tenha a mesma descrição.
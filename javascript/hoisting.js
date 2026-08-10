// hoisting javascript

// Variavel global não pode ser referenciada antes de ser declarada
// var pode
// let e const não podem

//console.log('Minha idade é', idade2); // isso aqui vai dar erro, pois a variavel idade2 não foi declarada antes

console.log('Minha idade é', idade); // isso aqui vai retornar undefined, pois a variavel idade foi declarada depois
var idade = 20;

console.log('Minha idade é', idade); // isso aqui vai retornar 20, pois a variavel idade foi declarada antes

// console.log('Minha idade é', idade2); // isso aqui vai dar erro, pois a variavel idade2 não foi declarada antes
let idade2 = 30;

console.log('Minha idade é', idade2); // isso aqui vai retornar 30, pois a variavel idade2 foi declarada antes

// console.log('Minha idade é', idade3); // isso aqui vai dar erro, pois a variavel idade3 não foi declarada antes
const idade3 = 40;

console.log('Minha idade é', idade3); // isso aqui vai retornar 40, pois a variavel idade3 foi declarada antes

// Temporal dead zone (TDZ) é o período entre o início do bloco e a declaração da variável, onde a variável não pode ser acessada. Isso se aplica a variáveis declaradas com let e const.

// Melhores praticas de programação recomendam declarar variáveis no início do bloco de código para evitar problemas com hoisting e TDZ.
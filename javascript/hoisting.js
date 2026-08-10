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
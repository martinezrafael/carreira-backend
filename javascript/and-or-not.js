// Entendento AND, OR e NOT em JavaScript

// Operador AND (&&)
// O operador AND retorna true se todas as expressões forem verdadeiras
const idade = 25;
const possuiCarteiraDeMotorista = true;

if (idade >= 18 && possuiCarteiraDeMotorista) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
}

// Operador OR (||)
// O operador OR retorna true se pelo menos uma das expressões for verdadeira
const temDinheiro = false;
const temCartaoDeCredito = true;

if (temDinheiro || temCartaoDeCredito) {
    console.log("Você pode fazer a compra.");
} else {
    console.log("Você não pode fazer a compra.");
}

// Operador NOT (!)
// O operador NOT inverte o valor booleano de uma expressão
const estaChovendo = false;

if (!estaChovendo) {
    console.log("Você pode sair para passear.");
} else {
    console.log("Melhor ficar em casa.");
} 
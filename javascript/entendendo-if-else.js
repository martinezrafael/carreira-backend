// Entendendo o if/else

const idade = 18;

if (idade >= 18){
    console.log("É maior de idade!");
} else {
    console.log("É menor de idade.")
}

// entre 9 e 10: Execelente
// entre 7 e 8: Boa
// entre 4 e 6: Média
// Entre 0 e 3: ruim

const notaDoAluno = 5; // Média

if (notaDoAluno >= 9){
    console.log("Sua nota é excelente!")
} else if (notaDoAluno >= 7){
    console.log("Sua nota é boa!")
} else if(notaDoAluno >= 4){
    console.log("Sua nota é média")
} else {
    console.log("Sua nota é ruim.")
}
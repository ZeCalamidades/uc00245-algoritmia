// Exercício 7
console.log('Exercício 7: Compare dois números e diga se são iguais.');

let num1: number = 10;
let num2: number = 20;
console.log(num1 === num2 ? "Os números são iguais." : "Os números são diferentes.");

// Exercício 8
console.log('Exercício 8: Compare se um número é maior que o outro.');

num1 = 15;
num2 = 12;
console.log(num1 > num2 ? `${num1} é maior que ${num2}.` : `${num1} não é maior que ${num2}.`);

// Exercício 9
console.log('Exercício 9: Compare se dois textos são diferentes.');

let texto1: string = "Olá";
let texto2: string = "Tchau";
console.log(texto1 !== texto2 ? "Os textos são diferentes." : "Os textos são iguais.");


// Exercício 10

console.log('Exercício 10: Verifique se uma pessoa pode dirigir (temIdade && temCarta).');

let temIdade: boolean = true;
let temCarta: boolean = false;
console.log(temIdade && temCarta ? "Pode dirigir." : "Não pode dirigir.");

//Exercício 11
console.log('Exercício 11: Verifique se o acesso é permitido (logado || admin).');

let logado: boolean = false;
let admin: boolean = true;
console.log(logado || admin ? "Acesso permitido." : "Acesso negado.");

//Exercício 12
console.log('Exercício 12: Inverta o valor de uma variável booleana.');

let ativo: boolean = true;
ativo = !ativo;
console.log("Novo valor de ativo:", ativo);

//
//-------------------------------------------------------------------------------
//

// //O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. 
// //Utilize, no mínimo, um operador de atribuição e um operador ternário. 
 
const readline = require('readline-sync');

let nota1 = parseFloat(readline.question("Digite a primeira nota: "));
let nota2 = parseFloat(readline.question("Digite a segunda nota: "));
let nota3 = parseFloat(readline.question("Digite a terceira nota: "));


let media = (nota1 + nota2 + nota3) / 3;

let resultado = media >= 7 ? "Aprovado" : "Reprovado";

console.log(`O aluno está ${resultado} com média ${media.toFixed(2)}`);


//O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.
const readline = require('readline-sync');

let nota1 = parseFloat(readline.question("Digite a primeira nota: "));
let nota2 = parseFloat(readline.question("Digite a segunda nota: "));

let mediaAtual = (nota1 + nota2) / 2;

let notaMinima = 2 * 7 - mediaAtual;
console.log(`Para passar com média 7, você precisa tirar: ${notaMinima.toFixed(2)} na próxima prova.`);



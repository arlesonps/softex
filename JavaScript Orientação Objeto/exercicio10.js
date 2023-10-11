const readline = require('readline-sync');

try {
  const numero1 = parseFloat(readline.question("Digite o primeiro número: "));
  const numero2 = parseFloat(readline.question("Digite o segundo número: "));

  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Pelo menos um dos valores não é um número válido.");
  }

  const resultado = numero1 / numero2;
  if (!isFinite(resultado)) {
    throw new Error("Divisão por zero é indefinida.");
  }

  console.log(`O resultado da divisão é: ${resultado}`);
} catch (error) {
  console.error(`Ocorreu um erro: ${error.message}`);
} finally {
  console.log("A operação foi concluída.");
}

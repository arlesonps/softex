const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculadora() {
  rl.question("Digite o primeiro número: ", (num1) => {
    rl.question("Digite o segundo número: ", (num2) => {
      rl.question("Escolha a operação:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n", (operacao) => {
        num1 = Number(num1);
        num2 = Number(num2);
        operacao = Number(operacao);

        if (operacao === 1) { // Soma
          console.log("Resultado:", num1 + num2);
        } else if (operacao === 2) { // Subtração
          console.log("Resultado:", num1 - num2);
        } else if (operacao === 3) { // Multiplicação
          console.log("Resultado:", num1 * num2);
        } else if (operacao === 4) { // Divisão
          if (num2 !== 0) {
            console.log("Resultado:", num1 / num2);
          } else {
            console.log("Resultado: 0 (Divisão por zero não é permitida)");
          }
        } else {
          console.log("Operação inválida. Resultado: 0");
        }

        rl.close();
      });
    });
  });
}

calculadora();
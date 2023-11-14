const readlineSync =  require('readline-sync');

// Interface Strategy
class OperationStrategy {
    execute(num1, num2) {}
  }
  
  // Classes concretas que implementam a Strategy
  class AdditionStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 + num2;
    }
  }
  
  class SubtractionStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 - num2;
    }
  }
  
  class MultiplicationStrategy extends OperationStrategy {
    execute(num1, num2) {
      return num1 * num2;
    }
  }
  
  // Contexto que utiliza a Strategy
  class Calculator {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    calculate(num1, num2) {
      return this.strategy.execute(num1, num2);
    }
  }
  
  // Exemplo de uso
  const num1 = parseInt(readlineSync.question("Digite o primeiro número:"));
  const num2 = parseInt(readlineSync.question("Digite o segundo número:"));
  const operation = readlineSync.question("Digite a operação (+, -, *):");
  
  let strategy;
  
  switch (operation) {
    case '+':
      strategy = new AdditionStrategy();
      break;
    case '-':
      strategy = new SubtractionStrategy();
      break;
    case '*':
      strategy = new MultiplicationStrategy();
      break;
    default:
      console.log("Operação inválida");
      break;
  }
  
  if (strategy) {
    const calculator = new Calculator(strategy);
    const result = calculator.calculate(num1, num2);
    console.log(`Resultado da operação: ${result}`);
  }
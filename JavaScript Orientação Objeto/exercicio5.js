const readline = require('readline-sync');
 function calcular(valor1, valor2, operador){
    let resultado;
    let sobra;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':    
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
            case '/':
                if (valor2 !== 0) {
                    resultado = Math.floor(valor1 / valor2);
                    sobra = valor1 % valor2;
                } else {
                    return "Erro: Divisão por zero!";
                }
                break;
            default:
                return "Operador inválido!";
        }
    
        if (sobra !== undefined) {
            return `Resultado: ${resultado}, Sobrou: ${sobra}`;
        } else {
            return `Resultado: ${resultado}`;
        }
    }
    
    const valor1 = parseFloat(readline.question("Digite o primeiro valor: "));
    const valor2 = parseFloat(readline.question("Digite o segundo valor: "));
    const operador = readline.question("Digite o operador (+, -, *, /): ");
    
    const resultado = calcular(valor1, valor2, operador);
    console.log(resultado);
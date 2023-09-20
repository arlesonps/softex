// Função tradicional sem parâmetros
function saudacao() {
    console.log("Olá Pessoal, seja bem-vindo!");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function soma(a, b) {
    return a + b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const multiplicacao = (a, b) => a * b;
  
  // Chamando as funções
  saudacao(); // Chamada da função sem parâmetros
  const resultadoSoma = soma(5, 3); // Chamada da função com parâmetros
  const resultadoMultiplicacao = multiplicacao(4, 2); // Chamada da arrow function
  
  // Exibindo os resultados
  console.log("Resultado da soma: " + resultadoSoma);
  console.log("Resultado da multiplicação: " + resultadoMultiplicacao);
  
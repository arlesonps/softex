// // Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

// // Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

// // Codifique a solução mais eficiente para buscar o número 20 no array.

// a busca binaria é mais efeciente nesse caso!

function buscaBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;
  
    while (esquerda <= direita) {
      const meio = Math.floor((esquerda + direita) / 2);
      const valorMeio = array[meio];
  
      if (valorMeio === alvo) {
        return meio; // Retorna o índice onde o valor foi encontrado
      } else if (valorMeio < alvo) {
        esquerda = meio + 1; // Vai para a metade direita
      } else {
        direita = meio - 1; // Vai para a metade esquerda
      }
    }
  
    return -1; // Retorna -1 se o valor não for encontrado
  }
  
  const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
  const valorProcurado = 20;
  
  const indiceEncontrado = buscaBinaria(array, valorProcurado);
  
  if (indiceEncontrado !== -1) {
    console.log(`O valor ${valorProcurado} foi encontrado no índice ${indiceEncontrado}.`);
  } else {
    console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
  }
  
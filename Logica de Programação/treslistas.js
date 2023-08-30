// Criando as listas
const nomes = ["Alice", "Bob", "Carol", "David", "Eva", "Fernando", "Gabriela", "Hugo", "Isabela", "João"];
const idades = [25, 30, 22, 27, 29, 35, 18, 40, 33, 28];
const coresFavoritas = ["azul", "verde", "amarelo", "rosa", "roxo", "laranja", "preto", "vermelho", "branco", "marrom"];

// Imprimindo as listas originais
console.log("Lista de nomes:", nomes);
console.log("Lista de idades:", idades);
console.log("Lista de cores favoritas:", coresFavoritas);

// Modificando uma cor e uma idade
idades[1] = 31; // Modificando a idade da segunda pessoa (Bob) para 31 anos
coresFavoritas[3] = "azul-marinho"; // Modificando a cor favorita da quarta pessoa (David) para "azul-marinho"

// Imprimindo as listas modificadas
console.log("\nListas após as modificações:");
console.log("Lista de nomes:", nomes);
console.log("Lista de idades:", idades);
console.log("Lista de cores favoritas:", coresFavoritas);

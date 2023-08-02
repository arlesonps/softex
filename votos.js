const readline = require('readline');

let candidato_X = 889;
let candidato_Y = 847;
let candidato_Z = 515;
let branco = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function votar() {
  rl.question("Digite o número do candidato (1 - Candidato X, 2 - Candidato Y, 3 - Candidato Z, 0 - Branco, ou qualquer outro número para sair):", (voto) => {
    voto = parseInt(voto);

    if (isNaN(voto)) {
      console.log("Voto inválido. Por favor, insira um número válido.");
      votar();
    } else {
      switch (voto) {
        case 1:
          candidato_X++;
          break;
        case 2:
          candidato_Y++;
          break;
        case 3:
          candidato_Z++;
          break;
        case 0:
          branco++;
          break;
        default:
          console.log("Voto nulo.");
      }
      finalizarVotacao();
    }
  });
}

function finalizarVotacao() {
  rl.question("Deseja finalizar a votação? (S/N)", (finalizar) => {
    finalizar = finalizar.toUpperCase();
    if (finalizar === "S") {
      rl.close();
      mostrarResultado();
    } else if (finalizar === "N") {
      votar();
    } else {
      console.log("Opção inválida. Digite 'S' para finalizar ou 'N' para continuar votando.");
      finalizarVotacao();
    }
  });
}

function mostrarResultado() {
  console.log("Resultado da eleição:");
  console.log(`Candidato X: ${candidato_X} votos`);
  console.log(`Candidato Y: ${candidato_Y} votos`);
  console.log(`Candidato Z: ${candidato_Z} votos`);
  console.log(`Votos em branco: ${branco} votos`);

  const totalVotos = candidato_X + candidato_Y + candidato_Z + branco;
  const votosNulos = totalVotos - candidato_X - candidato_Y - candidato_Z - branco;

  console.log(`Total de votos válidos: ${totalVotos}`);
  console.log(`Votos nulos: ${votosNulos} votos`);

  let vencedor = "";
  let maiorVotos = Math.max(candidato_X, candidato_Y, candidato_Z);

  if (maiorVotos === candidato_X) {
    vencedor = "Candidato X";
  } else if (maiorVotos === candidato_Y) {
    vencedor = "Candidato Y";
  } else {
    vencedor = "Candidato Z";
  }

  console.log(`Vencedor: ${vencedor}`);
}

votar();

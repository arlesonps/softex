const readline = require('readline');

function obterIdadeDoUsuario() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Digite o seu nome completo: ', (nomeCompleto) => {
    let anoNascimento = NaN;

    // Loop para validar o ano de nascimento
    const validarAnoNascimento = () => {
      rl.question('Digite o seu ano de nascimento (entre 1922 e 2021): ', (anoDigitado) => {
        anoNascimento = parseInt(anoDigitado);
        
        if (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
          console.log('Ano de nascimento inválido. Tente novamente.');
          validarAnoNascimento();
        } else {
          rl.close();

          // Obtém o ano atual
          const anoAtual = new Date().getFullYear();

          // Calcula a idade do usuário
          const idade = anoAtual - anoNascimento;

          // Exibe o nome e a idade do usuário
          console.log(`Olá, ${nomeCompleto}! Você completou ou completará ${idade} anos em ${anoAtual}.`);
        }
      });
    };

    validarAnoNascimento();
  });
}

obterIdadeDoUsuario();

  
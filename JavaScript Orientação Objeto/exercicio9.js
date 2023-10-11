// Definindo o objeto Carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    ligado: false,
    ligar: function() {
      this.ligado = true;
      console.log("O carro está ligado.");
    },
    desligar: function() {
      this.ligado = false;
      console.log("O carro está desligado.");
    },
    acelerar: function() {
      if (this.ligado) {
        console.log("Acelerando o carro...");
      } else {
        console.log("O carro precisa estar ligado para acelerar.");
      }
    }
  };
  
  // Definindo o objeto Livro
  const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    numPaginas: 1000,
    aberto: false,
    abrir: function() {
      this.aberto = true;
      console.log("O livro está aberto.");
    },
    fechar: function() {
      this.aberto = false;
      console.log("O livro está fechado.");
    },
    virarPagina: function() {
      if (this.aberto) {
        console.log("Virando a página do livro...");
      } else {
        console.log("O livro precisa estar aberto para virar a página.");
      }
    }
  };
  
  // Definindo o objeto Conta Bancária
  const contaBancaria = {
    saldo: 1000,
    numeroConta: "12345",
    nomeTitular: "João",
    depositar: function(valor) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    },
    sacar: function(valor) {
      if (this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente para o saque.");
      }
    },
    verificarSaldo: function() {
      console.log(`Saldo da conta de ${this.nomeTitular}: R$${this.saldo}`);
    }
  };
  
  // Definindo o objeto Redes Sociais
  const redeSocial = {
    nome: "Facebook",
    numUsuarios: 2500000000,
    recursos: ["Publicar Post", "Enviar Mensagens", "Curtir Posts"],
    publicarPost: function() {
      console.log("Publicando um post no Facebook.");
    },
    seguirUsuario: function(usuario) {
      console.log(`Seguindo o usuário ${usuario} no Facebook.`);
    },
    fazerLogin: function() {
      console.log("Realizando login no Facebook...");
    }
  };
  
//Crie uma lista encadeada em que cada elemento representa uma pessoa.
//Ela precisa conter informações como nome, idade e referência ao filho dela.

 // esse é um exemplo de como você pode criar uma lista encadeada em JavaScript, onde cada elemento representa uma pessoa com informações como nome, 
 // idade e uma referência ao filho dela:

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.filho = null;
    }
  }
  
  class ListaEncadeada {
    constructor() {
      this.head = null;
    }
  
    adicionarPessoa(nome, idade) {
      const novaPessoa = new Pessoa(nome, idade);
  
      if (!this.head) {
        this.head = novaPessoa;
      } else {
        let current = this.head;
        while (current.filho) {
          current = current.filho;
        }
        current.filho = novaPessoa;
      }
    }
  
    exibirPessoas() {
      let current = this.head;
      while (current) {
        console.log(`Nome: ${current.nome}, Idade: ${current.idade}`);
        current = current.filho;
      }
    }
  }
  
  // Criar uma lista encadeada e adicionar pessoas
  const lista = new ListaEncadeada();
  lista.adicionarPessoa("Alice", 30);
  lista.adicionarPessoa("Bob", 25);
  lista.adicionarPessoa("Carol", 40);
  
  // Exibir as informações das pessoas na lista
  lista.exibirPessoas();
  

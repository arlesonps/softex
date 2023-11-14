const readlineSync = require('readline-sync');

// Classe Observer
class Observer {
  update() {}
}

// Classe Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}

// Classe Editor (Subject)
class Editor extends Subject {
  open() {
    console.log("Editor aberto");
    this.notify();
  }
}

// Subclasse TextEditor
class TextEditor extends Editor {
  constructor() {
    super();
    this.lines = [];
  }

  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text);
  }

  removeLine(lineNumber) {
    this.lines.splice(lineNumber, 1);
  }

  saveToFile() {
    console.log("Conteúdo salvo no arquivo");
  }

  displayContent() {
    console.log("Conteúdo do arquivo:");
    this.lines.forEach(line => console.log(line));
  }
}

// Exemplo de uso
const textEditor = new TextEditor();

// Adiciona Observer ao TextEditor
textEditor.addObserver({
  update() {
    console.log("Evento 'open' detectado");
  }
});

textEditor.open();

// Recebe linhas de texto do usuário
let lineNumber = 0;
let userInput;
while ((userInput = readlineSync.question("Digite uma linha de texto (ou 'EOF' para finalizar):")) !== 'EOF') {
  textEditor.insertLine(lineNumber++, userInput);
}

// Remove o último incremento de lineNumber
lineNumber--;

// Remove Observer para não receber notificações desnecessárias
textEditor.removeObserver(textEditor.observers[0]);

// Salva e exibe o conteúdo
textEditor.saveToFile();
textEditor.displayContent();
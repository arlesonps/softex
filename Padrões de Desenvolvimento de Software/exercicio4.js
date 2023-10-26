// Classe alvo (Target) - Galinha
class Galinha {
    cacarejar() {
        console.log("Cocoricó!");
    }
}

// Interface Adaptee - Pato
class Pato {
    grasnar() {
        console.log("Quack!");
    }
    voar() {
        console.log("Voando como um pato");
    }
}

// Adaptador
class AdaptadorPato extends Galinha {
    constructor(pato) {
        super();
        this.pato = pato;
    }

    cacarejar() {
        this.pato.grasnar();
    }
}

// Demonstração
const pato = new Pato();
const adaptadorPato = new AdaptadorPato(pato);

console.log("Pato:");
pato.grasnar();
pato.voar();

console.log("\nGalinha (usando o adaptador):");
adaptadorPato.cacarejar();

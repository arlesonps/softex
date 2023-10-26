// Interface Component
class Sanduiche {
    getDescription() {
        return "Sanduíche de Frango Assado";
    }

    getCost() {
        return 4.50;
    }
}

// Concrete Decorator
class IngredientDecorator extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }

    getDescription() {
        return this.sanduiche.getDescription();
    }

    getCost() {
        return this.sanduiche.getCost();
    }
}

// Concrete Decorator
class Pepperoni extends IngredientDecorator {
    constructor(sanduiche) {
        super(sanduiche);
    }

    getDescription() {
        return super.getDescription() + ", Pepperoni";
    }

    getCost() {
        return super.getCost() + 0.99;
    }
}

// Concrete Decorator
class QueijoMussarelaRalado extends IngredientDecorator {
    constructor(sanduiche) {
        super(sanduiche);
    }

    getDescription() {
        return super.getDescription() + ", Queijo Mussarela Ralado";
    }

    getCost() {
        return super.getCost() + 2.00;
    }
}

// Cria e imprime o sanduíche
const sanduiche = new FrangoAssado();
const sanduicheComPepperoniEQueijo = new QueijoMussarelaRalado(new Pepperoni(sanduiche));

console.log(sanduicheComPepperoniEQueijo.getDescription() + " custa $" + sanduicheComPepperoniEQueijo.getCost());

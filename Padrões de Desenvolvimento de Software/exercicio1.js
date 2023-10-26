// Interface comum para produtos
class Computer {
    constructor(ram, hdd, cpu) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return "Computer";
    }

    toString() {
        return `Type: ${this.getType()}, RAM: ${this.getRAM()}GB, HDD: ${this.getHDD()}GB, CPU: ${this.getCPU()}GHz`;
    }
}

// Classe concreta para PC
class PC extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "PC";
    }
}

// Classe concreta para servidor
class Server extends Computer {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu);
    }

    getType() {
        return "Server";
    }
}

// Fábrica para criar instâncias de computadores
class ComputerFactory {
    static createComputer(type, ram, hdd, cpu) {
        if (type.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (type.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador desconhecido");
        }
    }
}

// Exemplo de uso
const pc = ComputerFactory.createComputer("PC", 8, 512, 3.4);
const server = ComputerFactory.createComputer("Server", 32, 1024, 2.8);

console.log(pc.toString());      // Saída: Type: PC, RAM: 8GB, HDD: 512GB, CPU: 3.4GHz
console.log(server.toString());  // Saída: Type: Server, RAM: 32GB, HDD: 1024GB, CPU: 2.8GHz

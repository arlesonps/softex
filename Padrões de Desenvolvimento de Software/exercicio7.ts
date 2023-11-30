class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhaSuperSecreta";

    private constructor() {}

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta.");
        } else {
            console.log("Acesso negado. Senha incorreta.");
        }
    }
}

// Demonstração de uso
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente tenta acessar a Base Secreta
sistemaSeguranca.acessarBaseSecreta("senhaIncorreta"); // Acesso negado
sistemaSeguranca.acessarBaseSecreta("senhaSuperSecreta"); // Acesso concedido
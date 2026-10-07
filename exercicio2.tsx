class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        // Validação no construtor sem usar 'this'
        const validarPreco = (p: number): number => {
            return p >= 0 ? p : 0;
        };

        this.nome = nome;
        this.preco = validarPreco(preco);
    }
    exibirInformacoes(): void {
        console.log(" Informações do Produtos");
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}
const produto1 = new Produto("Teclado Mecânico", 250.00);

produto1.exibirInformacoes();
console.log("Alterando Valores");
produto1.nome = "Teclado RGB";
produto1.preco = 299.90;

produto1.exibirInformacoes();
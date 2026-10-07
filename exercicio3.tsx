class Estudante {
    nome: string;
    nota1: number;
    nota2: number;

    constructor(nome: string, nota1: number, nota2: number) {
        // Validação básica sem usar 'this' nas funções auxiliares
        const validarNota = (nota: number): number => {
            if (nota < 0) return 0;
            if (nota > 10) return 10;
            return nota;
        };

        this.nome = nome;
        this.nota1 = validarNota(nota1);
        this.nota2 = validarNota(nota2);
    }

    calcularMedia(): number {
        return (this.nota1 + this.nota2) / 2;
    }
    exibirInformacoes(): void {
        const media = this.calcularMedia();
        const situacao = media >= 6 ? "Aprovado" : "Reprovado";

        console.log(`Informações do Estudante`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Nota 1: ${this.nota1.toFixed(1)}`);
        console.log(`Nota 2: ${this.nota2.toFixed(1)}`);
        console.log(`Média: ${media.toFixed(1)}`);
        console.log(`Situação: ${situacao}`);
    }
}
const estudante1 = new Estudante("Maria Silva", 8.5, 7.0);
estudante1.exibirInformacoes();
console.log("Alterando Notas");
estudante1.nota1 = 10;
estudante1.nota2 = 5;

estudante1.exibirInformacoes();
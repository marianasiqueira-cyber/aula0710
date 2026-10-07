import * as readline from 'readline-sync';
class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(nomeTitular: string, saldoInicial: number = 0) {
        this.titular = nomeTitular;
        this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`epósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        } else {
            console.log(" Valor de depósito inválido.");
        }
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            console.log(" Valor de levantamento inválido.");
        } else if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar a operação.");
        } else {
            this.saldo -= valor;
            console.log(` Levantamento de R$ ${valor.toFixed(2)} realizado com sucesso!`);
        }
    }

    exibirSaldo(): void {
        console.log(` Estado da Conta`);
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
    }
}

function executarPrograma(): void {
    console.log("SISTEMA BANCÁRIO");
    const nomeTitular = readline.question("Digite o nome do titular da conta: ");
    const saldoInicial = readline.questionFloat("Digite o saldo inicial: ");

    const conta = new ContaBancaria(nomeTitular, saldoInicial);

    let opcao: number;

    do {
        console.log(" MENU DE OPÇÕES");
        console.log("1. Consultar Saldo");
        console.log("2. Depositar");
        console.log("3. Sacar");
        console.log("0. Sair");

        opcao = readline.questionInt("Escolha uma opcao: ");

        switch (opcao) {
            case 1:
                conta.exibirSaldo();
                break;
            case 2:
                const valorDeposito = readline.questionFloat("Digite o valor para depositar: ");
                conta.depositar(valorDeposito);
                break;
            case 3:
                const valorSaque = readline.questionFloat("Digite o valor para sacar: ");
                conta.sacar(valorSaque);
                break;
            case 0:
                console.log("\nObrigado por utilizar os nossos servicos!");
                break;
            default:
                console.log(" Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

executarPrograma();
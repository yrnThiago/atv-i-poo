import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import atualizaDado from "../utils/atualizaDados";

export default class CadastroServico {
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public cadastraServico(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
<<<<<<< HEAD
        let preco = this.entrada.receberTexto(`Por favor informe o preço do serviço: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do serviço: `);
        let raca = this.entrada.receberTexto(`Por favor informe o raça do serviço: `);

        let servico = new Servico(nome, Number(preco), tipo, raca);
=======
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new Servico(nome, preco);
>>>>>>> 773ecd960783455377f20bfc344f08b7766767f9
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`)
    }

    public pegaTodosServicos(): void {
        console.log(`\nLista de todos os serviços:`);
        let cont = 1;
        this.servicos.forEach(servico => {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + servico.nome);
            console.log(`Tipo: ` + servico.tipo);
            console.log(`Raça: ` + servico.raca);
            console.log(`Qtd Vendidas: ` + servico.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        });
        console.log(`\n`);
    }

    public pegaServicosMaisVendidos(): void {
        console.log(`\nLista de todos os serviços:`);
        let servicosSorted = this.servicos.sort((n1,n2) => {
            if (n1.qtdVendidas > n2.qtdVendidas) {
                return -1;
            }
        
            if (n1.qtdVendidas < n2.qtdVendidas) {
                return 1;
            }
        
            return 0;
        });

        let cont = 1;
        for (let servico of servicosSorted) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + servico.nome);
            console.log(`Tipo: ` + servico.tipo);
            console.log(`Raça: ` + servico.raca);
            console.log(`Qtd Vendidas: ` + servico.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        };
        console.log(`\n`);
    }

    public pegaServicosMaisVendidosPorTipoRaca(tipo: string, raca: string): void {
        console.log(`\nLista de todos os serviços:`);
        let servicosSorted = this.servicos.sort((n1,n2) => {
            if (n1.qtdVendidas > n2.qtdVendidas) {
                return -1;
            }
        
            if (n1.qtdVendidas < n2.qtdVendidas) {
                return 1;
            }
        
            return 0;
        });

        let cont = 1;
        for (let servico of servicosSorted.filter(servico => servico.tipo === tipo && servico.raca === raca)) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + servico.nome);
            console.log(`Tipo: ` + servico.tipo);
            console.log(`Raça: ` + servico.raca);
            console.log(`Qtd Vendidas: ` + servico.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        };
        console.log(`\n`);
    }

    public pegaServicoPorId(servicoId: number): Servico {
        return this.servicos[servicoId-1];
    }

    public atualizaServicoPorId(servicoId: number): void {
        const servicoAnterior = this.pegaServicoPorId(servicoId);
        let nome = this.entrada.receberTexto(`Nome atual (${servicoAnterior.nome}) -> `);

        servicoAnterior.nome = atualizaDado(servicoAnterior.nome, nome);
    }

    public excluiServicoPorId(servicoId: number): void {
        const servicoDeletado = this.servicos.splice(servicoId, 1);
        if (!servicoDeletado[0]) {
            console.log(`\nServiço não encontrado! Tente novamente...\n`);
        }else{
            console.log(`Serviço Id: ${servicoId} deletado com sucesso!\n`);
        }
    }

    public servicoConsumido(servicoId: number, qtdVendida: number): Servico {
        let servicoConsumido = this.pegaServicoPorId(servicoId)
        servicoConsumido.setQtdVendidas = qtdVendida;
        
        return servicoConsumido;
    }
}
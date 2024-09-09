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
        let servico = new Servico(nome);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`)
    }

    public pegaTodosServicos(): void {
        console.log(`\nLista de todos os serviços:`);
        let cont = 1;
        this.servicos.forEach(servico => {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + servico.nome);
            console.log(`--------------------------------------`);

            cont += 1;
        });
        console.log(`\n`);
    }

    public pegaServicoPorId(servicoId: number): Servico {
        return this.servicos[servicoId];
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
}
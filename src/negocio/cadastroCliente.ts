import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import atualizaDado from "../utils/atualizaDados"

export default class CadastroCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastraCliente(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public pegaTodosClientes(): void {
        console.log(`\nLista de todos os clientes:`);
        if (this.clientes.length >= 1){
            let cont = 1;
            this.clientes.forEach(cliente => {
                console.log(`Id: ` + cont)
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                console.log(`--------------------------------------`);

                cont += 1;
            });
        } else {
            console.log("Nenhum cliente cadastrado!")
        }
        
        console.log(`\n`);
    }

    public pegaClientePorId(clienteId: number): Cliente {
        return this.clientes[clienteId-1];
    }

    public atualizaClientePorId(clienteId: number): void {
        let atualCliente = this.pegaClientePorId(clienteId);
        let nome = this.entrada.receberTexto(`Nome atual (${atualCliente.nome}) -> `);
        let nomeSocial = this.entrada.receberTexto(`Nome social atual (${atualCliente.nomeSocial}) -> `);

        atualCliente.setNome = atualizaDado(atualCliente.nome, nome);
        atualCliente.setNomeSocial = atualizaDado(atualCliente.nomeSocial, nomeSocial);
    }

    public excluiClientePorId(clienteId: number): void {
        let clienteDeletado = this.clientes.splice(clienteId, 1);
        if (!clienteDeletado[0]) {
            console.log(`\nCliente não encontrado! Tente novamente...\n`);
        }else{
            console.log(`Cliente Id: ${clienteId} deletado com sucesso!\n`);
        }
    }

}
import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import Produto from "../modelo/produto"
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
        let cont = 1;
        this.clientes.forEach(cliente => {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Valor Total Gasto R$: ` + cliente.getValorTotalGasto);
            console.log(`--------------------------------------`);

                cont += 1;
            });

            console.log(`\n`);
        }
    

    public pegaClientesQueMaisCompraramProdutos(): void {
        console.log(`\nLista de todos os clientes:`);
        let cont = 1;
        let clientesSorted = this.clientes.sort((n1,n2) => {
            if (n1.getProdutosConsumidos.length > n2.getProdutosConsumidos.length) {
                return -1;
            }
        
            if (n1.getProdutosConsumidos.length < n2.getProdutosConsumidos.length) {
                return 1;
            }
        
            return 0;
        });

        for (let cliente of clientesSorted) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Qtd de produtos comprados: ` + cliente.getProdutosConsumidos.length);
            console.log(`--------------------------------------`);

            cont += 1;

            if (cont == 10) break;
        };
        console.log(`\n`);
    }

    public pegaClientesQueMaisCompraramServicos(): void {
        console.log(`\nLista de todos os clientes:`);
        let cont = 1;
        let clientesSorted = this.clientes.sort((n1,n2) => {
            if (n1.getServicosConsumidos.length > n2.getServicosConsumidos.length) {
                return -1;
            }
        
            if (n1.getServicosConsumidos.length < n2.getServicosConsumidos.length) {
                return 1;
            }
        
            return 0;
        });

        for (let cliente of clientesSorted) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Qtd de serviços comprados: ` + cliente.getServicosConsumidos.length);
            console.log(`--------------------------------------`);

            cont += 1;

            if (cont == 10) break;
        };
        console.log(`\n`);
    }

    public pegaClientesQueMaisGastaram(): void {
        console.log(`\nLista de todos os clientes:`);
        let cont = 1;
        let clientesSorted = this.clientes.sort((n1,n2) => {
            if (n1.getValorTotalGasto > n2.getValorTotalGasto) {
                return -1;
            }
        
            if (n1.getValorTotalGasto < n2.getValorTotalGasto) {
                return 1;
            }
        
            return 0;
        });

        for (let cliente of clientesSorted) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + cliente.nome);
            console.log(`Valor Total Gasto R$: ` + cliente.getValorTotalGasto);
            console.log(`--------------------------------------`);

            cont += 1;

            if (cont == 5) break;
        };
        console.log(`\n`);
    }

    public pegaClientePorId(clienteId: number): Cliente {
        return this.clientes[clienteId-1];
    }

    public pegaClientesMaisgastaram(clienteId: number): Cliente {
        return this.clientes[clienteId];
    }

    public atualizaClientePorId(clienteId: number): void {
        let atualCliente = this.pegaClientePorId(clienteId);
        let nome = this.entrada.receberTexto(`Nome atual (${atualCliente.nome}) -> `);
        let nomeSocial = this.entrada.receberTexto(`Nome social atual (${atualCliente.nomeSocial}) -> `);

        atualCliente.nome = atualizaDado(atualCliente.nome, nome);
        atualCliente.nomeSocial = atualizaDado(atualCliente.nomeSocial, nomeSocial);
    }

    public excluiClientePorId(clienteId: number): void {
        let clienteDeletado = this.clientes.splice(clienteId, 1);
        if (!clienteDeletado[0]) {
            console.log(`\nCliente não encontrado! Tente novamente...\n`);
        }else{
            console.log(`Cliente Id: ${clienteId} deletado com sucesso!\n`);
        }
    }

    public consumiuProduto(clienteId: number, produtoConsumido: Produto): void {
        let cliente = this.pegaClientePorId(clienteId-1)
        cliente.setProdutosConsumidos = produtoConsumido;
    }

}
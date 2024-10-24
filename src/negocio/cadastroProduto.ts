import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import atualizaDado from "../utils/atualizaDados";

export default class CadastroProduto {
    private produtos: Array<Produto>
    private entrada: Entrada

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public cadastraProduto(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberTexto(`Por favor informe o preço do produto: `);
        let tipo = this.entrada.receberTexto(`Por favor informe o tipo do produto: `);
        let raca = this.entrada.receberTexto(`Por favor informe o raca do produto: `);

        const produto = new Produto(nome, Number(preco), tipo, raca);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`)
    }

    public pegaTodosProdutos(): void {
        console.log(`\nLista de todos os produtos:`);
        let cont = 1;
        this.produtos.forEach(produto => {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + produto.nome);
            console.log(`Tipo: ` + produto.tipo);
            console.log(`Raça: ` + produto.raca);
            console.log(`Valor R$: ` + produto.valor);
            console.log(`Qtd Vendidas: ` + produto.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        });
        console.log(`\n`);
    }

    public pegaProdutosMaisVendidos(): void {
        console.log(`\nLista de todos os produtos:`);
        let produtosSorted = this.produtos.sort((n1,n2) => {
            if (n1.qtdVendidas > n2.qtdVendidas) {
                return -1;
            }
        
            if (n1.qtdVendidas < n2.qtdVendidas) {
                return 1;
            }
        
            return 0;
        });

        let cont = 1;
        for (let produto of produtosSorted) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + produto.nome);
            console.log(`Tipo: ` + produto.tipo);
            console.log(`Raça: ` + produto.raca);
            console.log(`Valor R$: ` + produto.valor);
            console.log(`Qtd Vendidas: ` + produto.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        };
        console.log(`\n`);
    }

    public pegaProdutosMaisVendidosPorTipoRaca(tipo: string, raca: string): void {
        console.log(`\nLista de todos os produtos:`);
        let produtosSorted = this.produtos.sort((n1,n2) => {
            if (n1.qtdVendidas > n2.qtdVendidas) {
                return -1;
            }
        
            if (n1.qtdVendidas < n2.qtdVendidas) {
                return 1;
            }
        
            return 0;
        });

        let cont = 1;
        for (let produto of produtosSorted.filter(produto => produto.tipo === tipo && produto.raca === raca)) {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + produto.nome);
            console.log(`Tipo: ` + produto.tipo);
            console.log(`Raça: ` + produto.raca);
            console.log(`Valor R$: ` + produto.valor);
            console.log(`Qtd Vendidas: ` + produto.qtdVendidas);
            console.log(`--------------------------------------`);

            cont += 1;
        };
        console.log(`\n`);
    }

    public pegaProdutoPorId(produtoId: number): Produto {
        return this.produtos[produtoId-1];
    }

    public atualizaProdutoPorId(produtoId: number): void {
        const produtoAnterior = this.pegaProdutoPorId(produtoId);
        let nome = this.entrada.receberTexto(`Nome atual (${produtoAnterior.nome}) -> `);

        produtoAnterior.nome = atualizaDado(produtoAnterior.nome, nome);
    }

    public excluiProdutoPorId(produtoId: number): void {
        const produtoDeletado = this.produtos.splice(produtoId, 1);
        if (!produtoDeletado[0]) {
            console.log(`\nProduto não encontrado! Tente novamente...\n`);
        }else{
            console.log(`Produto Id: ${produtoId} deletado com sucesso!\n`);
        }
    }

    public produtoConsumido(produtoId: number, qtdVendida: number): Produto {
        let produtoConsumido = this.pegaProdutoPorId(produtoId)
        produtoConsumido.setQtdVendidas = qtdVendida;
        
        return produtoConsumido;
    }
}
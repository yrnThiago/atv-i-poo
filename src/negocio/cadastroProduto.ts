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
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto:`)
        const produto = new Produto(nome, preco);
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`)
    }

    public pegaTodosProdutos(): void {
        console.log(`\nLista de todos os produtos:`);
        let cont = 1;
        this.produtos.forEach(produto => {
            console.log(`Id: ` + cont)
            console.log(`Nome: ` + produto.nome);
            console.log(`--------------------------------------`);

            cont += 1;
        });
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
}
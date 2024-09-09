import Empresa from "../modelo/empresa";
import Entrada from "../io/entrada";
import CadastroProduto from "../negocio/cadastroProduto";
import Produto from "../modelo/produto";

export default function produtosInterface(produtos: Array<Produto>) {
    let entrada = new Entrada()
    let produtosInterface = true;

    while (produtosInterface){
        let cadastroProdutos = new CadastroProduto(produtos)

        console.log(`Opções:`);
        console.log(`1 - Cadastrar produto`);
        console.log(`2 - Listar produtos`);
        console.log(`3 - Atualizar produto`);
        console.log(`0 - Sair`);

        let produtoOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(produtoOpcao){
                case 1:
                    cadastroProdutos.cadastraProduto()
                    break;
                case 2:
                    cadastroProdutos.pegaTodosProdutos()
                    break;
                case 3:
                    let produtoId = entrada.receberNumero(`Por favor, digite o ID do produto: `)
                    alterarProdutoInterface(cadastroProdutos, produtoId, entrada)
                    break;
                case 0:
                    produtosInterface = false;
                    break;
            }
    }
}

function alterarProdutoInterface(cadastroProdutos: CadastroProduto, produtoId: number, entrada: Entrada) {
    console.log(`Opções:`);
    console.log(`1 - Atualizar`);
    console.log(`2 - Excluir`);
    console.log(`0 - Sair`);

    let produtoOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch(produtoOpcao){
        case 1:
            cadastroProdutos.atualizaProdutoPorId(produtoId)
            break;
        case 2:
            cadastroProdutos.excluiProdutoPorId(produtoId)
            break;
        case 0:
            break;
    }
}
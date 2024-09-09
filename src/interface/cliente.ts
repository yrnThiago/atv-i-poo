import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import Entrada from "../io/entrada";
import CadastroPet from "../negocio/cadastroPet";
import Cliente from "../modelo/cliente";
import petInterface from "./pet";

export default function clienteInterface(clientes: Array<Cliente>) {
    let entrada = new Entrada()
    let clienteInterface = true;
        while (clienteInterface){
            let cadastroClientes = new CadastroCliente(clientes)
        
            console.log(`Opções:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar clientes`);
            console.log(`3 - Atualizar cliente`);
            console.log(`0 - Sair`);
            let clienteOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(clienteOpcao){
                case 1:
                    cadastroClientes.cadastraCliente()
                    break;
                case 2:
                    cadastroClientes.pegaTodosClientes()
                    break;
                case 3:
                    let clienteId = entrada.receberNumero(`Por favor, digite o ID do cliente: `)
                    alterarClienteInterface(cadastroClientes, clienteId, entrada)
                    break;
                case 0:
                    clienteInterface = false;
                    break;
            }
        }
}

function alterarClienteInterface(cadastroClientes: CadastroCliente, clienteId: number, entrada: Entrada) {
    console.log(`Opções:`);
    console.log(`1 - Atualizar`);
    console.log(`2 - Excluir`);
    console.log(`3 - Pets`);
    console.log(`0 - Sair`);

    let clienteOopcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch(clienteOopcao){
        case 1:
            cadastroClientes.atualizaClientePorId(clienteId)
            break;
        case 2:
            cadastroClientes.excluiClientePorId(clienteId)
            break;
        case 3:
            let clienteEscolhido = cadastroClientes.pegaClientePorId(clienteId);
            petInterface(clienteEscolhido, clienteEscolhido.getPets)
            break;
        case 0:
            break;
    }
}
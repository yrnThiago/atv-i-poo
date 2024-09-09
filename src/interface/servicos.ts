import Empresa from "../modelo/empresa";
import Entrada from "../io/entrada";
import CadastroServico from "../negocio/cadastroServico";
import Servico from "../modelo/servico";

export default function servicosInterface(servicos: Array<Servico>) {
    let entrada = new Entrada()
    let servicosInterface = true;

    while (servicosInterface){
        let cadastroservicos = new CadastroServico(servicos)

        console.log(`Opções:`);
        console.log(`1 - Cadastrar serviço`);
        console.log(`2 - Listar serviços`);
        console.log(`3 - Atualizar serviço`);
        console.log(`0 - Sair`);

        let ServicoOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

            switch(ServicoOpcao){
                case 1:
                    cadastroservicos.cadastraServico()
                    break;
                case 2:
                    cadastroservicos.pegaTodosServicos()
                    break;
                case 3:
                    let ServicoId = entrada.receberNumero(`Por favor, digite o ID do serviço: `)
                    alterarServicoInterface(cadastroservicos, ServicoId, entrada)
                    break;
                case 0:
                    servicosInterface = false;
                    break;
            }
    }
}

function alterarServicoInterface(cadastroservicos: CadastroServico, ServicoId: number, entrada: Entrada) {
    console.log(`Opções:`);
    console.log(`1 - Atualizar`);
    console.log(`2 - Excluir`);
    console.log(`0 - Sair`);

    let ServicoOpcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch(ServicoOpcao){
        case 1:
            cadastroservicos.atualizaServicoPorId(ServicoId)
            break;
        case 2:
            cadastroservicos.excluiServicoPorId(ServicoId)
            break;
        case 0:
            break;
    }
}
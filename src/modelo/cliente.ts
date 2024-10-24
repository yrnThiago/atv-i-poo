import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    constructor(nome: string, nomeSocial: string, cpf: CPF) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getPets(): Array<Pet>{
        return this.pets
    }

    public get getValorTotalGasto(): number {
        let [total, qtdProdutos, qtdServicos] = [0, 0, 0];
        for (let prod of this.produtosConsumidos) {
            total += prod.valor;
            qtdProdutos += prod.qtdVendidas;
        }

        for (let servico of this.servicosConsumidos) {
            total += servico.valor;
            qtdServicos += servico.qtdVendidas;
        }

        return qtdServicos;
    }

    public set setCpf(cpf: CPF) {
        this.cpf = cpf;
    }
    
    public set setRgs(rgs: Array<RG>) {
        this.rgs = rgs;
    }
    
    public set setDataCadastro(dataCadastro: Date) {
        this.dataCadastro = dataCadastro;
    }
    
    public set setTelefones(telefones: Array<Telefone>) {
        this.telefones = telefones;
    }
    
    public set setProdutosConsumidos(produtosConsumidos: Produto) {
        this.produtosConsumidos.push(produtosConsumidos);
    }
    
    public set setServicosConsumidos(servicosConsumidos: Servico) {
        this.servicosConsumidos.push(servicosConsumidos);
    }

    public set setPet(novoPet: Pet) {
        this.pets.push(novoPet);
    }

    public set setProdutoConsumido(produtoConsumido: Produto){
        this.produtosConsumidos.push(produtoConsumido)
    }

    public set setServicoConsumido(servicoConsumido: Servico){
        this.servicosConsumidos.push(servicoConsumido)
    }
    
}
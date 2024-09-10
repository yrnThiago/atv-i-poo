export default class Produto {
    public nome!: string
    public preco: number
    private vendidos: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.vendidos = 0
    }

    public get getNome(): string {
        return this.nome
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getVendidos(): number {
        return this.vendidos
    }

    public set setPreco(novoPreco: number) {
        this.preco = novoPreco
    }

    public set setVendidos(quantidadeVendida: number) {
        this.vendidos = quantidadeVendida
    }
}
export default class Servico {
    public nome!: string
<<<<<<< HEAD
    public valor: number
    public qtdVendidas: number
    public tipo: string
    public raca: string

    constructor(nome: string, valor: number, tipo: string, raca: string) {
        this.nome = nome
        this.valor = valor
        this.qtdVendidas = 0
        this.tipo = tipo
        this.raca = raca
=======
    public preco: number
    private vendidos: number

    constructor(nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
        this.vendidos = 0
>>>>>>> 773ecd960783455377f20bfc344f08b7766767f9
    }

    public set setQtdVendidas(qtd: number) {
        this.qtdVendidas += qtd
    }

    public get getNome(): string {
        return this.nome
    }

<<<<<<< HEAD
    public get getQtdVendidas(): number {
        return this.qtdVendidas
=======
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
>>>>>>> 773ecd960783455377f20bfc344f08b7766767f9
    }
}
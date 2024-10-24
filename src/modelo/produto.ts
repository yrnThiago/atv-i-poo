export default class Produto {
    public nome!: string
    public valor: number
    public qtdVendidas: number
    public tipo: string
    public raca: string

    constructor(nome: string, valor: number, tipo: string, raca: string) {
        this.nome = nome
        this.valor = valor
        this.qtdVendidas = 0;
        this.tipo = tipo
        this.raca = raca
    }

    public set setQtdVendidas(qtd: number) {
        this.qtdVendidas += qtd
    }

    public get getNome(): string {
        return this.nome
    }

    public get getQtdVendidas(): number {
        return this.qtdVendidas
    }
}
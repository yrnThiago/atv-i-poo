export default class Produto {
    public nome!: string

    constructor(nome: string) {
        this.nome = nome
    }
    public get getNome(): string {
        return this.nome
    }
}
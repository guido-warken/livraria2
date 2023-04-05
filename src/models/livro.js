export class Livro {
    #titulo;
    #ano;
    #autor;

    constructor(titulo, ano, autor) {
        this.#ano = ano;
        this.#autor = autor;
        this.#titulo = titulo;
    }

    get ano() {
        return this.#ano;
    }

    get autor() {
        return this.#autor;
    }
    get titulo() {
        return this.#titulo;
    }

}

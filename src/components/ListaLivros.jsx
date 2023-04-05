import React, { useState, useEffect } from 'react';
import { LivroComponent } from './LivroComponent';
import { Livro } from '../models/livro';

const livros = [new Livro("Senhor dos aneis", 2004, "Guido Filho"), new Livro("Harry Potter e a pedra filosofal", 2000, "Sergio Luiz"), new Livro("Iluminado", 1999, "Stephen King")];

export const ListaLivrosComponent = () => {
    const [listaLivros, setListaLivros] = useState(livros);
    useEffect(() => {
        document.title = `Lista com ${listaLivros.length} livros`;
    }, [listaLivros]);
    return (
        <ul>
            {listaLivros.map((l => (
                <LivroComponent titulo={l.titulo} ano={l.ano} />
            )))}
        </ul>
    );
}
import React, { useState } from 'react';
import { Livro } from '../models/livro';

export const FormLivro = () => {
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [autor, setAutor] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const responseGet = await fetch('http://localhost:3000/livros');
        const livrosDoServidor = responseGet.json();
        let livro = {
            id: livrosDoServidor.length + 1,
            titulo,
            ano,
            autor
        };
        let livroStr = JSON.stringify(livro);
        const responsePost = await fetch('http://localhost:3000/livros', {
            method: 'POST',
            body: livroStr,
            headers: {
                "Content-Type": "application/json"
            }
        });
        let resultado;
        if (responsePost.ok) {
            resultado = await responsePost.json();
        } else {
            resultado = await responsePost.text();
        }
        console.log(resultado);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Titulo do livro:</label>
            <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} /><br />
            <label htmlFor="ano">ano do livro:</label>
            <input type="text" id="ano" value={ano} onChange={(e) => setAno(e.target.value)} /><br />
            <label htmlFor="autor">autor do livro:</label>
            <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} /><br />
            <button type="submit">Salvrar</button>
        </form>
    );
}

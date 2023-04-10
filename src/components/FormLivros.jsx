import React, { useState } from 'react';

export const FormLivro = ({nextId}) => {
    const [titulo, setTitulo] = useState('');
    const [ano, setAno] = useState('');
    const [autor, setAutor] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let livro = {
            id: nextId,
            titulo,
            ano,
            autor
        };
        const response = await fetch('http://localhost:3000/livros', {
            method: 'POST',
            body: JSON.stringify(livro),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let resultado;
        if (response.ok) {
            resultado = await response.json();
        } else {
            resultado = await response.text();
        }
        setAno('');
        setAutor('');
        setTitulo('');
    }

    return (
        <>
              <h1>Cadastrar novo livro</h1><br/>

        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Titulo do livro:</label>
            <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} /><br />
            <label htmlFor="ano">ano do livro:</label>
            <input type="text" id="ano" value={ano} onChange={(e) => setAno(e.target.value)} /><br />
            <label htmlFor="autor">autor do livro:</label>
            <input type="text" id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} /><br />
            <button type="submit">Salvrar</button>
        </form>
        </>
    );
}

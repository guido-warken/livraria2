import { ListaLivrosComponent } from './components/ListaLivros';
import { FormLivro } from './components/FormLivros';

function App() {
  return (
    <div className="App">
      <h1>Lista de livros</h1><br />
      <ListaLivrosComponent /><br/>
      <h1>Cadastrar novo livro</h1><br/>
      <FormLivro />
    </div>
  );
}

export default App

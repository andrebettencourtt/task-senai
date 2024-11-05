import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { CadastroDeUsuarios } from "./components/CadastroDeUsuarios";
import { CadastroDeTarefas } from "./components/CadastroDeTarefas";
import { GerenciarTarefa } from "./components/GerenciarTarefas";

function App() {
  return (
    <Router>
      <header className="header">
        <h1 className="title">Gerenciamento de Tarefas</h1>
        <nav className="links">
          <Link to="/CadastroDeUsuarios">Cadastro de Usuários</Link>
          <Link to="/CadastroDeTarefas">Cadastro de Tarefas</Link>
          <Link to="/GerenciarTarefas">Gerenciar Tarefas</Link>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/CadastroDeUsuarios" element={<CadastroDeUsuarios />} />
          <Route path="/CadastroDeTarefas" element={<CadastroDeTarefas />} />
          <Route path="/GerenciarTarefas" element={<GerenciarTarefa />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

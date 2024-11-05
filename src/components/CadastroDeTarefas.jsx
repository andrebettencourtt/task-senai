export function CadastroDeTarefas() {
  return (
    <>
      <h1>Cadastro de Tarefas</h1>
      <form className="form">
        <input type="text" placeholder="Descrição:" />
        <input type="text" placeholder="Setor:" />

        <label for="usuario">Usuário</label>
        <input
          list="usuarios"
          id="usuario"
          name="usuario"
          placeholder="Usuários"
        />

        <datalist id="usuarios">
          <option value="João"></option>
          <option value="Maria"></option>
          <option value="Lucas"></option>
          <option value="Luis"></option>
          <option value="Marcia"></option>
        </datalist>

        <label for="prioridade">Prioridade:</label>
        <input
          list="prioridades"
          id="prioridade"
          name="prioridade"
          placeholder="Prioridade"
        />

        <datalist id="prioridades">
          <option value="Baixa"></option>
          <option value="Media"></option>
          <option value="Alta"></option>
        </datalist>

        <button>Cadastrar</button>
      </form>
    </>
  );
}

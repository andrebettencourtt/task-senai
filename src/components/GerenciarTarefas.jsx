export function GerenciarTarefa() {
  return (
    <>
      <h1>Tarefas</h1>

      <div className="divGerenciar">
        <h1>A Fazer</h1>
        <ul>
          <li>Descrição: </li>
          <li>Setor: </li>
          <li>Prioridade: </li>
          <li>Vinculado a: </li>
        </ul>
        <div className="divButton">
          <button>Editar</button>
          <button>Excluir</button>
        </div>
        <form className="formStatus">
          <label>
            <input type="radio" />A fazer
          </label>
          <label>
            <input type="radio" />
            Fazendo
          </label>
          <label>
            <input type="radio" />
            Pronto
          </label>
          <div>
            <button>Alterar Status</button>
          </div>
        </form>
      </div>
    </>
  );
}

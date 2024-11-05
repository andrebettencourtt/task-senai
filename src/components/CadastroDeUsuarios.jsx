export function CadastroDeUsuarios() {
  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <form className="form">
        <input type="text" placeholder="Nome:" />
        <input type="email" placeholder="Email:" />
        <button>Cadastrar</button>
      </form>
    </>
  );
}

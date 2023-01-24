import ProdutosList from "./../ProdutosList/ProdutosList";

const Conteudo = ({ produtos, produtosBackup, categorias, setProdutos }) => {
  return (
    <main>
      <ProdutosList
        produtos={produtos}
        produtosBackup={produtosBackup}
        categorias={categorias}
        setProdutos={setProdutos}
      />
    </main>
  );
};

export default Conteudo;
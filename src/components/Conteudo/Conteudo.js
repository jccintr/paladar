import ProdutosList from "./../ProdutosList/ProdutosList";

const Conteudo = ({ Produtos, ProdutosBackup, Categorias, setProdutos }) => {
  return (
    <main>
      <ProdutosList
        
        Produtos={Produtos}
        ProdutosBackup={ProdutosBackup}
        Categorias={Categorias}
        setProdutos={setProdutos}
      />
    </main>
  );
};

export default Conteudo;
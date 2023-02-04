import ProdutosList from "./../ProdutosList/ProdutosList";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

//const Conteudo = ({ produtos, produtosBackup, categorias, setProdutos }) => {
  const Conteudo = () => {
  const {produtos,produtosBackup,categorias,setProdutos} = useContext(DataContext);
  return (
    <main>
      <ProdutosList
      //  produtos={produtos}
      //  produtosBackup={produtosBackup}
      //  categorias={categorias}
     //   setProdutos={setProdutos}
      />
    </main>
  );
};

export default Conteudo;
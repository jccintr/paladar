import { useState } from "react";
import "./ProdutosList.css";

import Produto from "../Produto/Produto";
import CategoryList from "../CategoryList/CategoryList";
import { FaSearch } from "react-icons/fa";

const ProdutosList = ({produtos,produtosBackup,categorias,setProdutos}) => {
  const [HasProdutos, setHasProdutos] = useState(null);
  const [search, setSearch] = useState('');
 
  const onchangeInput = (event) => {
    setSearch(event.target.value);
    let novoArray = produtosBackup.filter(
      (produto) => produto.Nome.toUpperCase().includes(event.target.value.toUpperCase()) || produto.Ingredientes.toUpperCase().includes(event.target.value.toUpperCase()) || produto.Categoria.Nome.toUpperCase().includes(event.target.value.toUpperCase())
    );
    if (!novoArray.length) setHasProdutos(null);
    setProdutos(novoArray);
  };



  const TituloCategoria = ({categoria}) => {

    const arr = produtos.filter(
      (produto) => produto.Categoria.id === categoria.id
    );
    if (arr.length) setHasProdutos(true);

    return arr.length ? (
      <h3 id={categoria.Nome} className="titulo-categoria" key={categoria.id}>
        {categoria.Nome}
      </h3>
    ) : (
      ""
    );
  }

  return (
    <div className="lista">
      <CategoryList categorias={categorias}/>
      <div className="containerInput">
          <input
            className="inputPesquisa"
            placeholder="Pesquisar por produto ou ingrediente"
            type="text"
            onChange={onchangeInput}
            value={search}
          />
          <FaSearch className="icon" size={18} /> 
      </div>
      
      {!HasProdutos ? (
        <p className="errMensagem">Nenhum item encontrado</p>
      ) : (
        ""
      )}
      {categorias.map((categoria) => (
        <div  key={categoria.id}>
          <TituloCategoria categoria={categoria} key={categoria.id} />

          {produtos.filter(
            (produto) => produto.Categoria.id === categoria.id
          ).map((produto) => (
            <Produto produto={produto} key={produto.id} />
          ))}
        </div>
      ))}
      {HasProdutos && (
        <p className="mensagem-imagens">
          As imagens são meramente ilustrativas
        </p>
      )}
    </div>
  );
};

export default ProdutosList;
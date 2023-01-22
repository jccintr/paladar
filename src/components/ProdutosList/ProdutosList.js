import { useState } from "react";
import "./ProdutosList.css";

import Produto from "../Produto/Produto";

const ProdutosList = ({
  Produtos,
  ProdutosBackup,
  Categorias,
  setProdutos
}) => {
  const [HasProdutos, setHasProdutos] = useState(null);
  const [search, setSearch] = useState("");

  const inputPesquisaChange = (event) => {
    setSearch(event.target.value);
    let novoArray = ProdutosBackup.filter(
      (produto) =>
        produto.Nome.toUpperCase().includes(event.target.value.toUpperCase()) ||
        produto.Ingredientes.toUpperCase().includes(
          event.target.value.toUpperCase()
        ) ||
        produto.Categoria.Nome.toUpperCase().includes(
          event.target.value.toUpperCase()
        )
    );
    if (!novoArray.length) setHasProdutos(null);
    setProdutos(novoArray);
  };

  function TituloCategoria(props) {
    const arr = Produtos.filter(
      (produto) => produto.Categoria.id === props.categoria.id
    );
    if (arr.length) setHasProdutos(true);

    return arr.length ? (
      <h3 className="titulo-categoria" key={props.categoria.id}>
        {props.categoria.Nome}
      </h3>
    ) : (
      ""
    );
  }

  return (
    <>
      <div className="containerInput">
        <input
          className="inputPesquisa"
          placeholder="Pesquisar por produto ou ingrediente"
          type="text"
          onChange={inputPesquisaChange}
          value={search}
        />
      </div>
      {!HasProdutos ? (
        <p className="errMensagem">Nenhum item encontrado</p>
      ) : (
        ""
      )}
      {Categorias.map((categoria) => (
        <div key={categoria.id}>
          <TituloCategoria categoria={categoria} key={categoria.id} />

          {Produtos.filter(
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
    </>
  );
};

export default ProdutosList;
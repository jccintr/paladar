import "./Produto.css";
import { useNavigate } from "react-router-dom";

export default function Produto({ produto }) {
  const navigate = useNavigate();


  const ShowItemPedido = () => {

    let idProduto = produto.id;
    
    navigate("/add", { state: { idProduto } });
   

  }

  return (
    <div
      className="card-item"
      key={produto.id}
      onClick={ShowItemPedido}
    >
      <div className="div-imagem">
        <img
          className="imagemProduto"
          alt="imagem do produto"
          src={produto.Imagem.url}
        />
      </div>
      <div className="coluna">
        <div className="produtoNome">{produto.Nome}</div>
        <div className="produtoIngredientes">{produto.Ingredientes}</div>
        <div className="linhaPreco">
          <div className="preco">R$ {produto.Preco}</div>
        </div>
      </div>
    </div>
  );
}

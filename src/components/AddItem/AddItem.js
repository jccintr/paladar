import "./AddItem.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddItem = ({ itensPedidoLen,handleAddItemPedido, setNovoItemPedido, produtos  }) => {
  const navigate = useNavigate();
  const [quant, setQuant] = useState(1);
  const [vUnitario, setvUnitario] = useState(0);
  const [total, setTotal] = useState(0);
  const [imagem,setImagem] = useState('');
  const [observacao,setObservacao] = useState('');
  
  const [itemPedido, setItemPedido] = useState([]);

  const params = useLocation();

  //console.log(params.state.idProduto);

  
  useEffect(() => {
    let item = produtos.filter(
      (produto) => produto.id === params.state.idProduto
    );
   
    setItemPedido(item[0]);
    let preco = item[0].Preco.replace(",", ".") * 1;
    setImagem(item[0].Imagem.url);
    setvUnitario(preco);
  }, []);



  useEffect(() => {
    CalculaTotal();
  }, [quant, vUnitario]);

  const SomaQuant = () => {
    setQuant(quant + 1);
  };

  const DiminuiQuant = () => {
    if (quant > 1) {
      setQuant(quant - 1);
    }
  };
  const CalculaTotal = () => {
    let tt = quant * vUnitario;
    setTotal(tt);
  };

  const addItem = () => {
    
    //const id = itemPedido.id;
    const id = itensPedidoLen ? itensPedidoLen+1 : 1;
    
    const totalProduto = total;
    const nItem = { id,quant,totalProduto,observacao,item: itemPedido };
    
    console.log(nItem);
    setNovoItemPedido(nItem);
    handleAddItemPedido(nItem);
    navigate('/');
  }

  return (
    <>
      <div className="corpo">
        <div className="linhaNome">
        <FaChevronLeft size={30}  onClick={()=>{navigate('/');}}/>
        <div className="Nome">{itemPedido.Nome}</div>
        </div>
        <img
          className="img-produto"
          alt="imagem do produto"
          src={imagem}
        />
        <div className="ingredientes">{itemPedido.Ingredientes}</div>
        <div className="div-obs">
          <p className="lbl-obs">Observações:</p>
          <textarea
            className="text-obs"
            placeholder="viajar na maionese..."
            onChange={(e)=> setObservacao(e.target.value)}
          ></textarea>
        </div>
        <div className="add-container">
          <div className="div-input-quantidade">
            <button className="btQuant" onClick={DiminuiQuant}>
              -
            </button>
            <input disabled className="input-quant" type="text" value={quant} />
            <button className="btQuant" onClick={SomaQuant}>
              +
            </button>
          </div>
          <div className="div-bt-add">
            <button className="bt-adicionar" onClick={()=>{addItem()}}>
              Adicionar R${" "}
              {total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;

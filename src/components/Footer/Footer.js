import "./Footer.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react';

const Footer = ({itensPedido}) => {
  const [totalPedido,setTotalPedido] = useState(0);

  const navigate = useNavigate();
  
  useEffect(() => {
    setTotalPedido(itensPedido.reduce( (n,{totalProduto}) => n + totalProduto,0));
  }, [itensPedido]);

    return (
      <footer className="footer">
        <div className="left" onClick={()=>{navigate('/carrinho');}}>
          <div className="auxiliar">
            <FaShoppingCart size={20} />
            {itensPedido.length>0 && <p className="p-itens-carrinho">{itensPedido.length}</p>} {itensPedido.length > 0 ? itensPedido.length === 1 ? <p className="p-itens-carrinho">item</p> : <p className="p-itens-carrinho">itens</p> : <p className="p-itens-carrinho">Vazio</p> }
          </div>
          </div>
       
          {itensPedido.length>0 && <div onClick={()=>{navigate('/checkout');}}><p>Finalizar Pedido</p></div>}

          {itensPedido.length>0 && <div className="right"><p>R$ {totalPedido.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p></div>}
        
      </footer>
    );
  };
  
  export default Footer;
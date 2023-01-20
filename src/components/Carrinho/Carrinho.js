import "./Carrinho.css";
import { FaChevronLeft } from "react-icons/fa";
import {useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ItensCarrinho from "../ItensCarrinho/ItensCarrinho";

const Carrinho = ({itensPedido,handleDeleteItemPedido}) => {
  const [totalPedido,setTotalPedido] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
      setTotalPedido(itensPedido.reduce( (n,{totalProduto}) => n + totalProduto,0));
    }, [itensPedido]);
  

    return (
      <>
      
      <div className="corpoCarrinho">
        <div className="div-titulo">
        <FaChevronLeft size={30}  onClick={()=>{navigate('/');}}/>
        <div className="titulo-carrinho">Meu Carrinho</div>
        </div>
        {itensPedido.length === 0 ? (<><p>Seu Carrinho está vazio.</p>
        <button className="bt-adicionar" style={{width:330}} onClick={()=>{navigate('/');}}>
        Adicionar Itens
       </button>
   </>
        
        
        
        ) : (<>
        <ItensCarrinho itensPedido={itensPedido} handleDeleteItemPedido={handleDeleteItemPedido}/>
        <div style={{display: 'flex',flexDirection:'row',justifyContent:'flex-end',width:330,paddingTop:10,paddingBottom:20}}>
           <p style={{margin:0,padding:0}}>Total: R$ {totalPedido.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        <button className="bt-adicionar" style={{width:330,marginBottom:15}} onClick={()=>{navigate('/checkout');}}>
              Finalizar Pedido
         </button>
        </> )}
     </div>
     </>
    );
  };
  
  export default Carrinho;
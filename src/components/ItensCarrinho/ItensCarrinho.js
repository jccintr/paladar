import "./ItensCarrinho.css";
import React from 'react';

import { FaTrashAlt } from "react-icons/fa";
 


function ItensCarrinho({itensPedido,handleDeleteItemPedido}) {
 

  return (
    <>
    {itensPedido.map((itemPedido) => (
      <div className="item-carrinho" key={itemPedido.id}>
      <p style={{width:30,fontWeight:'bold'}}>{itemPedido.quant}</p>
      <div style={{width:200}}>
         <p style={{padding:0,margin:0,fontWeight:'normal'}}>{itemPedido.item.Nome}</p>
         {itemPedido.observacao.length>0 && <div ><p style={{padding:0,margin:0,fontSize:12,fontWeight:'normal',fontStyle:'italic'}}>{itemPedido.observacao}</p></div>}
      </div>
      <div className="item-carrinho-total-delete">
        <p style={{paddingRight:5,fontWeight:'normal'}}>R$ {itemPedido.totalProduto.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        <p style={{padding:0,margin:0, color:'#dd1f26'}}><FaTrashAlt onClick={()=> handleDeleteItemPedido(itemPedido.id) }/></p> 
      </div>
      
      </div>
    ))}
    
   
    </>
  )
}

export default ItensCarrinho
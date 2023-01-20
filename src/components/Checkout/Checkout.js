
import "./Checkout.css";
import { FaChevronLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from 'react'
import MsgBox from './../MsgBox/MsgBox';


const Checkout = ({Taxas,Pagamentos,itensPedido}) =>{
    const [nome,setNome] = useState('');
    const [telefone,setTelefone] = useState('');
    const [entregar,setEntregar] = useState(true);
    const [endereco,setEndereco] = useState('');
    const [pontoReferencia,setPontoReferencia] = useState('');
    const [totalProdutos,setTotalProdutos] = useState(0);
    const [taxaEntrega,setTaxaEntrega] = useState(0);
    const [totalPedido,setTotalPedido] = useState(0);
    const [formaPagamento,setFormaPagamento] = useState('Dinheiro');
    const [precisaTroco,setPrecisaTroco] = useState(false);
    const [trocoPara,setTrocoPara] = useState('');
    const navigate = useNavigate();
    const [msgBox, setMsgBox] = useState({
        mensagem: "",
        isLoading: false,
       
      });

    useEffect(() => {
        setTotalProdutos(itensPedido.reduce( (n,{totalProduto}) => n + totalProduto,0));
        setTotalPedido(totalProdutos+taxaEntrega);
      }, [itensPedido,taxaEntrega,totalProdutos]);

      const handleMsgBox = (mensagem, isLoading) => {
        setMsgBox({
          mensagem,
          isLoading,
      
        });
      };

      const areUSureDelete = () => {
       
        handleMsgBox("", false);
       
      };
    
  return (
    <>
    <div className="corpoCheckout">
        <div className="div-titulo-checkout">
           <FaChevronLeft size={30}  onClick={()=>{navigate('/');}}/>
           <div className="titulo-checkout">Finalizando o Pedido</div>
        </div>
        <div className="div-entregar-retirar" style={{display:"flex",flexDirection:"row"}}>
            <p className={entregar ? "p-entregar-retirar-selecionado" : "p-entregar-retirar" } onClick={()=>setEntregar(true)}>Entregar</p><p className={entregar ?  "p-entregar-retirar" :"p-entregar-retirar-selecionado" } onClick={()=>{setEntregar(false);setTaxaEntrega(0);}}>Retirar no Estabelecimento</p>
        </div>
        <div className="container-input-checkout">
            <p className="label-checkout">Nome:</p>
            <input 
               className="input-checkout"
               type="text"
               placeholder="Informe o seu nome"
               value={nome}
               onChange={(e)=> setNome(e.target.value)}
            />
        </div>
        <div className="container-input-checkout">
            <p className="label-checkout">Telefone:</p>
            <input 
               className="input-checkout"
               type="text"
               placeholder="Informe o seu WhatsApp"
               value={telefone}
               onChange={(e)=> setTelefone(e.target.value)}
            />
        </div>
       
        {entregar && (
         <>  
        <div className="container-input-checkout">
            <p className="label-checkout">Endereço:</p>
            <input 
               className="input-checkout"
               type="text"
               placeholder="Informe o seu endereço"
               value={endereco}
               onChange={(e)=> setEndereco(e.target.value)}
            />
        </div>
        <div className="container-input-checkout">
            <p className="label-checkout">Ponto de referência:</p>
            <input 
               className="input-checkout"
               type="text"
               placeholder="Informe um ponto de referência"
               value={pontoReferencia}
               onChange={(e)=> setPontoReferencia(e.target.value)}
            />
        </div>
        <div className="container-input-checkout">
            <p className="label-checkout">Bairro:</p>
            <select className="select-checkout" onChange={(e)=>{setTaxaEntrega(e.target.value*1)}}>
                <option value={0}>Selecione por favor</option>
                {Taxas.map((taxa) => (
                <option key={taxa.id} value={taxa.Valor}>{taxa.Bairro} R$ {taxa.Valor.toLocaleString(undefined, { minimumFractionDigits: 2 })}</option>
                ))}
            </select>
            
        </div>
        </> )}
        {entregar && (<>
        <div style={{display: 'flex',flexDirection:'row',justifyContent:'flex-end',width:300,paddingTop:5,paddingBottom:0}}>
           <p style={{margin:0,padding:0,fontWeight:'normal'}}>Total dos Produtos: R$ {totalProdutos.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>

        <div style={{display: 'flex',flexDirection:'row',justifyContent:'flex-end',width:300,paddingTop:5,paddingBottom:0}}>
           <p style={{margin:0,padding:0,fontWeight:'normal'}}>Taxa de Entrega: R$ {taxaEntrega.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>
        </>)}
        <div style={{display: 'flex',flexDirection:'row',justifyContent:'flex-end',width:300,paddingTop:5,paddingBottom:20}}>
           <p style={{margin:0,padding:0}}>Total a Pagar: R$ {totalPedido.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </div>

        <div className="container-input-checkout">
            <p className="label-checkout">Forma de Pagamento:</p>
            <select 
              value={formaPagamento}
              className="select-checkout"
              onChange={(e)=>{
                const op = e.target.value;
                setFormaPagamento(op);
               // handleMsgBox("Você selecionou: " + op,true);
              }}
            >
            {Pagamentos.map((pagamento) => (
                <option key={pagamento.id} value={pagamento.Descricao}>{pagamento.Descricao}</option>
                ))}
            </select>
        </div>
        { formaPagamento ==="Dinheiro" && entregar && (<>
        <div className="div-entregar-retirar" style={{display:"flex",flexDirection:"row"}}>
            <p className={precisaTroco ?  "p-entregar-retirar" :"p-entregar-retirar-selecionado" } onClick={()=>{setPrecisaTroco(false);}}>Tenho trocado</p>
            <p className={precisaTroco ? "p-entregar-retirar-selecionado" : "p-entregar-retirar" } onClick={()=>setPrecisaTroco(true)}>Preciso de Troco</p>
        </div> 
        {precisaTroco && (
        <div className="container-input-checkout">
            <p className="label-checkout">Mandar troco para:</p>
            <input 
              className="input-checkout"
              type="text"
              placeholder="Informe quanto você precisa de troco"
              value={trocoPara}
              onChange={(e)=> setTrocoPara(e.target.value)}
            />
       </div> )}
    </>
        )}

         <button className="bt-adicionar" style={{width:330,marginTop:15,marginBottom:15}} onClick={()=>{
             if(entregar && !taxaEntrega) {
               handleMsgBox("Selecione o bairro para entrega por favor.",true);
             } else {handleMsgBox("Seu pedido foi enviado. Obrigado por comprar conosco.",true); }
         }} >
              Enviar o Pedido
         </button>
       
    </div>

    {msgBox.isLoading && (
        <MsgBox
          onDialog={areUSureDelete}
          mensagem={msgBox.mensagem}
        />
      )}
   </>
  )

}

export default Checkout
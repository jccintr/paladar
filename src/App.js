import "./styles.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";
import Carrinho from "./components/Carrinho/Carrinho";
import Conteudo from "./components/Conteudo/Conteudo";
import AddItem from "./components/AddItem/AddItem";
import Checkout from "./components/Checkout/Checkout";
import { DataProvider } from "./context/DataContext";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const App = () => {
  const {isLoading,getProdutosError,getCategoriasError,getPagamentosError,getTaxasError} = useContext(DataContext);
  const [itensPedido, setItensPedido] = useState([]);
  const [novoItemPedido, setNovoItemPedido] = useState(""); 
 

const handleDeleteItemPedido = (id) => {
   const newItensPedido = itensPedido.filter((item)=> item.id !== id);
   setItensPedido(newItensPedido);
  
}

const handleAddItemPedido = (novoItem) => {
   
    const novosItens = [...itensPedido, novoItem];
    setItensPedido(novosItens);
    
  }



  return (
    <div className="app">
      <DataProvider>
          <Cabecalho />
          <Routes>
            <Route
              path="/"
              element={
                isLoading ? (
                  <div className="loading">
                    <div className="loader"> </div>
                  </div>
                ) : getProdutosError || getCategoriasError ? (
                  <p className="errMensagem">Falha ao acessar dados.</p>
                ) : (
                  !(getProdutosError || getCategoriasError || getTaxasError || getPagamentosError) && (
                    <Conteudo />
                  )
                )
              }
            />
            <Route path="/carrinho" element={<Carrinho  handleDeleteItemPedido={handleDeleteItemPedido} itensPedido={itensPedido} />} />
            <Route path="/checkout" element={<Checkout  itensPedido={itensPedido}/> }/>
            <Route path="/add" element={<AddItem  itensPedidoLen={itensPedido.length} handleAddItemPedido={handleAddItemPedido}  setNovoItemPedido={setNovoItemPedido} />} />
          </Routes>
          <Footer itensPedido={itensPedido} />
      </DataProvider>
    </div>
  );
};

export default App;
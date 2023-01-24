import "./styles.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Footer/Footer";
import Carrinho from "./components/Carrinho/Carrinho";
import Conteudo from "./components/Conteudo/Conteudo";
import AddItem from "./components/AddItem/AddItem";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const [Taxas, setTaxas] = useState([]);
  const [Pagamentos, setPagamentos] = useState([]);
  const [Produtos, setProdutos] = useState([]);
  const [ProdutosBackup, setProdutosBackup] = useState([]);
  const [Categorias, setCategorias] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [getProdutosError, setGetProdutosError] = useState(null);
  const [getCategoriasError, setGetCategoriasError] = useState(null);
  const [getTaxasError, setGetTaxasError] = useState(null);
  const [getPagamentosError, setGetPagamentosError] = useState(null);
  const [itensPedido, setItensPedido] = useState([]);
  const [novoItemPedido, setNovoItemPedido] = useState("");
  




const handleDeleteItemPedido = (id) => {
   const newItensPedido = itensPedido.filter((item)=> item.id !== id);
   setItensPedido(newItensPedido);
  
}

  const handleAddItemPedido = (novoItem) => {
    //console.log(novoItemPedido);
    const novosItens = [...itensPedido, novoItem];
    setItensPedido(novosItens);
    
  }

  const getAllProdutos = async () => {
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:p7GSSb0k/produtos"
      );

      if (!response.ok) throw Error("Falha ao obter dados!");

      const responseJson = await response.json();
      setProdutos(responseJson);
      setProdutosBackup(responseJson);
      setGetProdutosError(null);
    } catch (error) {
      setGetProdutosError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllCategorias = async () => {
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:p7GSSb0k/categorias"
      );
      if (!response.ok) throw Error("Falha ao obter dados!");
      const responseJson = await response.json();
      setCategorias(responseJson);
      setGetCategoriasError(null);
    } catch (error) {
      setGetCategoriasError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllTaxas = async () => {
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:p7GSSb0k/taxas"
      );
      if (!response.ok) throw Error("Falha ao obter dados!");
      const responseJson = await response.json();
      setTaxas(responseJson);
      setGetTaxasError(null);
    } catch (error) {
      setGetTaxasError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getAllPagamentos = async () => {
    try {
      const response = await fetch(
        "https://x8ki-letl-twmt.n7.xano.io/api:p7GSSb0k/pagamentos"
      );
      if (!response.ok) throw Error("Falha ao obter dados!");
      const responseJson = await response.json();
      setPagamentos(responseJson);
      setGetPagamentosError(null);
    } catch (error) {
      setGetPagamentosError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getAllTaxas();
  }, []);

  useEffect(() => {
    getAllPagamentos();
  }, []);

  useEffect(() => {
    getAllProdutos();
  }, []);

  useEffect(() => {
    getAllCategorias();
  }, []);

  useEffect(() => {
    document.title = "Lanchonete Paladar";
  }, []);

  return (
    <div className="app">
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
                <Conteudo
                  Produtos={Produtos}
                  ProdutosBackup={ProdutosBackup}
                  Categorias={Categorias}
                  setProdutos={setProdutos}
                />
              )
            )
          }
        />
        <Route path="/carrinho" element={<Carrinho  handleDeleteItemPedido={handleDeleteItemPedido} itensPedido={itensPedido} />} />
        <Route path="/checkout" element={<Checkout Taxas={Taxas} Pagamentos={Pagamentos} itensPedido={itensPedido}/> }/>
        <Route path="/add" element={<AddItem  itensPedidoLen={itensPedido.length} handleAddItemPedido={handleAddItemPedido}  setNovoItemPedido={setNovoItemPedido} produtos={Produtos} />} />
      </Routes>
      <Footer itensPedido={itensPedido} />
    </div>
  );
};

export default App;
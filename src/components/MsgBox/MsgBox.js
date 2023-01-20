import React from 'react';
import "./MsgBox.css";



const MsgBox = ({mensagem,onDialog}) => {

    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
        onClick={() => onDialog(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width:"300px"
          }}
        >
          <p className="msgbox-mensagem" >{mensagem}</p>
         
          <div style={{ display: "flex", alignItems: "center" }}>
            
            <button
              onClick={() => onDialog(false)}
              style={{
                
                color: "black",
                padding: "10px",
                marginLeft: "4px",
                border: 1,
                borderColor: "gray",
                borderRadius: 10,
                cursor: "pointer"
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default MsgBox;
  
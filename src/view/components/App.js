import React from 'react';
import './App.css';
import gutsIMG from '../images/guts.jpg'

const Caixa = () => {
    return (
    <>
    <div className="caixa">
        <div className="imagem" />
         <img src={gutsIMG} width="300px" height="auto" alt="Guts"></img>
         <div className="label">
          <label> Já ouviu falar de Berserk?</label>
          </div>
            <div className="textfield">
         <input type="text" />
        </div>
        <div className="texto">
        <p>Berserk - Kentaro Miura</p>    
        </div>  
        <div className="botao">
        <button type="button">Um</button>
        <button type="button">Dois</button>
        </div>
         </div>
    </>
  
   
    )
}

export default Caixa

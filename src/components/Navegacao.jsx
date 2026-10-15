 import React from "react";
import BotaoNavegacao from './BotaoNavegacao';

 export default function Navegacao(){
    return(
        <div Style={{ display: 'flex', gap: '10px',
            justifyContent: 'center', marginTop: '20px'
         }}>
            <BotaoNavegacao rota="/" texto="Ir para a pagina 1"/>
            <BotaoNavegacao rota= "/pagina-dois" texto="Ir para a pagina 2"/>
         </div>
    );
}
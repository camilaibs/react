import React from 'react'
import gatinho from './gatinho.gif'
import './NaoEncontrada.css'


function NaoEncontrada(props) {
    return (
        <div className="nao-encontrada">
            <h1>Página não encontrada</h1>
            <img 
                className="nao-encontrada__imagem" 
                src={gatinho} 
                alt="Não encontrada" 
            />
        </div>
    )
}

export default NaoEncontrada
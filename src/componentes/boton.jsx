import React from "react";
import '../hojas-de-estilo/Boton.css'
function BotonContador({ texto, BotonClic, manejarClic }){
    return(
        <button className={ BotonClic ? 'boton-clic' : 'boton-reiniciar' }
        onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default BotonContador;
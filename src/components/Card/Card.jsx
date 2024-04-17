import React, { useState } from "react";

import './Card.css'

const Card = (props) => {
    const [showTitulo, setShowTitulo] = useState(true);

    return(
        <div className="container-card" onMouseEnter={() => setShowTitulo(true)} onMouseLeave={() => setShowTitulo(false)}>
            <img src={props.image}/>
            <div className="info-card">
                {showTitulo && <h2>{props.titulo ? props.titulo : 'Filme'}</h2>}
            </div>
        </div>
    )
}

export default Card
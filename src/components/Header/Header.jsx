import React from "react";
import logoImg from "../../assets/logoDisney.png";
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <>
            <header>
                <div className="logo-header">
                    <img src={logoImg}/>
                </div>
                <nav>
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/'}><li>Api</li></Link>
                        <Link to={'/'}><li>Pesquisar</li></Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
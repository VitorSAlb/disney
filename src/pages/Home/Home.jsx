import React from "react";

import './Home.css'
import Footer from '../../components/Footer/Footer'
import Header from "../../components/Header/Header";
import Api from "../../API/Api";

const Home = () => {

    return(
        <>
            <Header/>

            <main>  
                    <Api/>
            </main>

            <Footer/>
        </>
    )
}

export default Home;
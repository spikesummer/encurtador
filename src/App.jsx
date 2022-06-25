import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Banner } from "./components/banner/Banner";
import { Anuncios } from "./components/anuncios/Anuncios";
import { Faq } from "./components/faq/Faq";

const App = () => {
    return (
        <div>
            <Header/>
            <Banner />
            <Anuncios />
            <Faq />
            <Footer />
        </div>
    )
}

export default App;
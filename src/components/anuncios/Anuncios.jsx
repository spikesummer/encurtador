import React from "react";
import { Anuncio } from "./Anucio";
import { Container } from "./anunciosStyled";
import img1 from "../../assets/item1.png";
import img2 from "../../assets/item2.png";
import img3 from "../../assets/item3.png";

export const Anuncios = () => {
    return (
        <Container>
            <h1>O encurtador de links feito para você aumentar os cliques</h1>
            <div className="content">
                <Anuncio
                    img={img1}
                    title="Link fácil"
                    text="Com mais cliques, aumenta o reconhecimento da marca e a confiança do consumidor"
                />
                <Anuncio
                    img={img2}
                    title="Aumente os resultados"
                    text="Temos uma ferramenta poderosa para você conseguir extrair o máximo dos seus links, fazer análises e tomar decisões mais inteligentes."
                />
                <Anuncio
                    img={img3}
                    title="Link personalizado"
                    text="Você pode criar links e ainda personalizar de forma simples e fácil para aumentar ainda os acessos."
                />
            </div>
        </ Container>
    )
}
import React from "react";
import { Container} from "./headerStyled";
import {Logo} from "./Logo";

export const Header = () => {
    return(
        <Container>
            <Logo/>
            <a href="#home">Encurtar</a>
            <a href="#home">Preços</a>
        </Container>
    )
}
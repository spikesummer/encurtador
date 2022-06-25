import React from "react";
import { Container } from "./searchStyled";

export const Search = () => {
    return (
        <Container>
            <input type="search" name="" id="" placeholder="Digite sua url..."/>
            <button type="submit">Encurtar</button>
        </Container>
    )
}
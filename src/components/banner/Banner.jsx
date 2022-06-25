import React from "react";
import { Container } from "./bannerStyled";
import { Search } from "../search/Search";
import { Info } from "./Info";
import { Grafico } from "./Grafico";

export const Banner = () => {
    return (
        <Container>
            < Info />
            < Grafico />
            < Search />
        </Container>
    )
}
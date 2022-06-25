import React from "react";
import { Container } from "./anuncioStyled";

export const Anuncio = props => {
    return (
        <Container>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </ Container>
    )
}
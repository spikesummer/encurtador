import React from "react";
import { Container } from "./faqStyled";
import { Promo } from "./Promo";
import { DropBox } from "./DropBox";

export const Faq = () =>{
    return(
        <Container>
            <Promo/>
            <DropBox />
        </ Container>
    )
}
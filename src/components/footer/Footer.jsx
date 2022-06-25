import React from "react";
import { Container } from "./footerStyled";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <Container>
            <p>@DevMentor Brasil - Todos direitos reservados 2022</p>
            <div>
                < FaInstagram className="icons" />
                < FaFacebook className="icons" />
                < FaYoutube className="icons" />
            </div>
        </ Container>
    )
}
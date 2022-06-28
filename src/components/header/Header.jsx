import React from "react";
import { Container } from "./headerStyled";
import { Logo } from "./Logo";
import { Menu } from "./Menu";

export const Header = () => {
    return (
        <Container>
            <Menu />
            <Logo />
            <a href="#home">Encurtar</a>
            <a href="#home">Preços</a>
        </Container>
    )
}
import React from "react";
import { Container, Modal } from "./menuStyled"
export const Menu = () => {
    return (
        <Container>
            <span className="sandwich"></span>
            <span className="sandwich"></span>
            <span className="sandwich"></span>
            <Modal>
                <span></span>
                <span></span>
            </Modal>
        </Container>
    )
}
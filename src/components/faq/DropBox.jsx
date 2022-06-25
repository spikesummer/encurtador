import React from "react";
import { Container } from "./dropBoxStyled";
import { AiFillCaretRight } from "react-icons/ai";

export const DropBox = () => {

    const data = [
        {
            question: "O que é um encurtador de URL?",
            response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis."
        },
        {
            question: "Benefícios de um URL curto",
            response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis."
        },
        {
            question: "Recursos da plataforma",
            response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis."
        },
        {
            question: "O que é um encurtador de URL personalizado?",
            response: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices et tortor non quam duis."
        }
    ];

    const fillData = () => {
        return (
            <>
                {
                    data.map((item, index) => {
                        return (
                            <nav key={index}>
                                <label for={`touch${index}`}>
                                    <span><AiFillCaretRight className="icon" />{item.question}</span>
                                </label>
                                <input type="checkbox" id={`touch${index}`} />
                                <ul className="slide">
                                    <li>
                                        <a href="#home">{item.response}</a>
                                    </li>
                                </ul>
                            </nav>
                        )

                    })
                }
            </>
        )
    }

    return (
        <Container>
            <h1>Perguntas frequentes</h1>
            {fillData()}
        </Container>
    )
}
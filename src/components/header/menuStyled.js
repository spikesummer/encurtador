import styled from "styled-components";

export const Container = styled.div`
    margin-left: 2.625rem;
    display: none;
    padding-bottom: 0.313rem;
    cursor: pointer;
    
    @media (max-width: 48rem){
        display: block;
    }

    span.sandwich{
        height: 0.313rem;
        width: 4.125rem;
        background-color: black;
        display: flex;
        margin-top: 0.5rem;
        border-radius: 0.25rem;
        
        :nth-child(2){
            width: 3.313rem;
        }
    }

`;

export const Modal = styled.div`
        width: 100%;
        height: 100vh;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        background-color: red;
        z-index: 100;

        span{
            height: 0.313rem;
            width: 4.125rem;
            background-color: black;
            display: flex;
            margin-top: 0.5rem;
            border-radius: 0.25rem;
            transform: rotateZ(45deg);
        }
`;
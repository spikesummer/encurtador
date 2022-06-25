import styled from "styled-components";

const gray2 = "#F0F1F6";
const blueMarine = "#1D2730";
// const white = "FFFFFF";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 90rem;
    width: 100%;
    margin: auto;
    background-color: ${gray2};
    align-items: center;
    padding: 0 5.5rem 9.375rem;

    @media (max-width: 48rem){
        padding: 0 1rem 9.375rem;
    }

    h1{
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 3.379rem;
        color: ${blueMarine};
        display: flex;
        margin-top: 8.5rem;
        max-width: 35.25rem;
        text-align: center;

        @media (max-width: 48rem){
            font-size: 1.5rem;
        }
    }

    & .content{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        max-width: 90rem;
        width: 100%;
        justify-content: space-around;
        margin-top: 3.75rem;
    }
`;
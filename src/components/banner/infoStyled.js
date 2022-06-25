import styled from 'styled-components'

const blueMarine = "#1D2730";
const blueLight = "#07C9C9";
const white = "#FFFFFF";

export const Container = styled.div`
    background-color: ${white};
    position: relative;
    max-width: 31rem;
    padding: 0.625rem;
    margin-bottom: 3.125rem;
    
    h1{
        color: ${blueMarine};
        font-size: 3rem;
        font-weight: 700;
        line-height: 4.5rem;
        margin-top: 6.84rem;

        @media (max-width: 48rem){
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    p{
        color: ${blueMarine};
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 1.688rem;
        margin-top: 1.035rem;

        @media (max-width: 48rem){
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    a{
        margin-top: 3.125rem;
        background-color: ${blueLight};
        color: ${white};
        font-size: 1.375rem;
        font-weight: 700;
        text-decoration: none;
        width: 17rem;
        height: 2.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.25rem;
    }
`;
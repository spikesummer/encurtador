import styled from 'styled-components'

const blueMarine = "#1D2730";
const white = "FFFFFF";

export const Container = styled.footer`
    background-color: ${white};
    max-width: 90rem;
    margin: 0 auto;
    height: 6.25rem;
    display: flex;
    flex-direction: column;
    padding: 0.8rem 0;
    text-align: center;

    div, p {
        margin: auto;
    }

    & div .icons{
        color: ${blueMarine};
        font-size: 1.563rem;
        margin: 0 0.5rem;
    }
    p{
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${blueMarine};
    }
`;
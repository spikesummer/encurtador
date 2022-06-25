import styled from 'styled-components'

const blueMarine = "#1D2730";
const white = "FFFFFF";

export const Container = styled.header`
    background-color: ${white};
    display: flex;
    max-width: 90rem;
    margin: 0 auto;
    align-items: flex-end;
    padding: 0 5.438rem;

    @media (max-width: 48rem){
        padding: 0 1rem;
    }

    svg{
        width: 12.313rem;
        height: 2.625rem;
        margin-top: 5.125rem;
    }
    
    a{
        text-decoration: none;
        font-size: 1.125rem;
        color: ${blueMarine};
        line-height: 1.318rem;
        font-weight: 400;
        margin-left: 2.813rem;
    }
`;

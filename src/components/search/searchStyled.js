import styled from 'styled-components'

const blueMarine = "#1D2730";
const blueLight = "#07C9C9";
const white = "#FFFFFF";

export const Container = styled.div`
    background-color: ${blueLight};
    position: relative;
    display: flex;
    padding: 2.75rem;
    max-width: 65.438rem;
    margin: 0 auto;
    border-radius: 0.5rem;
    width: 100%;
    height: 8.188rem;
    bottom: -4.125rem;
    
    input{
        width: 100%;
        height: 2.75rem;
        margin-right: 0.75rem;
        border-radius: 0.25rem;
        letter-spacing: 0.055em;
        font-weight: 400;
        color: ${blueMarine};
        font-size: 1rem;
        border: none;
        outline: none;
        line-height: 1.188rem;
        padding: 0.75rem;

        &::placeholder{
            letter-spacing: 0.055em;
            font-weight: 400;
            color: ${blueMarine};
        }
    }

    button{
        border-radius: 0.25rem;
        color: ${white};
        background: ${blueMarine};
        width: 11.813rem;
        height: 2.75rem;
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 1.172rem;
        border: none;
        cursor: pointer;
    }
`;
import styled from 'styled-components'

const blueMarine = "#1D2730";
const blueLight = "#07C9C9";
const white = "#FFFFFF";

export const Container = styled.div`
    background-color: ${white};
    max-width: 35rem;
    margin: 7.25rem auto 0;
    display: flex;
    position: relative;
    flex-direction: column;
        
    h1{
        color: black;
        font-size: 2rem;
        font-weight: 700;
        line-height: 3rem;
        text-align: center;
    }

    p{
        color: ${blueMarine};
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
        margin: 0.5rem auto 0;
        text-align: center;
    }

    a{
        margin: 2.188rem auto 0;
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
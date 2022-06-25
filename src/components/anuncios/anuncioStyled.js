import styled from "styled-components";

const blueMarine = "#1D2730";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 21.875rem;
    margin-bottom: 3rem;
    
    img{
        width: 100%;
        height: 14.063rem;
    }

    h3{
        font-size: 1.5rem;
        text-align: left;
        font-weight: 700;
        color: black;
        line-height: 2.25rem;
        margin: 0.5rem 0;
    }

    p{
        font-size: 1rem;
        color: ${blueMarine};
        line-height: 1.5rem;
    }
`;
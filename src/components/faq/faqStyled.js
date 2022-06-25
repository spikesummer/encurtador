import styled from 'styled-components'

// const white = "#FFFFFF";

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 90rem;
    width: 100%;
    margin: auto;
    padding: 0 5.438rem;

    @media (max-width: 48rem){
        padding: 0 1rem;
    }
`;
import styled from 'styled-components'

const white = "#FFFFFF";

export const Container = styled.section`
    background-color: ${white};
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    position: relative;
    margin: auto;
    max-width: 90rem;
    width: 100%;
    justify-content: space-between;
    padding: 0 5.438rem;

    @media (max-width: 48rem){
        padding: 0 1rem;
    }
`;
import styled from "styled-components";

const gray1 = "#E5E5E5";

export const Container = styled.div`
    margin: 10.75rem auto 9.75rem;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;

        @media (max-width: 48rem){
            margin-bottom: 2.5rem;
            margin-top: 6.641rem;
        }

    h1{
        color: black;
        margin: auto;
        line-height: 3.375rem;
        font-size: 2.25rem;
        font-weight: 700;
        text-align: center;

        @media (max-width: 48rem){
            font-size: 1.5rem;
            line-height: 2.253rem;
        }
    }

    li a {
        text-decoration: none;
        color: black;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5rem;
    }


    nav {
        max-width: 39.625rem;
        background: ${gray1};
        display: flex;
        margin: 1.125rem auto;
        border-radius: 0.25rem;
        flex-direction: column;
    }
    
    span {
        padding: 0.625rem;
        color: black;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
        display: flex;
        align-items: center;

        @media (max-width: 48rem){
            font-size: 0.875rem;
            line-height: 1.314rem;
            padding: 0.313rem;
        }
        
        .icon{
            font-size: 1.8rem;
            min-width: 2rem;
            margin-right: 0.3rem;
            transition: 0.35s all linear;

            @media (max-width: 48rem){
                font-size: 1.5rem;
                min-width: 1.5rem;
            }
        }
    }

    span:active .icon{
        transform: rotate(90deg);
    }

    .rotate{
        transform: rotate(90deg);
    }

    .slide {
        clear:both;
        background-color: white;
        height:0px;
        overflow: hidden;
        transition: height .4s ease;
    }

    .slide li{
        padding :20px;
    }

    #touch0,
    #touch1,
    #touch2,
    #touch3{
        position: absolute;
        opacity: 0;
        height: 0px;
    }    

    #touch0:checked + .slide,
    #touch1:checked + .slide,
    #touch2:checked + .slide,
    #touch3:checked + .slide {
        height: 100px;

        @media (max-width: 48rem){
            height: 110px;
        }
    }    
`;
import styled from "styled-components";

export const Background = styled.div `
    background-color: #4B69FD;
`

export const Container = styled.main `
    background-color: #FFF9EB;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    border-top: 2px solid #000000;
    height: 100%;
`

export const Titulo = styled.h1 `
    color: #4B69FD;
    font-size: 32px;
    line-height: 48px;
    font-weight: 600;
    text-align: center;
    padding: 30px 0;
    margin: 0;

    @media screen and (max-width: 800px) {
        font-size: 20px;
        line-height: 30px;
    }
`
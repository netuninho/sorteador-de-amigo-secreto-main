import styled from "styled-components";

export const Button = styled.button `
    background-color: #FE652B;
    border-top: 2px solid #000000;
    border-left: 2px solid #000000;
    border-radius: 50px;
    box-shadow: 4px 4px 0px 0px #000000;


    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;

    color: #FFFFFF;
    font-weight: 600;
    line-height: 30px;
    font-size: 20px;

    width: 300px;
    height: 80px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        box-shadow: 2px 2px 0px 0px #000000;
        font-size: 16px;
        line-height: 24px;
        width: 155px;
        height: 64px;
        gap: 0;
    }
`

export const Imagem = styled.img `
    @media screen and (max-width: 800px) {
        display: none;
    }
`
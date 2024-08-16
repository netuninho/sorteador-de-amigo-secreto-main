import styled from "styled-components";
import logoDesk from "../../img/logo.png";
import logoMobile from "../../img/logo-pequeno.png";

export const Header = styled.header `
    background-color: #4B69FD;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding-top: 123px
    }
` 

export const Logo = styled.div `
    width: 351px;
    height: 117px;
    margin-bottom: 190px;
    background-image: url(${logoDesk});
    background-repeat: no-repeat;

    @media screen and (max-width: 800px) {
        margin-bottom: 0;
        width: 235px;
        height: 199px;
        padding-top: 60px;
        background-image: url(${logoMobile});
    }
` 

export const Imagem = styled.img `
    z-index: 1;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`
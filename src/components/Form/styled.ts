import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    justify-content: center;
    margin-top: 34px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`

export const Input = styled.input `
    box-shadow: 4px 4px 0px 0px #000000;
    padding: 17px 20px;
    width: 500px;
    color: #0000004D;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;

    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border: 2px solid #000000;

    @media screen and (max-width: 800px) {
        width: 300px;
        height: 48px;
        font-size: 14px;
        line-height: 21px;
        border-radius: 50px;
        padding: 0;
        box-shadow: 2px 2px 4px 0px #00000033;
    }
`
export const Button = styled.button `
    background-color: #C4C4C4;
    box-shadow: 4px 4px 0px 0px #000000;
    padding: 17px 20px;
    color: #444444;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    cursor: pointer;
    width: 200px;
    height: 80px;

    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border: 2px solid #000000;
    border-right: 3px;

    @media screen and (max-width: 800px) {
        border-radius: 50px;
        padding: 0;
        width: 150px;
        height: 48px;
        margin-top: 8px;
        box-shadow: 2px 2px 0px 0px #000000;
        font-size: 16px;
    }
`

import styled from "styled-components";

export const Footer = styled.footer `
    background-color: #FFF9EB;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 140px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 24px;
    }
` 
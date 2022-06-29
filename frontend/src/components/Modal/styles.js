import styled from "styled-components";

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(5px);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    max-width: 450px;
    width: 100%;

    h1 {
        font-size: 22px;
        color: ${({ theme, danger }) =>
            danger ? theme.colors.danger.main : theme.colors.gray[900]};
    }

    p {
        margin-top: 0.5rem;
    }
`;

export const Footer = styled.footer`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-button {
        background: transparent;
        border: none;
        font-size: 1rem;
        margin-right: 0.5rem;
        color: ${({ theme }) => theme.colors.gray[200]};
    }
`;

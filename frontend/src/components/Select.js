import styled from "styled-components";

export default styled.select`
    width: 100%;
    height: 52px;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: 0;
    outline: none;
    padding: 0 1rem;
    font-size: 1rem;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.primary.main} !important;
    }
`;

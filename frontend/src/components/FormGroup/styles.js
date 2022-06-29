import styled from "styled-components";

export const Container = styled.div`
    & + & {
        margin-top: 1rem;
    }
    small {
        color: ${({ theme }) => theme.colors.danger.main};
        margin-top: 0.5rem;
        display: block;
        font-size: 12px;
    }
`;

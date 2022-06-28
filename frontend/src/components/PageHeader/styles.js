import styled from "styled-components";

export const Container = styled.header`
    margin-bottom: 24px;
    a {
        display: flex;
        text-decoration: none;
        align-items: center;
        img {
            margin-right: 8px;
            transform: rotate(-90deg);
        }
        span {
            font-weight: bold;
            color: ${({ theme }) => theme.colors.primary.main};
        }
    }
    h1 {
        font-size: 1.5rem;
    }
`;

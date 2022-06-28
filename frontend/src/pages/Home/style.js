import styled from "styled-components";

export const Container = styled.div`
    margin-top: 32px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

    strong {
        font-size: 24px;
        color: #222;
    }
    a {
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        border-radius: 4px;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary.main};
        padding: 8px 16px;
        text-decoration: none;
        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }
`;
export const InputSearchContainer = styled.div`
    width: 100%;

    input {
        background: #fff;
        width: 100%;
        border-radius: 25px;
        height: 50px;
        border: none;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
        outline: none;
        padding: 0 1rem;

        &::placeholder {
            color: #bcbcbc;
        }
    }
`;

export const ListContainer = styled.div`
    margin-top: 24px;

    header {
        margin-top: 1rem;
        margin-bottom: 8px;

        button {
            background: none;
            border: none;
            display: flex;
            align-items: center;
        }

        span {
            font-size: 1rem;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.primary.main};
            margin-right: 8.5px;
        }
    }
`;
export const Card = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
        margin-top: 14px;
    }

    .info {
        .contact-name {
            display: flex;
            align-items: center;

            small {
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                text-transform: uppercase;
                padding: 4px;
                border-radius: 4px;
                margin-left: 8px;
            }
        }
        span {
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }
    .actions {
        display: flex;
        align-items: center;
        button {
            background: transparent;
            border: none;
            margin-left: 8px;
        }
    }
`;

import styled from '@emotion/styled'; 
import { Link } from "react-router-dom";

export const MoviesItem = styled.li`
    display: flex;
    align-items: center; 

    &>svg{
        fill: ${({ theme }) => theme.colors.accentColor};
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }
`
export const MoviesLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkblue};
    font-size: 16px;
    font-weight: 500;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover, 
    :focus {
        color: ${({ theme }) => theme.colors.accentColor};
    }
`
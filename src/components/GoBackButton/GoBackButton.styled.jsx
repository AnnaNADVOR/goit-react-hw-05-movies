import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const BackLink = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    font-size: 20px; 
    font-weight: 500;
    border-radius: 4px; 
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.lightgray};
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover, 
    :focus {
    color: ${({ theme }) => theme.colors.darkblue};
    }

`

import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const ButtonContainer = styled.div`
    padding: 20px 20px 0 20px; 
`
export const AdditionalSection = styled.section`
    padding-top: 50px;
    padding-bottom: 50px; 
    background-color: ${({ theme }) => theme.colors.lightgray};
`
export const Title = styled.h2`
    text-align: center;
    margin-bottom: 30px; 
    color: ${({ theme }) => theme.colors.blueGray};

`
export const AdditionalList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin-bottom: 30px; 
`
export const AdditionalItem = styled.li`
   &:not(:last-child){
    margin-right: 30px; 
  }
`
export const AdditionalLink = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding: 5px 10px; 
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: 500; 
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active{
        color: ${({ theme }) => theme.colors.lightgray};
        background-color: ${({ theme }) => theme.colors.accentColor};
    }
`    
// export const Info = styled.div`
// margin: 30px 0;

    
// `
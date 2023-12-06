import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Logo = styled.div`
    display: flex;
    align-items: center;

    &>svg {
        width: 30px;
        height: 30px; 
        fill: ${({ theme }) => theme.colors.lightgray};
        margin-right: 10px;  
    }   
`
export const LogoTitle = styled.p`
   color: ${({ theme }) => theme.colors.lightgray};
   font-size: 30px;
   font-weight: 700;
`
export const LogoTitlePart = styled.span`
   color: ${({ theme }) => theme.colors.accentColor};

`
export const Nav = styled.nav`
    display: flex;
    margin-right: 30px;
`
export const NavList = styled.ul`
    display: flex;
    list-style: none; 
`
export const NavItem = styled.li`
  &:not(:last-child){
    margin-right: 30px;
    margin-left: 30px; 
  }
`

export const Link = styled(NavLink)`
    text-decoration: none;
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    color:${({ theme }) => theme.colors.lightgray};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active{
        color:${({ theme }) => theme.colors.accentColor};
        border-bottom: 4px solid ${({ theme }) => theme.colors.accentColor};
    }
`
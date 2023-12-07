import styled from '@emotion/styled';

export const  HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.colors.darkblue};
`
export const  SuspenseInfo = styled.div`
    margin-top:20px;
    margin-left: 20px; 
    font-size: 20px;
    color: ${({ theme }) => theme.colors.darkblue};
`
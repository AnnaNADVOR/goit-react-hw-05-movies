import styled from '@emotion/styled';

export const InfoContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;
    padding: 60px; 
    font-size: 30px; 
    font-weight: 500;
    color: ${({ theme }) => theme.colors.blueGray};
`

export const InfoTitle = styled.p`
    display: inline-flex; 
    font-size: 50px;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: 20px; 
`
export const InfoCode = styled.span`
    display:flex;
    align-items: center;
    margin-right: 10px;
    color:${({ theme }) => theme.colors.accentColor};
  
    &>svg {
        width: 50px; 
        height: 50px; 
        fill: ${({ theme }) => theme.colors.accentColor};
    }
    
`
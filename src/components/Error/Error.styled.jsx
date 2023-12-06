import styled from '@emotion/styled' 

export const ErrorContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;
    padding: 60px; 
    font-size: 30px; 
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkbue};
    

    &>svg {
        width: 80px; 
        height: 80px; 
        margin-bottom: 20px;
        fill: ${({ theme }) => theme.colors.accentColor};
    }

`
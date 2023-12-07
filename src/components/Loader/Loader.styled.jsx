import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center; 
    text-align: center;
    justify-content: center;
    padding: 60px; 
    color: ${({ theme }) => theme.colors.darkblue};
        
    &>svg {
        margin-bottom: 20px;              
    }

`
export const Info = styled.p`
    font-size: 20px; 
    text-align: center;    
`
import styled from '@emotion/styled';

export const Card = styled.div`
    display: flex; 
    gap: 50px;

    &>img{
        border-radius: 4px; 
        width: 300px;
        height: 450px;
        object-fit: cover;
        box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    }
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`
export const MainTitle = styled.h1`
    color: ${({ theme }) => theme.colors.accentColor};
    margin-bottom: 10px;    
`
export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.blueGray};
    margin-bottom: 10px;
`
export const Text = styled.p`
    color: ${({ theme }) => theme.colors.darkblue};
    font-size: 16px;
    margin-bottom: 10px;
`
export const TextAccent = styled.span`
    font-weight: 700; 
    margin-right: 5px;
`
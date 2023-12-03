import styled from '@emotion/styled'  

export const Poster = styled.div`
    height:450px; 
    width: 300px; 
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    
    &>svg {
        width: 150px;
        height: 150px;
        fill: gray;    
    }
`
export const DefaultText = styled.p`
    margin-top: 20px;
    font-size: 50px;
    font-weight: 700;
    color: gray;
`
import styled from '@emotion/styled';

export const ActorCard = styled.li`
    width: 250px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    border-radius:4px;

    &>img{
        width:250px; 
        height:350px;
        object-fit: cover;       
    }
`
export const ActorInfo = styled.div`
    padding: 20px 24px;
    text-align: center; 
    color:${({ theme }) => theme.colors.darkblue};   
`
export const ActorName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
`
export const InfoText = styled.p`
    font-size: 16px;

    &>span{
        font-weight: 600;
        margin-right: 5px;
    }
`



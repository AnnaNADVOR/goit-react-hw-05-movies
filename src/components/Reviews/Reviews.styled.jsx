import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
    list-style: none;
    color: ${({ theme }) => theme.colors.darkblue};
    margin-top: 30px;    
`
export const ReviewsItem = styled.li`
&:not(:last-child) {
    margin-bottom: 20px; 
}
`
export const ReviewAuthor = styled.p`
    margin-bottom: 10px;
    
    &>span{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 5px;
    }
`
export const ReviewInfo = styled.p`
    font-size: 16px; 
`
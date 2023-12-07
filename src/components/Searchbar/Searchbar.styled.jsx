import styled from '@emotion/styled';


export const FormSection = styled.section`
    padding-top:20px;
`
export const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;     
    margin: 0 auto;   
    position: relative;
    overflow: hidden;
`
export const SearchField = styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 8px 8px 45px;
    border: 1px solid ${({ theme }) => theme.colors.darkblue};
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0,0,0,.15);
    transition: border-color.25s cubic-bezier(.4,0,.2,1);

    &:hover, :focus {
        border-color:${({ theme }) => theme.colors.accentColor}; 
    }
`
export const SearchButton = styled.button`
    position: absolute;
    left: 8px;
    display:flex; 
    top: 50%; 
    transform: translateY(-50%);
    border: none;
    background-color: inherit;
    cursor: pointer; 
    margin:0;
    padding:0;
    text-align: center; 
    transition: color .25s cubic-bezier(.4,0,.2,1);

    &:hover>svg, :focus>svg {
        fill:${({ theme }) => theme.colors.accentColor}; 
    }

    &>svg {
        width: 25px;
        height: 25px; 
        fill:  ${({ theme }) => theme.colors.blueGray};
    }
`
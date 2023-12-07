import {ThreeDots } from 'react-loader-spinner';
import {
    LoaderContainer,
    Info,
} from './Loader.styled';
function Loader() {
    return (
        <LoaderContainer>
            <ThreeDots color='#c24d2c'/> 
            <Info>Soon...</Info>
        </LoaderContainer>
      
        
    )
}

export default Loader;
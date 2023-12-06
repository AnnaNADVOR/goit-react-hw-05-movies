import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Suspense } from "react";
import { getDetails } from "../../services/api"
import STATUS from "../../constants/STATUS";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Eror";
import GoBackButton from "components/GoBackButton/GoBackButton";
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';

import {
    ButtonContainer,
    AdditionalSection,
    Title,
    AdditionalList,
    AdditionalLink,
    AdditionalItem,
} from "./MovieDetails.styled"


function MovieDetails  ()  {
    const location = useLocation();
    const prevLocationRef = useRef(location.state?.from ?? '/movies');

    const { movieId } = useParams(); 
    const [details, setDetails] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [error, setError] = useState('');
        
    useEffect(() => {
        setStatus(STATUS.PENDING);
        if (!movieId) return;
        
        getDetails(movieId).then(data => {
          
            setDetails(data);
            setStatus(STATUS.RESOLVED);
        }).catch(err => {
            setError('Oops! Something went wrong. Try again.');
            setStatus(STATUS.REJECTED);
        })         
    }, [movieId])

    if (status === STATUS.RESOLVED) {
        return (
            <>
                <ButtonContainer>
                   <GoBackButton location={prevLocationRef.current}/> 
                </ButtonContainer>
                        <Section>
                    <Container>
                       <MovieDetailsCard details={details}/>   
                    </Container>
                    </Section>
                                      <AdditionalSection>
                    <Container>
                <Title>Additional Info</Title>
                <AdditionalList>
                    <AdditionalItem>
                        <AdditionalLink to="cast">Cast</AdditionalLink>                        
                    </AdditionalItem>
                    <AdditionalItem>
                        <AdditionalLink to="reviews">Reviews</AdditionalLink>                        
                    </AdditionalItem>
                </AdditionalList>
                <Suspense fallback={<div>Information search...</div>}>
                  <Outlet />  
                        </Suspense>  
                 </Container>
                    </AdditionalSection>        
             </>      
            )
    } 

    if (status === STATUS.PENDING) {
        return <Loader/>
    }

    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }
}

export default MovieDetails; 
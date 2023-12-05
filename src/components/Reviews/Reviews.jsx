import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getReviews } from "services/api";
import STATUS from "constants/STATUS";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Eror";

function Reviews() {

    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE); 
    const [error, setError] = useState("");

    useEffect(() => {
        setStatus(STATUS.PENDING)
        getReviews(movieId).then(data => { 
            setReviews(data.results);
            setStatus(STATUS.RESOLVED);
        }).catch(error => {
            setError('Oops! Something went wrong. Try again.')
        })
    }, [movieId])

    if (status === STATUS.RESOLVED) {
       return (
        <>
        {reviews.length ? (
            <ul>
                {reviews.map(review =>
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>)}
            </ul>
        )
            : <p>Sorry! We don't have any reviews for this movie.</p>}
        </>)  
    }

    if (status === STATUS.PENDING) {
        return <Loader/>
    }
           
    if (status === STATUS.REJECTED) {
        return <Error>{error}</Error>
    }   
}

export default Reviews; 
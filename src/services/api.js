const API_KEY = '8ee92906979787c07710c6746d1a8fbe';
const BASE_URL = 'https://api.themoviedb.org/3';

export function getTrendingMovies() {
    return  fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getDetails(id) {
    return fetch(`${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getCast(id) {
    return fetch(`${BASE_URL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getReviews(id) {
    return fetch(`${BASE_URL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`)
    .then(response => response.json())
}

export function getMoviesByKeyword(keyword) {
    return fetch(`${BASE_URL}/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1}`)
        .then(response => response.json())
  
}
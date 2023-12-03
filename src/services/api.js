
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
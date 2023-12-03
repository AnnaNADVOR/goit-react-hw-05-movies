import { NavLink, Route, Routes } from "react-router-dom";
// import { lazy } from 'react';
import Home from "pages/Home";
import MovieDetails from "../pages/MovieDetails"

// const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink> 
        </li>
        <li>
          <NavLink to="movies">Movies</NavLink> 
        </li>         
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<MovieDetails/>} />
      </Routes>
    
    </div>
  );
};

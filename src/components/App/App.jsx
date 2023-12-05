import { NavLink, Route, Routes } from "react-router-dom";
// import { lazy } from 'react';
import Home from "pages/Home";
import MovieDetails from "../../pages/MovieDetails";
import Movies from "pages/Movies";
import Reviews from "components/Reviews/Reviews";
import CastList from "components/CastList/CastList";
import Layout from "components/Layout/Layout";

// const Home = lazy(() => import('pages/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastList />} /> 
          <Route path="reviews" element={<Reviews />} />
        </Route>
        </Route>        
      </Routes>
    
    </>
  );
};

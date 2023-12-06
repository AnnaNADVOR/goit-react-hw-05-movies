import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "components/Layout/Layout";

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const CastList = lazy(() => import('components/CastList/CastList'));

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

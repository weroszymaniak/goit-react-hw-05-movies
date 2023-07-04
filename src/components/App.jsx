import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));
const Home = lazy(() => import('../pages/Home/Home'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Rewievs = lazy(() => import('../components/Rewievs/Rewievs'));

const App = () => {
  return (
    <Suspense fallabck={Loader}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="/movies/:id/cast" element={<Cast />} />
          <Route path="/movies/:id/reviews" element={<Rewievs />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default App;

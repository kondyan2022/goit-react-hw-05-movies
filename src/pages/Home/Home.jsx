import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from 'utils/moviedb-api';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await getTrending();
        setTrendingList(results.map(({ id, title }) => ({ id, title })));
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1> Trending movies </h1>
      <MovieList movies={trendingList} path={'/movies/'} />
    </>
  );
};

export default Home;

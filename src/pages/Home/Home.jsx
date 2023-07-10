import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { getTrending } from 'utils/moviedb-api';

const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { results } = await getTrending();
        console.log(results);
        setTrendingList(results.map(({ id, title }) => ({ id, title })));
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <div> Trending movies </div>
      <MovieList movies={trendingList} path={'/movies/'} />
    </>
  );
};

export default Home;

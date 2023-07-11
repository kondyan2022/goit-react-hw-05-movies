import { useEffect, useState } from 'react';
import { getSearchMovies } from 'utils/moviedb-api';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const getSearchMoviesList = async query => {
      try {
        const { results } = await getSearchMovies(query);
        setMovieList(results.map(({ id, title }) => ({ id, title })));
      } catch (error) {
        console.log(error);
      }
    };

    if (query === '') {
      setMovieList([]);
      return;
    }
    getSearchMoviesList(query);
  }, [query]);

  const handleSubmit = values => {
    if (query !== values.query) {
      setSearchParams(values.query === '' ? {} : { query: values.query });
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} queryString={query} />
      <MovieList movies={movieList} />
      {query && movieList.length === 0 && <div>No matches. Try again.</div>}
      {!query && <div>Please, input key words for search.</div>}
    </>
  );
};

export default Movies;

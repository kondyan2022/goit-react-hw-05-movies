import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieList.style';

const MovieList = ({ movies, path = '' }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <MovieLink to={`${path + id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;

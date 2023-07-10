import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, path = '' }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`${path + id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieList;

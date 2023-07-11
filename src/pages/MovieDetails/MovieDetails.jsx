import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/moviedb-api';
import image from '../../noposter.png';
import { BackLink, FilmCard } from './MovieDaetal.styled';

const POSTER_IMAGE_PATH = 'https://image.tmdb.org/t/p/w342';

const MovieDetails = () => {
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState();
  const [posterImg, setPosterImg] = useState('');
  const [genres, setGenres] = useState('');
  const [overview, setOverview] = useState('');
  const [userScore, setUserScore] = useState();

  const { movieId } = useParams();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovie = async id => {
      try {
        const {
          title,
          poster_path,
          genres,
          release_date,
          overview,
          vote_average,
        } = await getMovieDetails(id);
        setTitle(title);
        setReleaseYear(release_date.slice(0, 4));
        setGenres(genres.map(({ name }) => name).join(' '));
        setOverview(overview);
        setPosterImg(poster_path ? POSTER_IMAGE_PATH + poster_path : image);
        setUserScore(Math.round(vote_average * 10));
      } catch (error) {
        console.log(error);
      }
    };
    getMovie(movieId);
  }, [movieId]);

  return (
    <>
      <BackLink to={backLocationRef.current}> Go back</BackLink>
      <FilmCard>
        <img src={posterImg} alt={title} width="342" />
        <div>
          <h2>
            {title} ({releaseYear})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>

          <p>{genres}</p>
        </div>
      </FilmCard>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading sub...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

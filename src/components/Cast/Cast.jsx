import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import testCastList from 'testcast.json';
import { getCasts } from 'utils/moviedb-api';

const PROFILE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w185';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCastList = async id => {
      try {
        const { cast } = await getCasts(id);
        setCastList(
          cast.map(({ id, name, character, profile_path }) => ({
            id,
            name,
            character,
            profile_path,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getCastList(movieId);
  }, [movieId]);
  return (
    <ul>
      {castList.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={PROFILE_IMAGE_PATH + profile_path}
              alt={name}
              width="185"
            />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;

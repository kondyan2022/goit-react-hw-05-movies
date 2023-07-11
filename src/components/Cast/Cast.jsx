import CastItem from 'components/CastItem/CastItem';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from 'utils/moviedb-api';
import { CastList } from './Cast.styled';

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
    <CastList>
      {castList.map(({ id, name, character, profile_path }) => (
        <CastItem
          key={id}
          name={name}
          character={character}
          profile_path={profile_path}
        />
      ))}
    </CastList>
  );
};

export default Cast;

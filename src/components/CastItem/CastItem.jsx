import image from '../../nophoto.jpg';

const PROFILE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w185';

const CastItem = ({ id, name, character, profile_path }) => {
  const imagePath = profile_path ? PROFILE_IMAGE_PATH + profile_path : image;

  return (
    <li>
      <img src={imagePath} alt={name} width="185" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

export default CastItem;

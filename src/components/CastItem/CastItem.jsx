import image from '../../nophoto.jpg';
import PropTypes from 'prop-types';

const PROFILE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w185';

const CastItem = ({ name, character, profile_path }) => {
  const imagePath = profile_path ? PROFILE_IMAGE_PATH + profile_path : image;

  return (
    <li>
      <img src={imagePath} alt={name} width="185" />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

CastItem.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  profile_path: PropTypes.string,
};

export default CastItem;

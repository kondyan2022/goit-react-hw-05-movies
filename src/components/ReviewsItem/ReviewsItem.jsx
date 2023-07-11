import PropTypes from 'prop-types';

const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
export default ReviewsItem;

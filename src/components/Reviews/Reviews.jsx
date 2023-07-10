import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'utils/moviedb-api';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsList = async id => {
      try {
        const { results } = await getReviews(id);
        setReviewsList(
          results.map(({ id, author, content }) => ({
            id,
            author,
            content,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    };
    getReviewsList(movieId);
  }, [movieId]);
  return (
    <ul>
      {reviewsList.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;

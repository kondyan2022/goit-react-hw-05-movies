import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
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
    <>
      <ul>
        {reviewsList.map(({ id, author, content }) => (
          <ReviewsItem key={id} author={author} content={content} />
        ))}
      </ul>
      {reviewsList.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
export default Reviews;

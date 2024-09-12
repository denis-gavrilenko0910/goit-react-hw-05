import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/theMovieDB";

export default function MovieReviews() {
  const { movieId } = useParams();

  const [reviews, setReview] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const fetchMovies = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setReview(results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <>
      <h2>MovieReviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>no reviews</p>
      )}
    </>
  );
}

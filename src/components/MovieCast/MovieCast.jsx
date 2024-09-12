import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../service/theMovieDB";
import defaultImage from "../../assets/no_image.png";

export default function MovieCast() {
  const { movieId } = useParams();

  const [casts, setCast] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const fetchMovies = async () => {
      try {
        const { cast } = await getMovieCredits(movieId);

        setCast(cast);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchMovies();
  }, [movieId]);
  return (
    <>
      <h2>MovieCast</h2>
      <ul>
        {casts.map((cast) => {
          return (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImage
                }
                alt={cast.original_name}
              />
              <p>{cast.original_name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

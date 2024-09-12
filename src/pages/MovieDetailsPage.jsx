import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../service/theMovieDB";
import defaultImage from "../assets/no_image.png";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const fetchMovies = async () => {
      try {
        const data = await getMovieDetails(movieId);

        setMovie(data);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <Link to={goBack.current || "/"}>Go Back</Link>
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImage
            }
            alt={movie.title}
          />
          <h1>{movie.title}</h1>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(({ name }) => {
              return <li key={name}>{name}</li>;
            })}
          </ul>
        </div>
      )}
      <ul>
        <li>
          {" "}
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

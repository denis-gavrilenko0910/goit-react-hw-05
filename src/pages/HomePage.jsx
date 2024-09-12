import { useEffect, useState } from "react";
import { getTrandingMovies } from "../service/theMovieDB";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results } = await getTrandingMovies();
        setMovies(results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}

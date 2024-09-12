import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getSearchMovies } from "../service/theMovieDB";
import MovieList from "../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const query = searchParams.get("query");
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const { results } = await getSearchMovies(query);
        setMovies(results);
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchMovies();
  }, [searchParams]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.query.value;
    if (!inputValue) return;
    setSearchParams({ query: inputValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
}

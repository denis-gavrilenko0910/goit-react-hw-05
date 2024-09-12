import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link state={location} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

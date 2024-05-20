import {Link} from "react-router-dom";
import {FaStar} from "react-icons/fa";
const imagesURL = import.meta.env.VITE_IMG;

function MovieCard({movie, showLink = true}) {
    const formattedRating = movie.vote_average.toFixed(1);

    return (
        <div className={"movie-card"}>
            <img src={imagesURL + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>
                <FaStar/>{formattedRating}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
}

export default MovieCard;
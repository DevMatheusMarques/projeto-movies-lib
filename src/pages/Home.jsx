import {useState, useEffect} from 'react';
import MovieCard from '../components/MovieCard.jsx';
import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home() {
    const [topMovies, setTopMovies] = useState([]);
    const getTopRatedMovies = async (url) => {
        const resp = await fetch(url)
        const data = await resp.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedURL);
    }, []);

    return (
        <div className={"container"}>
            <h2 className={"title"}>Melhores Filmes:</h2>
            <div className={"movies-container"}>
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
}

export default Home;
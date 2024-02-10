async function MovieCard({ movie }: { movie: Movie }) {
    return (
        <li>{movie.title}</li>
    );
}

export default MovieCard;
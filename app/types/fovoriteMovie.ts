interface FavoriteMovie {
    id: number;
    movieID: number;
    backdrop_path: string;
    title: string;
    overview: string;
    poster_path: string;
    genre_ids: string[];
    release_date: string;
    vote_average: number;
    runtime: number;
    userId: number;
}

interface favouriteMovieVideo {
    id: number;
    key: string;
    type: string;
    favouriteMovieId: number;
}
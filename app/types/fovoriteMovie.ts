interface FavoriteMovie {
    id: number;
    backdrop_path: string;
    title: string;
    overview: string;
    poster_path: string;
    genre_ids: number[];
    release_date: string;
    vote_average: number;
    runtime: number;
    userId: number;
    videos: Video[];
}

interface favouriteMovieVideo {
    id: number;
    key: string;
    type: string;
    favouriteMovieId: number;
}
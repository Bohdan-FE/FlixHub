interface FavoriteMovie {
    id: number;
    movieId: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    userId: number;
}

interface FavoriteTV {
    id: number,
    tvId: number,
    name: string,
    poster_path: string,
    first_air_date: string;
    vote_average: number;
    userId: number;
}

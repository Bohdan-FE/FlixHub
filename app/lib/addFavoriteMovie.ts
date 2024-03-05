import { prisma } from './prisma';

export const addFavouriteMovie = async (favouriteMovie: any) => {
    await prisma.favoriteMovies.create(favouriteMovie)
}


import { prisma } from './prisma';

export const getFavouriteMovieById = async (userId: number, movieId: number) => {
    try {
        const data = await prisma.favoriteMovie.findMany({ where: { userId, movieId } })
        return data
    } catch (error) {
        console.log(error)
        return[{message: 'DB error'}]
    }
    
}
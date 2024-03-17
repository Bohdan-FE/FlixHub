'use server'

import { prisma } from './prisma';

export const getFavouriteMovies= async (userId: number): Promise<FavoriteMovie[]> => {
    try {
        const data = await prisma.favoriteMovie.findMany({where: {userId}})
        return data
    } catch (error) {
        console.log(error)
        return []
    }
    
}
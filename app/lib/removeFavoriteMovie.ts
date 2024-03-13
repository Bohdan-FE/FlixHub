'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';

export const removeFavouriteMovie = async (movieId: number, userId: number) => {
    try {
        await prisma.favoriteMovie.deleteMany({where: {movieId, userId}})
        revalidatePath(`/movies/${movieId}`)
        return {message: 'removed'}
    } catch (error) {
        console.log(error)
        return {message: 'DB error'}
    }
    
}
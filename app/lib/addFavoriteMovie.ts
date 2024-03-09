'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';

export const addFavouriteMovie = async (favouriteMovie: any) => {
    try {
        await prisma.favoriteMovie.create({ data: { ...favouriteMovie } }) 
        revalidatePath(`/movies/${favouriteMovie.movieId}`)
        return {message: 'added to favorite'}
    } catch (error) {
        console.log(error)
        return {message: 'DB error'}
    }
    
}
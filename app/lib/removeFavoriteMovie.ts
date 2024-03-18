'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { z } from 'zod';

export const removeFavouriteMovie = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
    const schema = z.object({
        movieId: z.number().min(1),
        userId: z.number().min(1),
    });
    
    const data = schema.parse({
        movieId: Number(formData.get('movieId')),
        userId: Number(formData.get('userId'))
    })
    const {movieId, userId} =data
    try {
        await prisma.favoriteMovie.deleteMany({where: {movieId, userId}})
        revalidatePath(`/favorite`)
        return {message: 'removed'}
    } catch (error) {
        console.log(error)
        return {message: 'DB error'}
    }
    
}
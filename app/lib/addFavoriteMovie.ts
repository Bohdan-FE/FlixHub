'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { z } from 'zod';

export const addFavouriteMovie = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
    const schema = z.object({
        movieId: z.number().min(1),
        title: z.string().min(1),
        poster_path: z.string(),
        release_date: z.string().min(1),
        vote_average: z.number(),
        userId: z.number().min(1),
    });
    
    const data = schema.parse({
        movieId: Number(formData.get('movieId')),
        title: formData.get('title'),
        poster_path: formData.get('poster_path'),
        release_date: formData.get('release_date'),
        vote_average: Number(formData.get('vote_average')),
        userId: Number(formData.get('userId'))
    })
   

    try {
        await prisma.favoriteMovie.create({ data: {...data} }) 
        revalidatePath(`/movies/${data.movieId}`)
        return {message: 'added to favorite'}
    } catch (error) {
        return {message: 'DB error'}
    }
    
}
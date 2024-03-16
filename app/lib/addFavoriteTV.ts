'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { z } from 'zod';

export const addFavouriteTV = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
    const schema = z.object({
       tvId: z.number().min(1),
        name: z.string().min(1),
        poster_path: z.string(),
        first_air_date: z.string().min(1),
        vote_average: z.number(),
        userId: z.number().min(1),
    });
    
    const data = schema.parse({
        tvId: Number(formData.get('tvId')),
        name: formData.get('name'),
        poster_path: formData.get('poster_path'),
        first_air_date: formData.get('first_air_date'),
        vote_average: Number(formData.get('vote_average')),
        userId: Number(formData.get('userId'))
    })
   

    try {
        await prisma.favoriteTVs.create({ data: {...data} }) 
        revalidatePath(`/tv/${data.tvId}`)
        return {message: 'added to favorite'}
    } catch (error) {
        return {message: 'DB error'}
    }
    
}
'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from './prisma';
import { z } from 'zod';

export const removeFavouriteTV = async (
  prevState: {
    message: string;
  },
  formData: FormData,
) => {
    const schema = z.object({
        tvId: z.number().min(1),
        userId: z.number().min(1),
    });
    
    const data = schema.parse({
        tvId: Number(formData.get('tvId')),
        userId: Number(formData.get('userId'))
    })
    const {tvId, userId} = data
    try {
        await prisma.favoriteTVs.deleteMany({where: {tvId, userId}})
        revalidatePath(`/tv/${tvId}`)
        return {message: 'removed'}
    } catch (error) {
        console.log(error)
        return {message: 'DB error'}
    }
    
}
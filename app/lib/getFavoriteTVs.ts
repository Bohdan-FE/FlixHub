'use server'

import { prisma } from './prisma';

export const getFavouriteTVs= async (userId: number) => {
    try {
        const data = await prisma.favoriteTVs.findMany({where: {userId}})
        return data
    } catch (error) {
        console.log(error)
    }
    
}
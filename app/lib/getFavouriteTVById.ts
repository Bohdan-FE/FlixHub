'use server'

import { prisma } from './prisma';

export const getFavouriteTVById = async (userId: number, tvId: number) => {
    try {
        const data = await prisma.favoriteTVs.findMany({where: {userId, tvId }})
        return data
    } catch (error) {
        console.log(error)
        return[{message: 'DB error'}]
    }
    
}
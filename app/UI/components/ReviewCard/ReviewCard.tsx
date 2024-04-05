'use client'

import Image, { StaticImageData } from 'next/image';
import defaultAvatar from '../../../../public/default_poster.jpg'
import { useState } from 'react';

import StarRatingMini from '../StarRatingMini/StarRatingMini';

function ReviewCard({ review }: { review: ReviewItem }) {
    const [src, setSrc] = useState<StaticImageData | string>(`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`)
    console.log(review)

    return (
        <li className='mb-5 odd:bg-neutral-800 p-3 rounded-lg even:bg-neutral-700'>

            <div className='flex gap-5 items-center mb-3' >
                <div className='rounded-full w-[80px] h-[80px] shrink-0 overflow-hidden'>
                    <Image className='object-cover object-center w-[80px] h-[80px]' src={src} width={70} height={70} alt={review.author} onError={e => setSrc(defaultAvatar)} />
                </div>
                <div>
                    <p className='text-xl font-semibold mb-1'>{review.author}</p>
                    <p className='italic'>{review.created_at.slice(0, 10)}</p>
                    <StarRatingMini rating={review.author_details.rating} />
                </div>
            </div>
            <p className='p-2 text-justify transition-all overflow-hidden max-h-[25%] hover:max-h-[]'>{review.content}</p>
        </li>
    );
}

export default ReviewCard;
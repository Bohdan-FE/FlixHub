'use client'

import Image from 'next/image';
import defaultAvatar from '../../../../public/photo-cover.svg'
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';

function ReviewCard({ review }: { review: ReviewItem }) {
    const [src, setSrc] = useState(`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`)

    return (
        <li>
            <Image src={src} width={100} height={100} alt={review.author} onError={e => setSrc(defaultAvatar)} />
            <p>{review.author}</p>
            <StarRating rating={review.author_details.rating} />
            <p>{review.content}</p>
            <p>{review.created_at.slice(0, 10)}</p>
        </li>
    );
}

export default ReviewCard;
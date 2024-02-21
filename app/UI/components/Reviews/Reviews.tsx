import { getReviews } from "@/app/lib/getReviews";
import defaultAvatar from '../../../../public/photo-cover.svg'
import Image from "next/image";
import ReviewCard from "../ReviewCard/ReviewCard";

async function Reviews({ id }: { id: string }) {
    const reviewsData = await getReviews(id)
    const reviews = reviewsData.results
    if (reviews.length < 1) return
    return (
        <>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(item => <ReviewCard key={item.id} review={item} />)}
            </ul>
        </>

    );
}

export default Reviews;

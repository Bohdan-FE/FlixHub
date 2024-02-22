import { getReviews } from "@/app/lib/getReviews";
import defaultAvatar from '../../../../public/photo-cover.svg'
import Image from "next/image";
import ReviewCard from "../ReviewCard/ReviewCard";

async function Reviews({ id }: { id: string }) {
    const reviewsData = await getReviews(id)
    const reviews = reviewsData.results
    if (reviews.length < 1) return
    return (
        <div className="max-w-7xl mx-auto" >
            <h2 className="text-neutral-300 font-semibold text-4xl mb-6 text-center">Reviews:</h2>
            <ul>
                {reviews.map(item => <ReviewCard key={item.id} review={item} />)}
            </ul>
        </div>

    );
}

export default Reviews;

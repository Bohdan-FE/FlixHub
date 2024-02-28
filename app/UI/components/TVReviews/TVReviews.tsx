
import ReviewCard from "../ReviewCard/ReviewCard";
import { getTVReviews } from "@/app/lib/getTVReviews";

async function TVReviews({ id }: { id: string }) {
    const reviewsData = await getTVReviews(id)
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

export default TVReviews;
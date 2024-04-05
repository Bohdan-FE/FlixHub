
import ReviewCard from "../ReviewCard/ReviewCard";
import { getReviews } from "@/app/lib/getReviews";


async function MovieReviews({ id }: { id: string }) {
    const reviewsData = await getReviews(id);
    const reviews = reviewsData?.results


    return (
        <div className="max-w-7xl mx-auto" >
            <h2 className="text-neutral-300 font-semibold text-4xl mb-6 text-center">Reviews:</h2>
            <ul>
                {reviews.map(item => <ReviewCard key={item.id} review={item} />)}
            </ul>
        </div>

    );
}

export default MovieReviews;

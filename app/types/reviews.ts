interface Review {
    id: number;
    page: number;
    results: ReviewItem[];
    total_pages: number;
    total_results: number;
}

interface ReviewItem {
    author: string;
    author_details: {
        name: string;
        username: string;
        avatar_path: string | null;
        rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
}
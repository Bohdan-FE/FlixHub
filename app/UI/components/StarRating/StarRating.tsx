import { ReactNode } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarOutline } from "react-icons/ti";

function StarRating({ rating }: { rating: number }) {

    const ratingRounded = Math.round(rating) / 2

    const starArray = (rating: number): string[] => {
        const ratingArr = generateArray(rating)
        const arr = []
        for (let i = 1; i <= 5; i += 1) {
            if (i === ratingArr[i - 1]) {
                arr.push('star')
            } else if (ratingArr[i - 1] === 0.5) {
                arr.push('semistar')
            } else if (!ratingArr[i - 1]) {
                arr.push('null')
            }
        }
        return arr
    }

    const stars = starArray(ratingRounded)

    function generateArray(number: number) {
        let integerPart = Math.floor(number);
        let fractionalPart = number - integerPart;
        let array = Array.from({ length: integerPart }, (_, index) => index + 1);
        array.push(fractionalPart);
        return array;
    }

    return (
        <div className="flex justify-end mb-4 mt-4">
            {stars.map((star, index) => <Star star={star} key={index} />)}
        </div>
    );
}

function Star({ star }: { star: string }): ReactNode {
    if (star === 'star') {
        return <TiStarFullOutline className="fill-yellow-400 w-8 h-8" />
    }
    if (star === 'semistar') {
        return <TiStarHalfOutline className="fill-yellow-400 w-8 h-8" />
    }
    if (star === 'null') {
        return <TiStarOutline className="fill-neutral-500 w-8 h-8" />
    }
    return null
}




export default StarRating;
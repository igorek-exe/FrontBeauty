import { getReviewWord } from '@/utils/format/getWordForm.ts';
import type { MasterCardProps } from '@/components/master/MasterCard/index.model';

export const useMasterCard = (props: MasterCardProps) => {
    const { name, rating = 0, reviewsCount = 0, specialty, address } = props;

    const formattedRating = rating.toFixed(1);
    const reviewWord = getReviewWord(reviewsCount);

    return {
        name,
        rating: formattedRating,
        reviewsCount,
        specialty,
        address,
        reviewWord,
    };
};

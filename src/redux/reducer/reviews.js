import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, payload } = action; switch (type) {
    case ADD_REVIEW:
      const { reviewId, userId, values } = payload;
      return {
        ...reviews,
        [reviewId]: { ...values, userId, id: reviewId },
      };
    default:
      return reviews;
  }
};
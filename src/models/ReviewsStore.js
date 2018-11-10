import Review from './Review';
import User from './User';

class ReviewsStore {
	static build(data) {
		if (!data) {
			return;
		}

		const store = new ReviewsStore();

		store.reviews = data.reviews.map(review => Review.build(review));
		store.currentUser = User.build(data.currentUser);

		return store;
	}
}

export default ReviewsStore;

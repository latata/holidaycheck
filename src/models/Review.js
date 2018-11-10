import { decorate, observable, action, computed } from 'mobx';
import Comment from './Comment';
import User from './User';

class Review {
	static build(data) {
		if (!data) {
			return;
		}

		const review = new Review();

		// assign all data properties to object's properties
		Object.assign(review, data);

		review.comment = Comment.build(data.comment);
		review.user = User.build(data.user);
		review.creationDate = new Date(data.creationDate);

		return review;
	}

	saveComment(comment) {
		this.comment = comment;
	}

	get formattedCreationDate() {
		return this.creationDate.toLocaleString(undefined, {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		})
	}
}

decorate(Review, {
	comment: observable,
	saveComment: action,
	formattedCreationDate: computed,
});

export default Review;

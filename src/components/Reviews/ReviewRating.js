import React from 'react';

const ReviewRating = ({ rating }) => {
	const stars = [];

	for (let i = 0; i < 6; i++) {
		const classNames = ['fas', 'fa-star'];
		if (rating > i) {
			classNames.push('is-active');
		}
		stars.push(<i key={i} className={classNames.join(' ')} />);
	}

	return (
		<div className="review__stars">
			{stars}
			<span className="review__stars-rating">{rating}/6</span>
		</div>
	);
};

export default ReviewRating;

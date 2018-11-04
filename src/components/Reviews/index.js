import React from 'react';

import './styles.scss';
import Review from './Review';

const Reviews = () => (
	<section className="reviews">
		<div className="reviews__container">
			<Review />
			<Review />
			<Review />
		</div>
	</section>
);

export default Reviews;

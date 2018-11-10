import React from 'react';
import { inject } from 'mobx-react';

import './styles.scss';
import Review from './Review';

const Reviews = ({ reviews }) => (
	<section className="reviews">
		<div className="reviews__container">
			{reviews.map((review, index) => <Review review={review} key={index} />)}
		</div>
	</section>
);

export default inject(({ store: { reviews } }) => ({ reviews }))(Reviews);

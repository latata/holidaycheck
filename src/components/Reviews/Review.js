import React from 'react';

import './Review.scss';

const Review = () => (
	<article className="review">
		<img className="review__avatar" src="https://randomuser.me/api/portraits/women/76.jpg" alt="Kristen King" />
		<div className="review__details">
			<div className="review__full-name">Kristen King</div>
			<div className="review__date">21 September 2018</div>
		</div>
		<h2>Lovely place! Totally worth visiting.</h2>
		<div className="review__rating">
			<div className="review__thumb">
				<i className="fas fa-thumbs-up"></i>
			</div>
			<div className="review__stars">
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<i className="fas fa-star"></i>
				<span className="review__stars-rating">2/6</span>
			</div>
		</div>
		<div className="review__text">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
			dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</div>
		<div className="review__comment">
			<h3>Comment</h3>
			<div className="review__comment-text">
				Ut lectus arcu bibendum at. Pellentesque elit ullamcorper dignissim cras tincidunt.
				Tincidunt tortor aliquam nulla facilisi. Eros in cursus turpis massa tincidunt dui
				ut ornare lectus. Et netus et malesuada fames ac turpis egestas integer. Volutpat ac
				tincidunt vitae semper. Aliquam sem fringilla ut morbi tincidunt augue interdum
				velit euismod. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit
				ullamcorper dignissim.
			</div>
			<div className="review__comment-form">
				<textarea className="review__comment-textarea"></textarea>
				<button className="review__comment-save">Save</button>
			</div>
			<div className="review__comment-user">
				<img className="review__comment-avatar" src="https://randomuser.me/api/portraits/women/76.jpg" alt="Kristen King" />
				<div className="review__comment-full-name">Kristen King</div>
				<div className="review__comment-role">Hotel Manager</div>
			</div>
		</div>
		<button className="review__add-comment">Add comment</button>
	</article>
);

export default Review;

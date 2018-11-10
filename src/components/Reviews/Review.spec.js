import React from 'react';
import { Provider } from 'mobx-react';
import { mount } from 'enzyme';

import currentUser from '../../mocks/currentUser';
import reviews from '../../mocks/reviews';
import Review from './Review';
import ReviewModel from '../../models/Review';
import ReviewsStore from '../../models/ReviewsStore';

it('renders created comment', () => {
	const store = ReviewsStore.build({
		reviews: [],
		currentUser,
	});
	const review = ReviewModel.build(reviews[0]);
	const commentText = 'Comment text';
	const component = mount(
		<Provider store={store}>
			<Review review={review} />
		</Provider>
	);

	// add a new comment
	component.find('.review__add-comment').simulate('click');
	component.find('.review__comment-textarea').simulate('change', { target: { value: commentText } });
	component.find('.review__comment-save').simulate('click');

	expect(component.find('.review__comment .expandable-text').exists()).toBe(true);
	expect(component.find('.review__comment .expandable-text span').text()).toBe(commentText);
});

it('goes back to initial state when user clicks cancel buttons in comment form', () => {
	const store = ReviewsStore.build({
		reviews: [],
		currentUser,
	});
	const review = ReviewModel.build(reviews[0]);
	const component = mount(
		<Provider store={store}>
			<Review review={review} />
		</Provider>
	);

	// add a new comment
	component.find('.review__add-comment').simulate('click');

	expect(component.find('.review__comment-form').exists()).toBe(true);

	// canceling
	component.find('.review__comment-cancel').simulate('click');

	expect(component.find('.review__comment-form').exists()).toBe(false);
	expect(component.find('.review__comment .expandable-text').exists()).toBe(false);
});

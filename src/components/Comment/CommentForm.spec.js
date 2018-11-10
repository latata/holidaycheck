import React from 'react';
import { mount } from 'enzyme';

import CommentForm from './CommentForm';

it('executes onSave when user clicks save and comment contains text', () => {
	const onSave = jest.fn();
	const component = mount(<CommentForm onSave={onSave} />);
	const commentText = 'Comment text';

	component.find('.review__comment-textarea').simulate('change', { target: { value: commentText } });
	component.find('.review__comment-save').simulate('click');

	expect(onSave).toBeCalled();
});

it('does not execute onSave when user clicks save and comment is empty', () => {
	const onSave = jest.fn();
	const component = mount(<CommentForm onSave={onSave} />);

	component.find('.review__comment-save').simulate('click');

	expect(onSave).toBeCalledTimes(0);
});

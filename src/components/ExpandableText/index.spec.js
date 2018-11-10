import React from 'react'
import { mount } from 'enzyme';

import ExpandableText from './index';

const isExpandableClass = 'is-expandable';
const isExpandedClass = 'is-expanded';
const isCommentClass = 'is-comment';

it('expands after click if text is expandable', () => {
	const component = mount(<ExpandableText text="text" />);

	component.setState({
		isTextExpandable: true,
	});

	expect(component.childAt(0).hasClass(isExpandableClass)).toBe(true);
	expect(component.childAt(0).hasClass(isExpandedClass)).toBe(false);

	component.simulate('click');

	expect(component.state().isTextExpanded).toBe(true);
	expect(component.childAt(0).hasClass(isExpandedClass)).toBe(true);
	expect(component.childAt(0).hasClass(isExpandableClass)).toBe(false);
});

it('doesn\'t expand after click if text is not expandable', () => {
	const component = mount(<ExpandableText text="text" />);

	expect(component.childAt(0).hasClass(isExpandableClass)).toBe(false);
	expect(component.childAt(0).hasClass(isExpandedClass)).toBe(false);

	component.simulate('click');

	expect(component.state().isTextExpanded).toBe(false);
	expect(component.childAt(0).hasClass(isExpandedClass)).toBe(false);
	expect(component.childAt(0).hasClass(isExpandableClass)).toBe(false);
});

it('adds comment class if it is expandable text for comment component', () => {
	const component = mount(<ExpandableText text="text" isComment />);

	expect(component.childAt(0).hasClass(isCommentClass)).toBe(true);
});

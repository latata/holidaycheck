import React from 'react';

const NavigationItem = ({href, title, active}) => (
	<li className="navigation__item">
		<a href={href} className={active && 'is-active'}>{title}</a>
	</li>
);

export default NavigationItem;

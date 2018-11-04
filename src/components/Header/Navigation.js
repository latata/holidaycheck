import React from 'react';
import NavigationItem from './NavigationItem';

const Navigation = () => (
	<nav className="navigation">
		<ul>
			<NavigationItem href="#" title="Dashboard" />
			<NavigationItem href="#" title="Reviews" active />
			<NavigationItem href="#" title="Hotel Manager" />
			<NavigationItem href="#" title="Settings" />
		</ul>
	</nav>
);

export default Navigation;

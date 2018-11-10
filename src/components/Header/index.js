import React from 'react';
import Navigation from './Navigation';

import logo from './hc-logo.svg';

import './styles.scss';

const Header = () => (
	<header className="header">
		<img src={logo} className="header__logo" alt="logo" />
		<Navigation />
	</header>
);

export default Header;

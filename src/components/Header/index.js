import React from 'react';
import logo from '../App/hc-logo.svg';
import Navigation from './Navigation';

import './styles.scss';

const Header = () => (
	<header className="header">
		<img src={logo} className="header__logo" alt="logo" />
		<Navigation />
	</header>
);

export default Header;

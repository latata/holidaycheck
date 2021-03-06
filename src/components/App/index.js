import React from 'react';

import Header from '../Header';
import Reviews from '../Reviews';

import './styles.scss';

const App = () => (
	<div className="app">
		<div className="app__background" />
		<div className="app__container">
			<Header />
			<Reviews />
			<footer>
				&copy; 1999 - 2018 HolidayCheck AG
			</footer>
		</div>
	</div>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import { Provider } from 'mobx-react';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ReviewsStore from './models/ReviewsStore';
import currentUser from './mocks/currentUser';
import reviews from './mocks/reviews';

import './index.scss';

function renderApp(store) {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}

const store = ReviewsStore.build({
	reviews,
	currentUser,
});

WebFont.load({
	google: {
		families: ['Open+Sans:400,600,700,800'],
	},
	active() {
		// render application after the font is loaded to prevent flash of content
		// and calculate height of expandable texts correctly
		renderApp(store);
	},
	inactive() {
		// if something went wrong while loading a font render an App without a font
		renderApp(store);
	}
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

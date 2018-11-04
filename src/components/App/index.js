import React, { Component } from 'react';

import Header from '../Header';
import Reviews from '../Reviews';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="app__container">
			  <Header />
			  <Reviews/>
			  <footer>
				  &copy; 1999 - 2018 HolidayCheck AG
			  </footer>
          </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// Use those 2 lines for rendering HPS project
// *******************************************

// import './index.css';   //Use this for HPS app
// import App from './containers/App'; //Use this for HPS app

// *******************************************


// Use those 2 lines for rendering BurgerBuilder practice app
// *******************************************

import './playground/App.css'; // Use this for BurgerBuilder
import App from './playground/App'; // Use this for BurgerBuilder

// *******************************************



ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './flex-pac/MyComponent';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import {Provider} from 'react-redux';
import FloatMenu from './float-menu';
import GetZTC from './testAnshul';
ReactDOM.render(<Provider store = {store}><GetZTC /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

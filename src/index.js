import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App , ShoppingList } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ShoppingList />, document.getElementById('waah'));
registerServiceWorker();

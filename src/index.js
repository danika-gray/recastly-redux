import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

// Connect app to redux store:
import { Provider } from 'react-redux';
import store from './store/store.js';

// Provider is a higher order component (aka a higher order function). // We are passing App into the provider to bind our react application to the redux store.
// Now the store is available to the rest of the app!
ReactDOM.render(
  <Provider store ={store}>
    <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
  </Provider>,
  document.getElementById('app')
);

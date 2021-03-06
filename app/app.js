/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import 'sanitize.css/sanitize.css';

// Import redux-persist persistGate
import { PersistGate } from 'redux-persist/integration/react';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';
import { ThemeProvider } from 'styled-components';
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/logo.png';
import 'file-loader?name=.htaccess!./.htaccess';
// Import root app
import Hoc from './containers/Hoc';
// Load the favicon and the .htaccess file

/* eslint-enable import/no-unresolved, import/extensions */

import store, { persistor } from './configureStore';
import registerServiceWorker from './registerServiceWorker';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import theme from './constants/theme';
import './resources/styles/App.scss';

// Create redux store with history
const MOUNT_NODE = document.getElementById('app');
const history = createHistory();

/* eslint-disable no-extend-native */
Date.prototype.getUnixTime = date =>
  Math.round(new Date(date).getTime() / 1000);

const render = messages => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <LanguageProvider messages={messages}>
          <PersistGate loading={null} persistor={persistor}>
            <Hoc history={history} />
          </PersistGate>
        </LanguageProvider>
      </Provider>
    </ThemeProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
registerServiceWorker();

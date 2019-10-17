import * as React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import rootReducer from './store';
import { setActive, setPage } from './store/actions'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider as StoreProvider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

const enhancer = composeWithDevTools({
  name: 'Char',
  actionCreators: {
    setActive,
    setPage,
  },
})();

const store = createStore(rootReducer, enhancer);

render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);

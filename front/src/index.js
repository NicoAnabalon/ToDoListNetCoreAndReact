import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './style/theme';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import MainReducer from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(MainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


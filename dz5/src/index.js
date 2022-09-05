import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

const initialState= {
  count: 0,
};

const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'plus':
      return {
        ...state,
        count: state.count+1
      }
    case 'minus':
      return{
        ...state,
        count: state.count-1
      }
    
    default: {
      return state
    }
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);

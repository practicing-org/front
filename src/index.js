import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/rootReducer"
import rootSaga from "./sagas/rootSaga"
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const MyLogger = store=>next=>action=>{
  console.log("prev",action,store.getState());
  next(action);
  console.log("next",action,store.getState());
}

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(
  sagaMiddleware,
  MyLogger,
)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();

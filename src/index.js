import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux'

import store from './store/store';

// import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en";
// import ru from "javascript-time-ago/locale/ru";

// import {AppProvider} from './context/context';

// TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(ru);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

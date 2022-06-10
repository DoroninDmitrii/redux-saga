import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from "react-redux";
import store from "./store";
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from "react-router-dom"


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>

        <Routes>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './modules/Login';

import {routers} from './Routers'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />} />
        {routers.map(route=><Route  path={route.route} element={route.component} />)}
        </Routes>
    </BrowserRouter>
  );
}

export default App;

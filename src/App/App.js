import React from 'react';
import { Routes, Sidebar } from './index';
import './index.css';

const App = props => (
  <div id="app">
    <Sidebar />
    <Routes />
  </div>
)

export default App;

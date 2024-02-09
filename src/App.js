import logo from './logo.svg';
// import './App.css';
import Master_layout from './pages/admin_pages/Master_layout';
import React from 'react';
import { BrowserRouter as router,Route,Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Master_layout/>
    </div>
  );
}

export default App;

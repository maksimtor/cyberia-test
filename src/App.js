import React, { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { Layout } from './components/Layout'

import Projects from './pages/Projects';
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
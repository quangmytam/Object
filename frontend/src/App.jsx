import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Training from './pages/Training';
import Evaluation from './pages/Evaluation';
import Generation from './pages/Generation';
import Datasets from './pages/Datasets';
import Documentation from './pages/Documentation';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename="/LightGNN-Peptide">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="training" element={<Training />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route path="generation" element={<Generation />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="documentation" element={<Documentation />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

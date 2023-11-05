import React from 'react';
import { BrowserRouter, Route, Routes, Route as RouteV6 } from 'react-router-dom';
import { CroctProvider } from '@croct/plug-react';
import { HomeBanner } from './components/HomeBanner';
import { Cep } from './components/Cep';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <RouteV6 path="/cep" element={<Cep />} />
          <RouteV6 path="/" element={<CroctProvider appId="cbebd74e-103e-4592-8e04-02564b5a0d64"><HomeBanner /></CroctProvider>} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;

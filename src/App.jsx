import {CroctProvider} from '@croct/plug-react';
import { HomeBanner } from './components/homeBanner';
import AppProvider from './context/AppProvider';
import './App.css'
import { Cep } from './components/cep';

function App() {
  return (
    <AppProvider>
      <CroctProvider appId="cbebd74e-103e-4592-8e04-02564b5a0d64">
        <HomeBanner />
        <Cep />
      </CroctProvider>
    </AppProvider>
  )
}

export default App

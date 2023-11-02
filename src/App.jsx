import {CroctProvider} from '@croct/plug-react';
import { HomeBanner } from './components/homeBanner';
import AppProvider from './context/AppProvider';
import './App.css'
import { Cep } from './components/cep';

function App() {
  return (
    <AppProvider>
      <CroctProvider appId="9dec254a-7fe2-4aa8-b5ff-10523e82816c">
        <HomeBanner />
        <Cep />
      </CroctProvider>
    </AppProvider>
  )
}

export default App

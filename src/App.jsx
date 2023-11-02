import {CroctProvider} from '@croct/plug-react';
import { HomeBanner } from './components/homeBanner';
import './App.css'

function App() {

  return (
    <CroctProvider appId="cbebd74e-103e-4592-8e04-02564b5a0d64">
      <HomeBanner />
      <button className="cta">teste</button>
    </CroctProvider>
  )
}

export default App

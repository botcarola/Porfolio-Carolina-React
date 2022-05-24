import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Contacto from './components/Contacto';
import SobreMi from './components/SobreMi';
import Proyecto from './components/Proyecto';
import Rutant from './components/Rutant';

const App = () => {  

  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={ <Home /> } />  
            <Route path="/sobre-mi" element={ <SobreMi />} />  
            <Route path="/contacto"  element={ <Contacto /> } />   
            <Route path="/:proyecto" element={ <Proyecto /> } />     
            <Route path="/*" element={ <Rutant /> } />
        </Routes>
        <Footer />        
    </BrowserRouter>
  )
}
export default App;

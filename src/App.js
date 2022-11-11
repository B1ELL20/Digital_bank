
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import React, {useState} from 'react'
import Capa from './components/Capa';
import QuemSomos from './components/QS';
import Servicos from './components/Servicos';
import AppBank from './components/AppBank';
import FooterBank from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = ()=> {

    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Navbar toggle={toggle}/>
      <Capa />
      <QuemSomos />
      <Servicos />
      <AppBank />
      <FooterBank />
    </>
  );
}

export default App;

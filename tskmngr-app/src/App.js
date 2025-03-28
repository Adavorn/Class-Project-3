import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/contact';
import NavBar from './components/NavBar';
import './App.css';

function App() {
   
  return (
    <>
      <HashRouter> 
        <NavBar/>         
        <Routes>      
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </HashRouter>   
     
    </>
  ); 
}
export default App;

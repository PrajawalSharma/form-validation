import './App.css';
import rocketImg from './assets/rocket.png';
import { Signup } from './components/Signup';
import { NavBar } from './components/NavBar';
import {BrowserRouter, Routes, Rotue, Route} from 'react-router-dom'
import { SignupComponent } from './components/SignupComponent';
import { LoginComponent } from './components/LoginComponent';
import { ContactusComponent } from './components/ContactusComponent';

function App() {
  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
     <Route path="/" element={<LoginComponent />}></Route>
     <Route path="/register" element={<SignupComponent />}></Route>
     <Route path="/contactus" element={<ContactusComponent />}></Route>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;

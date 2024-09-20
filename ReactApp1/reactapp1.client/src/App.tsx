import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Login from './Pages/Login.tsx';
import Register from './Pages/Register.tsx';
//import LoginLayout from './Pages/LoginLayout.tsx';
//import MainLayout from './Pages/MainLayout.tsx';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/login"><LoginLayout><Login /></LoginLayout></Route>*/}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />                
                {/*<Route path="/" ><MainLayout><Home/></MainLayout></Route>*/}
            </Routes>
        </BrowserRouter>
    );

}
export default App;
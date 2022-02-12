import react, {useEffect, useState} from "react"
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Login from "./components/login.jsx";
import Account from "./components/account.jsx";
import { ThemeProvider } from "@chakra-ui/core";
import Register from "./components/register.jsx";
function App() {
  
    return (
      <div className="App" >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/account" element={<Account />} />  
            </Routes>
         </BrowserRouter>
      </div>
    );
}

export default App;

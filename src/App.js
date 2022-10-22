import {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from "styled-components";

import './App.css';

import AccountBox from "./components/accountBox/AccountBox";
import Home from './components/mainContent/Home';
import AuthenticationService from './components/authentication/AuthenticationService';
import AuthenticationRoute from './components/authentication/AuthenticationRoute';
import Navbar from "./components/responsive/navbar";


const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(AuthenticationService.isUserLoggedIn());

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={
                        <div className="area">
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <AppContainer>
                                <AccountBox click={setIsUserLoggedIn}/>
                            </AppContainer>
                        </div>
                    }/>
                    <Route path="/login" element={
                        <div className="area">
                            <ul className="circles">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <AppContainer>
                                <AccountBox click={setIsUserLoggedIn}/>
                            </AppContainer>
                        </div>
                    }/>
                    <Route path="/home" element={
                        <AuthenticationRoute>
                            <>
                                <Navbar/>
                                <Home/>
                            </>
                        </AuthenticationRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

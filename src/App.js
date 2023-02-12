import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Header from './components/Header';
import Todos from './components/Todos';
import Error from './components/Error';
import Welcome from './components/Welcome';
import AuthProvider from './security/AuthContext';

function App() {
    return (
        <div className="App">
            <AuthProvider>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/welcome/:username" element={<Welcome />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>
    );
}
export default App;

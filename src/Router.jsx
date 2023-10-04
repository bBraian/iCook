import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Home } from './pages/home';
import { useState } from 'react';
import { NotFound } from './pages/error/NotFound';

export function Router() {
    const [user, setUser] = useState(true)
    return (
        <Routes>
            <Route path='/' element={ user ? <Home /> : <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}
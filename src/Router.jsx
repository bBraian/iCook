import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Home } from './pages/home';
import { useState } from 'react';
import { NotFound } from './pages/error/NotFound';
import { Recipe } from './pages/Recipe';
import { Profile } from './pages/Profile';
import { InDevelopment } from './pages/error/InDevelopment';

export function Router() {
    const [user, setUser] = useState(false)
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/receita' element={<Recipe />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/register' element={ <Register /> } />
            <Route path='/in-development' element={ <InDevelopment /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}
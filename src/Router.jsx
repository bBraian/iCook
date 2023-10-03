import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

export function Router() {
    return (
        <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='/register' element={ <Register /> } />
        </Routes>
    )
}
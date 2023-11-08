import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { Home } from './pages/Home';
import { NotFound } from './pages/error/NotFound';
import { Recipe } from './pages/Recipe';
import { Profile } from './pages/Profile';
import { InDevelopment } from './pages/error/InDevelopment';
import { CreateRecipe } from './pages/CreateRecipe';

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/receita/:recipeId' element={<Recipe />} />
            <Route path='/criar-receita' element={<CreateRecipe />} />
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/register' element={ <Register /> } />
            <Route path='/in-development' element={ <InDevelopment /> } />
            <Route path='*' element={ <NotFound /> } />
        </Routes>
    )
}
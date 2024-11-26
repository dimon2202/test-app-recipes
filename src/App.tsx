import { Routes, Route } from 'react-router-dom';
import AllRecipes from './pages/AllRecipes';
import RecipeDetails from './pages/RecipeDetails';
import SelectedRecipes from './pages/SelectedRecipes';

const App = () => {
    return (
        
            <Routes>
                <Route path="/" element={<AllRecipes />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
      
    );
};

export default App;

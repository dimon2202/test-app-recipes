import { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import Pagination from '../components/Pagination';
import CategoryFilter from '../components/CategoryFilter';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const recipesPerPage = 6;

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const data = await response.json();
            setRecipes(data.meals || []);
            setFilteredRecipes(data.meals || []);
        };

        const fetchCategories = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
            const data = await response.json();
            setCategories(data.meals.map((category: any) => category.strCategory));
        };

        Promise.all([fetchRecipes(), fetchCategories()]).finally(() => setLoading(false));
    }, []);

    const handleFilter = (category: string) => {
        setCurrentPage(1);
        if (!category) {
            setFilteredRecipes(recipes);
        } else {
            setFilteredRecipes(recipes.filter((recipe) => recipe.strCategory === category));
        }
    };

    const displayedRecipes = filteredRecipes.slice(
        (currentPage - 1) * recipesPerPage,
        currentPage * recipesPerPage
    );

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">All Recipes</h1>
            <CategoryFilter categories={categories} onFilter={handleFilter} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {displayedRecipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} meal={recipe} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredRecipes.length / recipesPerPage)}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </div>
    );
};

export default AllRecipes;

import { useState } from 'react';

const SelectedRecipes = () => {
    const [selectedRecipes, setSelectedRecipes] = useState<any[]>([]);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Selected Recipes</h1>
            {selectedRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {selectedRecipes.map((recipe) => (
                        <div key={recipe.idMeal} className="border p-4 rounded">
                            <h2 className="font-bold">{recipe.strMeal}</h2>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-32 object-cover" />
                        </div>
                    ))}
                </div>
            ) : (
                <div>No recipes selected.</div>
            )}
        </div>
    );
};

export default SelectedRecipes;

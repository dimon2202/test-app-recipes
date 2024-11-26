import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = await response.json();
            setRecipe(data.meals[0]);
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient !== "" && measure && measure !== "") {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{recipe.strMeal}</h1>
                <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
            <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full rounded-lg mt-4"
            />
            <p className="mt-4 text-lg font-semibold">Category: {recipe.strCategory}</p>
            <p className="text-lg font-semibold">Area: {recipe.strArea}</p>

            {recipe.strTags && (
                <p className="mt-2 text-lg font-semibold">Tags: {recipe.strTags}</p>
            )}

            <h2 className="mt-6 text-2xl font-semibold">Ingredients:</h2>
            <ul className="list-disc ml-8">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-lg">{ingredient}</li>
                ))}
            </ul>

            <h2 className="mt-6 text-2xl font-semibold">Instructions:</h2>
            <p className="text-lg">{recipe.strInstructions}</p>

            {recipe.strYoutube && (
                <div className="mt-6">
                    <h2 className="text-2xl font-semibold">Watch the Video:</h2>
                    <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        {recipe.strMeal} - Watch the Recipe Video
                    </a>
                </div>
            )}

            {recipe.strSource && (
                <div className="mt-4">
                    <h2 className="text-2xl font-semibold">Source:</h2>
                    <a
                        href={recipe.strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        {recipe.strSource}
                    </a>
                </div>
            )}
        </div>
    );
};

export default RecipeDetails;

import { Link } from "react-router-dom";

const RecipeCard = ({ meal }: { meal: any }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{meal.strMeal}</h2>
            <p className="text-sm text-gray-600">{meal.strCategory}</p>
            <Link to={`/recipe/${meal.idMeal}`}>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
                View Details
            </button>
            </Link>
        </div>
    );
};

export default RecipeCard;

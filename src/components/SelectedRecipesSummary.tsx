const SelectedRecipesSummary = ({ selectedRecipes }: { selectedRecipes: any[] }) => {
    const combinedIngredients = selectedRecipes.reduce((acc, recipe) => {
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {
                acc[ingredient] = acc[ingredient]
                    ? `${acc[ingredient]}, ${measure}`
                    : measure;
            }
        }
        return acc;
    }, {} as Record<string, string>);

    return (
        <div>
            <h3 className="text-lg font-bold mt-4">Ingredients List:</h3>
            <ul>
                {Object.entries(combinedIngredients).map(([ingredient, amount]) => (
                    <li key={ingredient}>{`${ingredient}: ${amount}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default SelectedRecipesSummary;

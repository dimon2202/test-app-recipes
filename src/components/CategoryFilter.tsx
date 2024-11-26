const CategoryFilter = ({ categories, onFilter }: { categories: string[]; onFilter: (category: string) => void }) => {
    return (
        <div className="mb-4">
            <h3 className="text-lg font-bold mb-2">Filter by Category</h3>
            <select
                onChange={(e) => onFilter(e.target.value)}
                className="border p-2 rounded"
                defaultValue=""
            >
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;

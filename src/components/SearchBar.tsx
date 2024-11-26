import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            onSearch(query);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query, onSearch]);

    return (
        <div className="my-4">
            <input
                type="text"
                placeholder="Search recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border px-4 py-2 rounded"
            />
        </div>
    );
};

export default SearchBar;

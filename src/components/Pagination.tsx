const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
}: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}) => {
    const getPageNumbers = () => {
        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        if (currentPage <= 7) {
            return [...Array.from({ length: 7 }, (_, i) => i + 1), '...', totalPages];
        }
        if (currentPage > totalPages - 7) {
            return [1, '...', ...Array.from({ length: 7 }, (_, i) => totalPages - 6 + i)];
        }
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    return (
        <div className="flex items-center space-x-2 mt-4 justify-center">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                &lt;
            </button>
            {getPageNumbers().map((page, index) => (
                <button
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    className={`px-3 py-1 border rounded ${
                        currentPage === page ? 'bg-blue-500 text-white' : ''
                    }`}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;

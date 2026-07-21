function SearchBar({ search, setSearch }) {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text">🔍</span>

            <input
                type="text"
                className="form-control"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;